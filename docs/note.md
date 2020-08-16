# Giới thiệu

- Lịch sử bản thân với ngành dev (job, skill) hoặc cơ duyên hay lý do mọi người chọn code.
  Chào mọi người mình tên là Đặng Trung, Hiện đang là FE dev trong 1 công ty product về mảng fintech. Stack của mình là: js, reactjs, react-native, nextjs, nodejs, mongodb.

  Về cơ duyên của mình thì năm lớp 11 mình cảm thấy mk sẽ hợp vs ngành code vì mk có thể ngồi 2, 3 tiếng ngồi làm các môn tự nhiên, đó chỉ là linh cảm chứ mk cx chưa gọi là thích hay đam mê gì cả vì mk chưa đc trải nhiệm gì , câp 3 thì học tin chỉ để chơi game ^^... Năm lớp 12 mk thi đỗ vào học viện bưu chính viễn thông, nhưng đen cái gia đình mk năm đấy có biến có nên mk k đi làm được. Mk lên HN làm cho ông anh quản lý các fanpage, MK ns vs anh em sẽ làm cho anh 1 năm sau đó thì em sẽ học lập trình. Sau 1 năm làm mk nghỉ tự học ở nhà + time học ở nodemy 3 tháng là cx gần năm, sau đó là đi làm việc đến bây h, cx gần 1 năm kinh nhiệm ui

- Mong muốn trong khóa học

  Thứ nhất mình mong mỗi người sẽ đạt một cái gì đó sau khóa học này, là cái gì thì mình sẽ chia sẻ sau 4, 5 buổi học nữa. ?
  thứ hai mình sẽ chia sẻ các kinh nhiệm trong môi trường làm việc của dev, các kiến thức khi áp dụng trong thực thế như thế nào.
  Thứ ba là chia sẻ kiến thức cũng là một cách mình học, đối khi để truyền đạt sao cho mọi người hiêu vấn đề mình buộc phải tìm hiểu sâu về vấn đề đó.
  Thứ tư tạo cho mình các quan hệ trong ngành, có thể mai ngày chúng ta sẽ là đồng nghiệp của nhau ^^.
  hôm nay mình sẽ chia sẻ 3 chủ đề
  Trong js cần nắm vững những gì ?
  Càng học, càng rối, càng căng thẳng, càng mất tự tin ?
  OK mọi người nhé!

# Tóm tắt lý thuyết trong javascript

#### Cài đặt môi trường lập trình: phần mềm, phần cứng, editor, … bước đơn giản nhất cũng là khó nhất, quyết định thành công của chuỗi các step phía sau. Trong giai đoạn cài đặt, cấu hình, là người mới bắt đầu bạn NÊN giữ các giá trị ở mặc định.

- theme: One Monokai Theme, Material Icon Theme
- HTML Snippets
- JavaScript (ES6 )code snippets
- Path Intellisense
- Live Server
- Bracket Pair Colorizer
- Auto Close Tag
- Css Peek
- Bookmarks

- Git Graph
- GitLens

- POWER MODE

#### Cách khai báo biến, hằng số, tạo ghi chú trong code, kiểu dữ liệu, toán tử.

#### Sử dụng câu điều kiện if, else, switch case.

#### Sử dụng vòng lặp: for, while, do while, break, continue, ...

#### Thao tác với các kiểu dữ liệu Array, Object,

#### Sử dụng các hàm có sẵn trong js

Sử dụng triệt để các hàm có sẵn: vấn đề làm sao biết hàm nào có sẵn, gặp 1 yêu cầu nào đó, nếu nó mang tính phổ thông thường gặp, trên 70% sẽ có hàm, ngoài ra có thể search trước khi bắt đầu tự viết code:

- Chuyển chuỗi sang in hoa, đếm chiều dài chuỗi, số phần tử trong mảng … → phổ biến nên sẽ có hàm xây dựng sẵn.
- Mỗi ngày tiết kiệm được 2000đ, hỏi bao lâu cưới được vợ, biết điều kiện cưới vợ phải có 10 cây vàng ( 1 cây vàng tương tương 50 triệu) → không có hàm nào có sẵn, phải biết tư duy chuyển bài toán sang cách xử lý.

- function

#### ES6 -> next : Template string, rest, rest

https://anonystick.com/tong-hop-tinh-nang-javascript-moi-nhat-ke-tu-es6-den-es11-2019120577967801.jsx?fbclid=IwAR1Y_6SHrSnRQipIGEvX0vZZJnY2_mvb0qos9cdvyein7re2x2q-hd2dAgs#t-28

#### hosting

#### scope

#### Bát đồng bộ trong js : callback, promise, async/await

#### class

#### Nâng cao: HOC, closure,

# Code

- các truy xuất trong object
- mutable object (biến đổi obj)
- methd xây dựng sẵn cho string

```
function phoneRemoveCountryPrefix(phone) {
  return phone.replace("+84", 0);
}

function phoneAddCountryPrefix(phone) {
  if (phone.slice(0, 1) === "0") {
    return `+84${phone.slice(1)}`;
  }
  return phone;
}

export const hightlightText = (text: string, query: string) => {
  const index = text.indexOf(query);
  const afterStr = text.substring(0, index);
  const middleStr = text.substring(index, afterStr.length + query.length);
  const beforeStr = text.substring(afterStr.length + query.length);
  return `${afterStr}<mark>${middleStr}</mark>${beforeStr}`;
};
function phoneAddCountryPrefix(phone) {
  if (phone.slice(0, 1) === "0") {
    return `+84${phone.slice(1)}`;
  }
  return phone;
}
export const hightlightText = (text: string, query: string) => {
  const index = text.indexOf(query);
  const afterStr = text.substring(0, index);
  const middleStr = text.substring(index, afterStr.length + query.length);
  const beforeStr = text.substring(afterStr.length + query.length);
  return `${afterStr}<mark>${middleStr}</mark>${beforeStr}`;
};
```

- method cho array, ví dụ áp dụng thực tế
  map, forEach, filter, push , concat, sort, slice, splice
  lấy ví dụn trong hackeranh

# Q & A

- Mọi kiểu dữ liệu trong js đều là obj trừ undefined ?
- các method nào làm mutable array, obj ?
