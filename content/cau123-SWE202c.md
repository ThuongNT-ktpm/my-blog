# LÝ THUYẾT QUẢN LÝ DỰ ÁN PHẦN MỀM

## CÂU 1: CÁC MÔ HÌNH PHÁT TRIỂN PHẦN MỀM (Software Development Methodologies)

### Các bước làm câu 1 
* **Bước 1** – Kết luận trước (Agree / Disagree)
* **Bước 2** – Liệt kê toàn bộ nguyên tắc / đặc trưng của mô hình
* **Bước 3** – Ghép từng nguyên tắc với đặc điểm của dự án
* **Bước 4** – Kết luận lại

---

### I. Software Development Methodologies

#### 1. Agile
Agile là phương pháp phát triển phần mềm linh hoạt, lặp đi lặp lại (iterative) và gia tăng (incremental), trong đó nhóm phát triển và khách hàng tương tác liên tục, tập trung vào giải pháp giá trị thực tế và thích ứng với thay đổi yêu cầu.

**Đặc điểm:**
* Phát triển theo Sprint (Chu kỳ ngắn 1–4 tuần).
* Mỗi Sprint bao gồm các hoạt động lặp lại: `Plan` (Lập kế hoạch) → `Design` (Thiết kế) → `Develop` (Lập trình) → `Test` (Kiểm thử) → `Deploy` (Triển khai) → `Review` (Đánh giá) → `Launch` (Đưa vào sử dụng).
    * **Sprint 1:** Team lên kế hoạch và phát triển tính năng đầu tiên. Cuối Sprint có sản phẩm chạy được (MVP nhỏ).
    * **Sprint 2:** Dựa trên phản hồi Sprint 1, cải tiến/thêm chức năng mới. Lặp lại chu trình.
    * **Sprint 3:** Tiếp tục mở rộng, sửa lỗi, cải thiện hiệu năng...
> <span style="color:red">**→ Đây chính là vòng đời lặp lại (iterative) và phát triển tăng trưởng (incremental) của Agile.**</span>

**Khi nào nên sử dụng?**
* Yêu cầu thay đổi liên tục hoặc chưa rõ ràng từ đầu.
* Dự án có nhóm phát triển linh hoạt, kinh nghiệm.
* Khách hàng tham gia thường xuyên.
* Muốn phát hành nhanh các tính năng giá trị và cải tiến liên tục.
* Dự án lớn, cần chia nhỏ để kiểm soát và giảm rủi ro.

**Ưu điểm và Nhược điểm:**

| Ưu điểm | Nhược điểm |
| :--- | :--- |
| Thích ứng tốt với thay đổi yêu cầu | Khó quản lý tiến độ và ngân sách nếu thiếu kỷ luật |
| Phát triển nhanh, liên tục cung cấp giá trị | Cần khách hàng tham gia nhiều → tốn thời gian |
| Tăng cường hợp tác nhóm và giao tiếp | Đội ngũ chưa kinh nghiệm dễ bị lạc hướng |
| Rút ngắn thời gian đưa sản phẩm ra thị trường| Tài liệu ít → khó bảo trì dài hạn |
| Phản hồi nhanh, cải tiến liên tục | Phụ thuộc vào năng lực và cam kết của nhóm |

#### 2. Waterfall (Mô hình Thác nước)
Mô hình thác nước là phương pháp phát triển tuần tự, xem như dòng chảy liên tục: Phân tích → Thiết kế → Triển khai → Kiểm thử → Bảo trì.

| Giai đoạn | Hoạt động chính |
| :--- | :--- |
| **1. Phân tích** | Thu thập và làm rõ yêu cầu, Phân tích tính khả thi, Lập kế hoạch dự án. |
| **2. Thiết kế** | Thiết kế kiến trúc hệ thống, Thiết kế CSDL, Thiết kế giao diện và luồng. |
| **3. Triển khai** | Lập trình theo thiết kế, Tích hợp các module, Kiểm thử đơn vị (Unit Test). |
| **4. Kiểm thử** | Kiểm thử tích hợp & hệ thống, Kiểm thử chấp nhận (UAT), Sửa lỗi hoàn thiện. |
| **5. Bảo trì** | Sửa lỗi phát sinh sau triển khai, Nâng cấp tính năng, Hỗ trợ vận hành. |

**Khi nào nên sử dụng?**
* Yêu cầu rõ ràng, ổn định từ đầu.
* Dự án nhỏ hoặc vừa, quy mô rõ ràng (Timeline và ngân sách cố định).
* Dự án có tiêu chuẩn, quy trình nghiêm ngặt (Y tế, ngân hàng...).
* Khách hàng ít tham gia trong quá trình phát triển.
* Dễ quản lý tiến độ và chi phí (Các giai đoạn rõ ràng).

**Ưu điểm và Nhược điểm:**

| Ưu điểm | Nhược điểm |
| :--- | :--- |
| Dễ quản lý tiến độ, ngân sách và nguồn lực | Khó thay đổi yêu cầu sau khi bắt đầu dự án |
| Mỗi giai đoạn rõ ràng, tài liệu đầy đủ | Khách hàng chỉ tham gia đầu/cuối → dễ lệch yêu cầu |
| Phù hợp dự án nhỏ, yêu cầu ổn định | Thời gian triển khai dài nếu dự án lớn |
| Kiểm soát chất lượng dễ vì kiểm thử cuối GD| Lỗi phát hiện muộn, sửa chữa tốn kém |

> **TÓM LẠI:**
> * <span style="color:red">**Agile** = linh hoạt + thích ứng + phát triển từng phần + feedback liên tục</span>
> * <span style="color:red">**Waterfall** = tuần tự + cố định + tài liệu đầy đủ</span>

---

### II. Agile Processes

#### 1. Scrum
* **Định nghĩa:** Framework của Agile theo hướng iterative và incremental, tập trung giao tiếp, minh bạch, kiểm soát tiến độ.
* **Vai trò:** `Product Owner` (Đại diện KH), `Scrum Master` (Hỗ trợ team), `Development Team` (5-9 người).
* **Sự kiện:** `Sprint Planning`, `Daily Scrum`, `Sprint Review`, `Sprint Retrospective`.
* **Artifacts:** `Product Backlog`, `Sprint Backlog`, `Increment`.
* **Nên dùng khi:** Yêu cầu thay đổi thường xuyên, team nhỏ tự quản lý tốt, KH sẵn sàng tham gia.

#### 2. XP (Extreme Programming)
* **Định nghĩa:** Tập trung cải tiến liên tục, phản hồi nhanh, chất lượng cao, nhấn mạnh kỹ thuật lập trình tốt.
* **Kỹ thuật thực hành nổi bật:** Planning Game, Simple Design, Test-Driven Development (TDD), Pair Programming, Continuous Integration, Refactoring...
* **Nên dùng khi:** Dự án nhỏ yêu cầu đổi liên tục, team kỹ năng cao làm việc theo cặp, cần code chất lượng cực cao.

#### 3. Kanban
* **Định nghĩa:** Tập trung quản lý workflow bằng trực quan hóa, giới hạn WIP (Work In Progress).
* **Nguyên tắc:** Trực quan hóa công việc (To Do, Doing, Done), Giới hạn WIP, Quản lý luồng.
* **Nên dùng khi:** Quản lý công việc liên tục/lặp lại (dịch vụ, hỗ trợ), muốn tăng tốc độ delivery và giảm lãng phí.

#### 4. Lean
* **Định nghĩa:** Dựa trên triết lý sản xuất Lean: Loại bỏ lãng phí (waste), Tăng giá trị cho KH, Cải tiến liên tục.
* **Nên dùng khi:** Cần tăng tốc giao sản phẩm, loại bỏ lãng phí trong quy trình.

---

### III. Unified Process (RUP)

* **Định nghĩa:** Phương pháp phát triển hướng đối tượng, có cấu trúc, cho dự án lớn, phức tạp.
* **Các giai đoạn:**
    1. **Inception (Khởi tạo):** Xác định phạm vi, lập Business Case, ước lượng.
    2. **Elaboration (Phân tích chi tiết):** Phân tích yêu cầu/use case, thiết kế kiến trúc, giảm rủi ro kỹ thuật.
    3. **Construction (Triển khai):** Lập trình, tích hợp, kiểm thử module.
    4. **Transition (Chuyển giao):** UAT, triển khai hệ thống, bảo trì.
* **Khi nào nên dùng:** Dự án cực lớn/phức tạp, đòi hỏi kiến trúc bền vững, quy trình/tài liệu nghiêm ngặt.

**So sánh Agile vs Waterfall**

| Tiêu chí | Scrum / Agile | Waterfall |
| :--- | :--- | :--- |
| **Quy mô dự án** | Dự án phát triển mới, nhiều thay đổi, tính năng mới | Dự án nhỏ, yêu cầu ổn định, ít thay đổi |
| **Thời gian** | Phát hành bản đầu tiên nhanh, hoàn thành cuốn chiếu | Tuần tự, khó điều chỉnh thời gian nhanh |
| **Yêu cầu** | Chưa rõ đầy đủ, thay đổi trong quá trình | Rõ ràng, ổn định từ đầu |
| **Tính linh hoạt** | Cần thay đổi, cải tiến theo tiến trình | Ít linh hoạt |
| **Phát hành** | Phát hành phiên bản từng phần (Increment) | Phát hành một lần khi hoàn thành |

---

### IV. TEMPLATE PHÂN TÍCH CHỌN MÔ HÌNH DỰ ÁN

> **a) Requirements Characteristics (Đặc điểm yêu cầu)**
> * **Reliability:** Dự án có tính khả thi, hệ thống có thể hoạt động sau khi hoàn thành.
> * **Type & Number:** Có cả FR và NFR. Số lượng/độ phức tạp quyết định mô hình.
> * **How often change:** Yêu cầu có định nghĩa một phần và thay đổi thường xuyên <span style="color:red">→ Nên dùng mô hình linh hoạt (Agile).</span>
> 
> **b) Development team (Đội ngũ phát triển)**
> * **Team size:** Thường từ 5-8 người (Medium).
> * **Level of understanding:** Nhóm phát triển có kinh nghiệm và kỹ năng <span style="color:red">→ Dễ hiểu yêu cầu.</span>
>
> **c) User involvement (Sự tham gia của khách hàng)**
> * Có sự hỗ trợ từ các phòng ban khác/khách hàng tham gia chặt chẽ.
>
> **d) Conclusion (Kết luận - Mẫu tiếng Anh)**
> In conclusion, I agree to use <span style="color:red">**\<\<Method name\>\>**</span> methodology for this project.
> This is a medium-complexity project, so the development team needs to divide the project into smaller parts to make it easier to manage. The project may require changes frequently due to the new system and evolving user requirements. With the support from experienced resources, including <span style="color:red">**\<\<supporting departments/employees\>\>**</span>, the project can be delivered efficiently with high quality.

---

## CÂU 2: KIỂM THỬ PHẦN MỀM (Software Testing)

### 1. Functional Testing (Kiểm thử chức năng)

| Loại kiểm thử | Mô tả | Khi nào thực hiện | Ai thực hiện |
| :--- | :--- | :--- | :--- |
| **Unit Testing** | Kiểm thử từng đơn vị code nhỏ nhất (hàm, class) | Trong quá trình viết code | Developer |
| **Integration Testing**| Kiểm thử tương tác giữa các module, luồng dữ liệu | Sau khi hoàn thành module | Tester / Developer |
| **System Testing** | Kiểm thử toàn bộ hệ thống | Sau khi tích hợp hoàn chỉnh | QA Team |
| **Acceptance Testing (UAT)**| Kiểm thử chấp nhận từ người dùng, đáp ứng nghiệp vụ | Trước khi bàn giao | End Users / Client |
| **Regression Testing** | Kiểm thử lại tính năng cũ sau khi cập nhật/sửa lỗi | Sau mỗi lần cập nhật | QA Team |

### 2. Non-functional Testing (Kiểm thử phi chức năng)

| Loại kiểm thử | Mô tả | Mục đích chính |
| :--- | :--- | :--- |
| **Performance Testing** | Kiểm tra hiệu năng hệ thống | Đánh giá tốc độ phản hồi, thời gian xử lý, khả năng mở rộng. |
| **Security Testing** | Kiểm tra tính bảo mật | Phát hiện lỗ hổng, kiểm tra xác thực, bảo vệ dữ liệu. |
| **Usability Testing** | Kiểm tra tính dễ sử dụng | Đánh giá UI/UX, đảm bảo tính thân thiện. |
| **Compatibility Testing**| Kiểm tra tính tương thích | Đảm bảo chạy tốt trên nhiều trình duyệt, thiết bị, OS. |
| **Load Testing** | Kiểm tra dưới tải bình thường | Đánh giá hiệu suất khi có nhiều user, khả năng chịu tải. |
| **Stress Testing** | Kiểm tra dưới tải cao bất thường | Xác định điểm gãy hệ thống, khả năng phục hồi. |

> **TEMPLATE GỢI Ý ĐÁP ÁN (Tiếng Anh):**
> *The type of testing that I recommend the team to do for this project is a combination of functional testing and non-functional testing...*
> *(Sử dụng định nghĩa của các loại Testing trong bảng trên để điền vào phần giải thích chi tiết)*

---

## CÂU 3: YÊU CẦU PHẦN MỀM (Requirements)

### 1. Functional requirements (FR)
* Những yêu cầu do người dùng nêu ra, có thể nhìn thấy trực tiếp (chức năng).
* Nhận diện: Các động từ mô tả hệ thống xử lý gì.
* <span style="color:red">**Công thức: [Danh từ] + [Động từ hành động]**</span>
* *Ví dụ:* User can register; Dealer's salesman can submit orders.

### 2. Non-functional requirements (NFR)
* Trải nghiệm, cảm xúc, tính chất, chất lượng của toàn bộ app. Không đề cập tính năng riêng lẻ.
* Nhận diện: Các tính từ mô tả (đẹp, bảo mật, nhanh, ổn định...).
* <span style="color:red">**Công thức: System needs/should/must + [Tính chất/Chất lượng]**</span>
* *Ví dụ:* System must respond within 3 seconds; The SMS needs to support multi-languages.

### Bảng So sánh FR và NFR

| Tiêu chí | Functional Requirement (FR) | Non-functional Requirement (NFR) |
| :--- | :--- | :--- |
| **Cấu trúc câu** | [Chủ thể] + [Động từ] + [Đối tượng] | "System needs/should…" + tính chất |
| **Từ khóa đặc trưng**| register, login, CRUD, manage, calculate...| secure, fast, response time, uptime... |
| **Ví dụ thực tế** | "Users can register new accounts" | "System must respond within 3 seconds" |

### Chi tiết các loại NFR

| Loại yêu cầu | Mô tả | Tiêu chí đánh giá | Ví dụ cụ thể |
| :--- | :--- | :--- | :--- |
| **Performance** | Tốc độ, throughput | Thời gian phản hồi | Load trang < 3 giây |
| **Security** | Bảo vệ hệ thống/dữ liệu | Xác thực, mã hóa | Xác thực 2 lớp (2FA), Role-based |
| **Reliability** | Hoạt động ổn định liên tục | Uptime, MTBF | Uptime 99.9%, Backup hàng ngày |
| **Usability** | Mức độ dễ sử dụng | Dễ học, giao diện (UI) | Có hướng dẫn, Responsive design |
| **Scalability** | Khả năng đáp ứng quy mô lớn | Scaling, Load balancing| Microservices, Auto-scaling |
| **Maintainability** | Dễ bảo trì, mở rộng | Chất lượng code, tài liệu| Clean code, API documentation |