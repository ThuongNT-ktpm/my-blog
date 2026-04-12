---
date: "2026-04-13"
---

# MÔ HÌNH THÁC NƯỚC (WATERFALL MODEL)

**Mô hình thác nước** là một mô hình vòng đời phát triển phần mềm (SDLC) tuân theo phương pháp tiếp cận tuyến tính và tuần tự. Quá trình phát triển chảy theo một hướng duy nhất (từ trên xuống dưới) giống như dòng thác.

**Nguyên tắc cốt lõi:** Mỗi giai đoạn phải được **hoàn thành 100%** trước khi chuyển sang giai đoạn tiếp theo và rất khó để quay lại sửa đổi các bước trước đó.

---
![Mô hình thác nước](image/thacnuoc.png)

### 1. Các Giai Đoạn Chính

Tiến trình của Waterfall bao gồm 6 giai đoạn nối tiếp nhau:

#### 1.1. Phân tích yêu cầu (Requirement Analysis)
* **Mục tiêu:** Thu thập và nắm bắt toàn bộ yêu cầu của hệ thống/phần mềm.
* **Hoạt động:**
    * Thảo luận và phân tích chuyên sâu để hiểu rõ mục tiêu cốt lõi.
    * Đánh giá tính khả thi để đảm bảo các yêu cầu này có thể kiểm chứng được.
    * Tài liệu hóa yêu cầu (thường là SRS - Software Requirement Specification).

#### 1.2. Thiết kế hệ thống (System Design)
* **Mục tiêu:** Tạo ra các bản thiết kế kiến trúc dựa trên yêu cầu đã phân tích.
* **Hoạt động:**
    * Xác định các yêu cầu về phần cứng và phần mềm cần thiết.
    * Thiết kế cấu trúc dữ liệu, kiến trúc phần mềm và giao diện người dùng.
    * Hoàn thiện tài liệu thiết kế (Design Document) làm cơ sở cho lập trình viên.

#### 1.3. Thực hiện (Implementation / Coding)
* **Mục tiêu:** Chuyển đổi các bản thiết kế thành các chương trình/mã nguồn (code).
* **Hoạt động:**
    * Lập trình dựa trên tài liệu thiết kế.
    * Thực hiện kiểm thử mức đơn vị (**Unit Testing**) cho từng module để đảm bảo mã chạy đúng logic.
    * Tích hợp mã nguồn chuẩn bị cho giai đoạn tiếp theo.

#### 1.4. Kiểm thử (Testing)
* **Mục tiêu:** Xác minh hệ thống hoạt động đúng như mong đợi.
* **Hoạt động:**
    * Tích hợp các đoạn code đã qua Unit Test và kiểm tra toàn bộ hệ thống để đảm bảo tính đồng nhất.
    * Thực hiện toàn bộ các phương pháp kiểm thử (**Functional & Non-functional Testing**) để xác minh hệ thống đáp ứng đúng yêu cầu ban đầu.
    * Theo dõi tiến độ kiểm thử qua các công cụ quản lý (ví dụ: ALM) và báo cáo lỗi (Bugs) nếu có bất thường.

#### 1.5. Triển khai (Deployment)
* **Mục tiêu:** Đưa ứng dụng vào sử dụng thực tế.
* **Hoạt động:**
    * Đảm bảo môi trường máy chủ (server) đã sẵn sàng và không có lỗi mở.
    * Xác nhận mọi tiêu chí kiểm thử (Test Criteria) đều đã được đáp ứng.
    * Triển khai ứng dụng lên môi trường thực tế (Production).
    * Kiểm tra lại trên môi trường sau khi deploy để đảm bảo không có sự cố phát sinh.

#### 1.6. Bảo trì (Maintenance)
* **Mục tiêu:** Duy trì và cải thiện hệ thống sau khi triển khai.
* **Hoạt động:**
    * Giám sát để đảm bảo ứng dụng vận hành trơn tru trên môi trường thực tế.
    * Tiếp nhận, xử lý và khắc phục lỗi (Bug fixing) khi người dùng báo cáo.
    * Cập nhật và triển khai lại các đoạn code đã sửa lên môi trường.
    * Nâng cấp, bổ sung tính năng mới để bắt kịp với sự thay đổi của công nghệ.

---

### 2. Đặc Điểm Nhận Diện
* **Tính tuần tự:** Quy trình diễn ra một chiều, chặt chẽ (giống dòng chảy của thác nước).
* **Tính rõ ràng:** Yêu cầu phải được "chốt" cứng ngay từ đầu, không được thay đổi trong quá trình thực hiện.
* **Tính tài liệu hóa:** Mỗi giai đoạn đều yêu cầu bộ tài liệu (Documentation) đầy đủ, chi tiết làm bằng chứng cho việc hoàn thành.
* **Tính rạch ròi:** Không có sự chồng chéo hay làm song song giữa các giai đoạn.

---

### 3. Khi Nào Nên Sử Dụng Waterfall?
Mô hình này chỉ phát huy tối đa hiệu quả trong các điều kiện sau:
* Yêu cầu hệ thống **ổn định**, không bị thay đổi thường xuyên.
* Dự án có **quy mô nhỏ** hoặc độ phức tạp thấp.
* Khách hàng hiểu rõ họ muốn gì, yêu cầu **rõ ràng, không mơ hồ**.
* Môi trường phát triển, các công cụ và công nghệ nền tảng đã **trưởng thành và ổn định**.
* Nguồn nhân lực đã được đào tạo bài bản và sẵn sàng.

---

### 4. Đánh Giá Ưu & Nhược Điểm

| Ưu Điểm (Pros) | Nhược Điểm (Cons) |
| :--- | :--- |
| **Dễ quản lý:** Mô hình đơn giản, dễ tiếp cận và dễ sử dụng cho mọi thành viên. | **Thiếu linh hoạt:** Gần như không thể thay đổi yêu cầu khi dự án đã bắt đầu code. |
| **Hiệu quả với dự án nhỏ:** Mang lại kết quả tốt, dự toán chính xác thời gian và chi phí. | **Khó quay đầu:** Rất tốn kém (thời gian & tiền bạc) nếu muốn sửa lỗi từ các giai đoạn trước (vd: đang Test muốn sửa Design). |
| **Kiểm soát chất lượng tốt:** Các tiêu chí đầu vào/đầu ra rõ ràng, giúp dễ dàng duy trì chất lượng (QA/QC). | **Thấy sản phẩm muộn:** Phải đến cuối quy trình phần mềm mới thành hình; không có bản mẫu (Prototype) trung gian. |
| **Dễ bảo trì (Maintain):** Nhờ tài liệu được ghi chép đầy đủ và chi tiết qua từng giai đoạn. | **Rủi ro cao ở giai đoạn cuối:** Việc Testing diễn ra quá trễ khiến các lỗi hệ thống nghiêm trọng khó được phát hiện và xử lý sớm. |
| | **Không phù hợp dự án lớn:** Rủi ro thất bại cao đối với các dự án phức tạp, dài hạn hoặc có yêu cầu liên tục thay đổi. |


Tài liệu tham khảo: [https://www.softwaretestinghelp.com/what-is-sdlc-waterfall-model/](https://www.softwaretestinghelp.com/what-is-sdlc-waterfall-model/)