---
date: "2026-04-13"
---

# MÔ HÌNH AGILE (AGILE MODEL)

## 1. Agile là gì?
**Agile** là mô hình phát triển phần mềm theo cách lặp đi lặp lại (iterative) và tăng dần (incremental), cho phép thay đổi linh hoạt yêu cầu và phản hồi liên tục từ khách hàng trong suốt quá trình phát triển.

* **Nguyên tắc cốt lõi:** Chấp nhận và thích ứng với sự thay đổi yêu cầu của khách hàng ở bất kỳ giai đoạn nào. Phần mềm có thể hoạt động được là thước đo chính của tiến độ.


![Mô hình Agile](image/mohinhAgile.png)
---

## 2. Đặc điểm chính của Agile

**1.  Phát triển lặp và tăng dần (Iterative & Incremental)**
* Làm từng phần nhỏ.
* Mỗi lần đều có sản phẩm chạy được.

**2.  Linh hoạt, dễ thay đổi**
* Yêu cầu có thể thay đổi bất cứ lúc nào.
* Team thích nghi nhanh.

**3.  Tương tác khách hàng liên tục**
* Khách hàng tham gia xuyên suốt.
* Nhận feedback thường xuyên.

**4. Giao sản phẩm sớm và liên tục**
* Không đợi tới cuối mới có sản phẩm.
* Mỗi Sprint đều có bản demo.

**5.  Làm việc nhóm chặt chẽ**
* Dev, tester, khách hàng phối hợp liên tục.
* Giao tiếp nhiều hơn tài liệu.

**6.  Cải tiến liên tục**
* Sau mỗi Sprint đều rút kinh nghiệm.
* Làm tốt hơn qua từng vòng.

---

## 3. Cách Hoạt Động (Dựa trên Scrum - Framework phổ biến nhất)
Trong Agile, quá trình phát triển được thực hiện thông qua các vòng lặp ngắn kéo dài từ 1 đến 4 tuần (gọi là **Sprint**). Mỗi Sprint đều trải qua các bước cơ bản:

1. **Quản lý Product Backlog:** Danh sách ưu tiên chứa tất cả yêu cầu, tính năng, hoặc lỗi cần sửa. Có thể thay đổi liên tục bởi Product Owner.
2. **Lập kế hoạch Sprint (Sprint Planning):** Dev Team chọn ra các công việc ưu tiên cao từ Backlog để cam kết hoàn thành trong Sprint hiện tại.
3. **Thực hiện Sprint (Execution & Daily Stand-up):** Nhóm tiến hành thiết kế, code và test. Mỗi ngày họp ngắn 15 phút để báo cáo tiến độ.
4. **Đánh giá Sprint (Sprint Review / Demo):** Cuối Sprint, mang sản phẩm đã hoàn thiện ra Demo cho khách hàng và nhận phản hồi.
5. **Cải tiến Sprint (Sprint Retrospective):** Họp nội bộ rút kinh nghiệm để làm tốt hơn ở vòng lặp sau.

###  Trực quan hóa quy trình phát triển theo Sprint (Chu kỳ 1–4 tuần)
Mỗi Sprint bao gồm các hoạt động lặp lại: **Plan** (Lập kế hoạch) → **Design** (Thiết kế) → **Develop** (Lập trình) → **Test** (Kiểm thử) → **Deploy** (Triển khai) → **Review** (Trình diễn & nhận phản hồi) → **Launch** (Đưa vào sử dụng).

* **Sprint 1:** Team lên kế hoạch và phát triển một số tính năng đầu tiên. Cuối Sprint, sản phẩm phải chạy được (MVP nhỏ).
* **Sprint 2:** Dựa trên phản hồi từ Sprint 1, team cải tiến hoặc phát triển thêm chức năng mới. Lặp lại toàn bộ chu trình *Plan → Design → Develop → Test → Deploy → Review → Launch*.
* **Sprint 3:** Tiếp tục mở rộng chức năng, sửa lỗi, cải thiện hiệu năng,... Mỗi Sprint tạo ra một phiên bản hoàn thiện hơn của phần mềm.

** Kết luận:** Đây chính là vòng đời lặp lại (iterative) và phát triển tăng trưởng (incremental) đặc trưng của Agile.

---

## 4. Khi Nào Nên Sử Dụng Agile?
* Khi yêu cầu của khách hàng **chưa rõ ràng từ đầu** hoặc dự kiến sẽ **thay đổi liên tục** theo thị trường.
* Dự án cần đưa sản phẩm ra thị trường nhanh **(Time-to-market)** để đánh giá phản ứng của người dùng.
* Các dự án khởi nghiệp (Startup), dự án phát triển sản phẩm mới mang tính đột phá.
* Khách hàng sẵn sàng tham gia sâu vào quá trình phát triển và cho phản hồi liên tục.

---

## 5. Đánh Giá Ưu & Nhược Điểm

| Ưu Điểm (Pros) | Nhược Điểm (Cons) |
| :--- | :--- |
| **Tính linh hoạt cao:** Dễ dàng thích ứng và thay đổi yêu cầu ngay cả khi dự án đang ở giai đoạn cuối. | **Khó dự đoán:** Rất khó ước tính chính xác thời gian và ngân sách tổng thể của dự án ngay từ đầu. |
| **Khách hàng hài lòng:** Khách hàng được xem sản phẩm sớm, liên tục và có quyền quyết định hướng đi. | **Yêu cầu đội ngũ giỏi:** Đòi hỏi các thành viên phải có kỹ năng cao, tự quản lý tốt và giao tiếp hiệu quả. |
| **Rủi ro thấp:** Phát hiện lỗi và vấn đề sai hướng ngay từ các Sprint đầu tiên, tránh đổ vỡ toàn bộ dự án. | **Thiếu tài liệu:** Tập trung vào code thay vì viết tài liệu, gây khó khăn khi có thành viên mới gia nhập dự án hoặc bàn giao sau này. |
| **Giá trị kinh doanh đến sớm:** Có thể release các bản cập nhật thường xuyên mang lại doanh thu sớm. | **Phụ thuộc khách hàng:** Nếu khách hàng không có thời gian tham gia review và cho phản hồi, mô hình sẽ thất bại. |

---

##  PHẦN 2: SỰ PHÙ HỢP GIỮA MÔ HÌNH VÀ NGỮ CẢNH DỰ ÁN
*(Phần ăn điểm quyết định - Thi môn SWE202c)*

###  Trường hợp 1: Chọn mô hình AGILE
* **Từ khóa trong đề:** Dự án startup, khách hàng chưa rõ ràng yêu cầu, cần ra mắt nhanh (time-to-market), hệ thống thương mại điện tử, có thể thay đổi tính năng liên tục.
* **Cách viết lý giải (Ví dụ):** > *"Dựa trên ngữ cảnh đề cho, em đề xuất chọn mô hình Agile. Lý do là vì dự án có yêu cầu chưa cố định và khách hàng muốn thay đổi liên tục. Đặc tính lặp và tăng dần của Agile sẽ giúp team linh hoạt adapt với thay đổi, đồng thời có thể demo sản phẩm liên tục để khách hàng review mà không cần đợi đến cuối dự án."*

###  Trường hợp 2: Chọn mô hình WATERFALL
* **Từ khóa trong đề:** Hệ thống nội bộ nhà nước, ngân hàng, y tế, kế toán, ngân sách cố định, yêu cầu cực kỳ rõ ràng từ đầu, không được phép sai sót.
* **Cách viết lý giải (Ví dụ):** > *"Dựa trên ngữ cảnh đề cho, em đề xuất chọn mô hình Waterfall. Lý do là vì đây là hệ thống đòi hỏi tính chính xác tuyệt đối (như y tế/ngân hàng), các yêu cầu đã được chốt cứng ngay từ đầu và hiếm khi thay đổi. Waterfall với quy trình tuần tự chặt chẽ và yêu cầu tài liệu chi tiết ở từng pha sẽ giúp kiểm soát chất lượng hệ thống tốt nhất và dễ dàng bảo trì sau này."*

Tài liệu tham khảo: https://viblo.asia/p/agile-vs-waterfall-mo-hinh-phat-trien-phan-mem-nao-phu-hop-voi-du-an-cua-ban-L7x2e8955jY
<br>
Tài liệu tham khảo: https://base.vn/blog/agile-la-gi/

