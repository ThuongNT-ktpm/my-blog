---
date: "2026-03-30"
---

# Tối ưu hóa xử lý Chuỗi và Số lớn: StringBuilder, StringBuffer & BigInteger

Trong Java, `String` và các kiểu dữ liệu nguyên thủy (`int`, `long`) rất phổ biến nhưng lại có những giới hạn nhất định trong các kịch bản thực tế. Khi hệ thống của bạn cần xử lý hàng triệu thao tác nối chuỗi mỗi giây, hoặc thao tác với những con số khổng lồ mang tính bảo mật/tài chính, bạn bắt buộc phải hiểu và làm chủ **StringBuilder, StringBuffer** và **BigInteger**.

---

## 1. Vấn đề của lớp `String` (Tính Immutable)

Trong Java, `String` là **Immutable** (Bất biến). Khi bạn chỉnh sửa một chuỗi, hệ thống không thay đổi gía trị hiện tại mà **tạo ra một đối tượng String hoàn toàn mới** trong vùng nhớ (đặc biệt là String Pool hoặc Heap).

```java
String s = "Hello";
s = s + " World"; // Tạo ra thêm một object "Hello World", object "Hello" cũ bị vứt bỏ.
```
Nếu bạn thực hiện lệnh nối chuỗi này 100,000 lần trong một thiết kế xuất file, Java sẽ tạo ra 100,000 đối tượng rác. Điều này dẫn đến tràn bộ nhớ và ép hệ thống dọn dẹp rác (**Garbage Collector**) phải hoạt động liên tục làm chậm hoặc đứng ứng dụng.

Để khắc phục điều này ở trong các phép nối chuỗi cường độ cao, ta dùng `StringBuilder` và `StringBuffer`.

---

## 2. StringBuilder: Vua Tốc Độ (Đơn Luồng)

`StringBuilder` điều chỉnh nội dung trực tiếp trên khay nhớ đệm (buffer array) hiện tại thay vì tạo đối tượng mới mỗi khi thay đổi đổi.

- **Đặc điểm**: Tốc độ thực thi ưu việt, hiệu năng cực cao, **không an toàn luồng** (Not Thread-Safe).
- **Khi nào dùng**: Khi xử lý, tạo chuỗi phức tạp trong một phương thức cục bộ (nơi không có nhiều luồng cùng tranh chấp một biến).

###  Ví dụ thực tế: Sinh mã CSV từ Database 
Tưởng tượng bạn viết tính năng Xuất Báo Cáo Doanh Thu (Export CSV) cho hàng trăm nghìn dòng dữ liệu. Với StringBuilder, bạn chỉ dùng duy nhất 1 object trong toàn bộ quá trình.

```java
import java.util.List;

public class CsvExportService {
    
    // Giả sử records là hàng trăm nghìn dòng lấy từ SQL
    public String exportRecordsToCsv(List<Record> records) {
        // Khởi tạo StringBuilder với dung lượng dự kiến ban đầu (VD: 10MB) 
        // để tránh việc hệ thống phải mở rộng mảng ngầm định liên tục gây chậm trễ
        StringBuilder csvBuilder = new StringBuilder(10 * 1024 * 1024); 
        
        // Thêm Dòng Tiêu Đề (Header)
        csvBuilder.append("ID,Tên Khách Hàng,Số Tiền,Ngày Giao Dịch\n");
        
        // Thêm Data ở tốc độ siêu cao
        for (Record r : records) {
            csvBuilder.append(r.getId()).append(",")
                      .append(r.getCustomerName()).append(",")
                      .append(r.getAmount()).append(",")
                      .append(r.getTransactionDate()).append("\n"); // Không tốn chi phí rác bộ nhớ
        }
        
        return csvBuilder.toString();
    }
}
```

---

## 3. StringBuffer: An Toàn và Chắc Chắn (Đa Luồng)

`StringBuffer` giống hệt `StringBuilder` ở cách hoạt động bên trong (đều là mảng char có thể thay đổi kích thước). Khác biệt sống còn là: **Các method của StringBuffer được sử dụng từ khóa `synchronized`**.

- **Đặc điểm**: **An toàn luồng (Thread-Safe)** nhưng chậm hơn `StringBuilder` (do các luồng phải đợi để lấy khóa lock).
- **Khi nào dùng**: Bạn sẽ cần nó khi có một biến chuỗi cục bộ (Global/Static Object) mà nhiều luồng (Threads) thực hiện chỉnh sửa nó vào cùng một thời điểm.

###  Ví dụ thực tế: Bộ đệm ghi Log Console trong Môi trường Đa luồng
Trong một Server tự xây dựng, nhiều user đẩy request login cùng lúc. Ta muốn gộp chung (aggregate) tất cả chuỗi log của tất cả các user vào một object ở RAM trước khi đẩy thẳng vào File định kỳ.

```java
public class MemoryLogAggregator {
    // Dùng StringBuffer để đảm bảo khi 2 thread cùng nối chuỗi không bị đè mất dữ liệu
    private static StringBuffer logBuffer = new StringBuffer();

    // Phương thức để các luồng (Thread) gọi đến đồng thời (Concurrent)
    public static void log(String message) {
        // Nếu luồng A và Luồng B gọi hàm đè cùng lúc,
        // StringBuffer sẽ tự động chặn 1 luồng lại và chạy nối tiếp tuần tự
        logBuffer.append("[LOG] ")
                 .append(Thread.currentThread().getName())
                 .append(" - ")
                 .append(message)
                 .append("\n");
    }

    public static String dumpLogs() {
        return logBuffer.toString();
    }
}

public class ServerSimulation {
    public static void main(String[] args) throws InterruptedException {
        // Giả lập 2 người dùng thao tác song song
        Thread t1 = new Thread(() -> MemoryLogAggregator.log("User A đã đăng nhập thành công!"));
        Thread t2 = new Thread(() -> MemoryLogAggregator.log("User B phát sinh thanh toán lỗi."));
        
        t1.start(); t2.start();
        t1.join();  t2.join();
        
        // Ghi cực kì an toàn, rành mạch
        System.out.println(MemoryLogAggregator.dumpLogs());
    }
}
```

---

## Bảng So Sánh Chi Tiết: String, StringBuilder và StringBuffer

Để dễ dàng tổng hợp thông tin, đặc biệt hữu ích khi ôn tập phỏng vấn, bạn có thể tham khảo bảng so sánh dưới đây:

| Yếu tố so sánh | `String` | `StringBuilder` | `StringBuffer` |
|------------------|------------|-------------------|------------------|
| **Khả năng lưu trữ** | Bất biến (Immutable) - Sinh đối tượng rác liên tục | Có thể thay đổi (Mutable) | Có thể thay đổi (Mutable) |
| **An toàn đa luồng** | **Có** (do giá trị không bao giờ đổi) | **Không** (Not Thread-Safe) | **Có** (Các hàm sử dụng `synchronized`) |
| **Hiệu năng xử lý** | Chậm nhất khi nối ghép chuỗi liên tục | **Nhanh nhất**, tiết kiệm RAM tối đa | Nhanh hơn String, chậm hơn StringBuilder do đợi khóa (Lock) |
| **Ứng dụng tốt nhất** | Giữ tĩnh cấu hình, đoạn văn ngắn hay làm Key HashMap | Nối file lớn, sinh HTML/JSON trong thao tác đơn luồng | Ghi bộ đệm cho Log, chat nhóm khi nhiều luồng cùng gửi lên |

---

## 4. BigInteger: Chinh phục Dữ Liệu Khổng Lồ

Kiểu dữ liệu cơ bản lớn nhất trong Java là `long` (8-byte), và nó chỉ chứa được giá trị tối đa là `9,223,372,036,854,775,807`. Trong các ứng dụng Blockchain, xử lý tiền tệ thập phân cấp rất sâu, hay tạo mã bảo mật RSA thì kiểu `long` sẽ văng Exception ngay lập tức (Số quá lớn). 

Lúc này, `BigInteger` xuất hiện. Nó có thể lưu trữ con số với **độ lớn tùy ý** bằng cách dùng mảng lưu các chữ số và mô phỏng phép toán `+ - * /` như tính nháp thủ công. 

###  Ví dụ thực tế 1: Phát triển Ví Crypto (Ethereum / Blockchain)
Trên Ethereum, đơn vị gốc cơ bản không phải là "1 ETH" mà là Wei.
Quy đổi: 1 ETH = $10^{18}$ Wei. Nếu một sàn giao dịch gom của khách 25,000 ETH, thì số Wei sẽ vươn xa khỏi giới hạn kiểu `long`. Bạn buộc phải dùng `BigInteger`.

```java
import java.math.BigInteger;

public class CryptoWallet {
    public static void main(String[] args) {
        // Tổng tiền sàn trên Smart Contract (25,000 ETH)
        // Khởi tạo bằng text để chặn Exception giới hạn nguyên thủy
        BigInteger totalPool = new BigInteger("25000000000000000000000"); 
        
        // Người dùng Nạp thêm 0.5 ETH (Tương đương kích thước 500,000,000,000,000,000 Wei)
        BigInteger depositAmount = new BigInteger("500000000000000000");
        
        // Cách gọi hàm: total = total + deposit
        BigInteger currentBalance = totalPool.add(depositAmount);
        
        System.out.println("Tổng dư hiện tại (đơn vị Wei): " + currentBalance.toString());
        // Cho ra kết quả chính xác không có một chút sai số nào.
    }
}
```

###  Ví dụ thực tế 2: Tính toán bảo mật RSA (Mật Mã Hacker)
Hệ thống ngân hàng sử dụng thuật toán mã hóa RSA. Mã hóa RSA yêu cầu tạo ra các Cặp Chìa Khóa bí mật phụ thuộc vào các số **Nguyên Tố độ dài hơn 1024-bit** (chiều dài hàng trăm chữ số). 

`BigInteger` cung cấp sẵn hàm `isProbablePrime()` siêu tốc để tìm Số Khủng, và hàm phép chia lấy dư module mũ `modPow()` vốn dùng tạo Token.

```java
import java.math.BigInteger;
import java.util.Random;

public class RSASimulation {
    public static void main(String[] args) {
        // 1. Máy chủ tự khởi sinh một Số Nguyên Tố P siêu lớn (độ dài 512 bit)
        BigInteger p = BigInteger.probablePrime(512, new Random());
        System.out.println("Số nguyên tố làm chìa khóa bí mật: \n" + p);

        // 2. Chức năng Mã Hóa Token: Cipher = (Message ^ Exponent) mod N
        BigInteger message = new BigInteger("89283749823"); // ID Mật khẩu của tài khoản
        BigInteger exponent = new BigInteger("65537");      // Số mũ cố định chuẩn RSA
        BigInteger n = BigInteger.probablePrime(512, new Random()); // Thành phần N
        
        // Nếu dùng thuật loop (for i) để mũ số này lên 65537 lần -> đứt cáp RAM
        // Java BigInteger tính ModPow trong một phần tỷ giây:
        BigInteger cipherText = message.modPow(exponent, n);
        
        System.out.println("\nThông điệp sau khi đã bị RSA băm nát: \n" + cipherText);
    }
}
```

## Tổng kết ngắn gọn khi đi Phỏng Vấn (Hoặc Coding)

1. Gặp bài toán ghép chuỗi ngắn, ghép 2 biến: Hãy dùng `String`.
2. Gặp bài toán có vòng lặp sinh ra chuỗi nối đuôi (Render Dữ Liệu HTML, sinh mẫu CSV, JSON..): Hãy gọi **`StringBuilder`**.
3. Gặp bài toán Logging ở Server nhiều client cùng truy cập, hay môi trường multi-tasking: Hãy dùng **`StringBuffer`**.
4. Khi giải bài toán xử lý Giao Dịch, số dư Coin lớn hoặc liên quan bảo mật cao cấp: Hãy chọn cỗ xe tăng **`BigInteger` / `BigDecimal`**.
