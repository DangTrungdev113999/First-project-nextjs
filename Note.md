# API là gì ?

## Aplication programing interface

     -> gia diện lập trình ứng dụng
     -> Giúp ứng dụng của mình tương tác với "ứng dụng của người khác"
        -> Thư viện bên ngaofi...
        -> Hện thống backend ...
        ...

## UI -> User interface

     -> Giao diện ngwofi đung
     -> Giúp người dùng tương tác với ứng dụng của mình dễ dàng hơn.
     -> không quan tâm ứng dụng của mình viết như thế nào

# Server Side rendering

## getInitalProps

- Chạy cả phía server và client
- Lần load đàu tiên chạy phía server
- Lần điều hướng tiếp theo (next/link, next/router) chạy phía client

- Ưu điểm: Tốt cho SEO, Giảm tải phía Server.
- Nhược điểm: Dễ bị lộ Endpoints về data của API. Các thiết bị di động cấu hình yếu sẽ load lâu, không nên dùng

## getServerSideProps -> fetch data trong mỗi lần requesst

- Chỉ chạy phía server
- Lần load đầu tiên chạy phía server
- Lần điều hướng tiếp theo (next/link, next/router) vẫn chạy phía server

- ưu điểm: Tốt cho SEO, Che giấy được Endpints.
- Nhược điểm: Tốc độ ứng dụng sẽ chậm hơn với những lần sau. Tăng tải cho Server.

# Static Generation

## getStaticProps -> Fetch data tại thời điểm build time

- Chỉ chạy phía server
- Ở môi trường development: Giống hoàn toàn getServerSideProps
- Ở môi trường Production:
  - Data được gửi một lần duy nhất ở thời điểm build time
  - Data không thay đổi trong suốt thời gian hoạt động ( Nếu không Re build Project )

* Ưu điểm: Tốt cho SEO, Tốc đột tải cực nhanh tại một thời điểm điểm nhất định.
* Nhược điểm:
  Không nhận được dữ liệu thay đổi mới nhất trong Database nếu không Re build

## getStaticPath -> Xác định cụ thể các dynamic routes nào được pre-render phía server.

- Chỉ chạy phía server
  = Dùng kết hợp với getStaticProps khi đó là dynamic routers
