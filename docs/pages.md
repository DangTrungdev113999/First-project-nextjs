# Page

Trong Next.js một page là một React component đã được export từ 1 file'.js', '.jsx', '.ts', hay '.tsx' trong thư mục 'pages'. Mỗi page được liên kết với 1 route dữ trên tên file.

# Pre-rendering

Mặc định, Next.js render lại mỗi trang. Điều đó có nghĩa là Next.js tạo ra HTML cho mỗi trang trước ( for each page in advance ). Thay vì thực hiện tất cả chúng bằng javascript phía client. Việc tái render có thể mang đến kết quả hiệu xuất và CEO tốt hơn.

Mỗi HTML được tạo ra thì được liên kết với mã javascript tối thiểu cần thiết cho mỗi trang. Khi một trang được tải bằng trình duyệt. mã js của nó chạy và làm cho các trang được tương tác đầy đủ. ( Quá trình này được gọi là hydration )

## Two forms of Pre-rendering

Next.js có 2 hình thức để tái render. Static Generation and Server-side Rendering. Sự khác nhau là khi nó tạo ra HTML chỗ mỗi trang.

- Static Generation ( khuyến khích ). HTML đợc tại ra tại thời gian build and sẽ được tái sự trong mỗi request
- Server-side Rendering: HTML được tạo ra trong mỗi reqest

... mai dich tiếp 