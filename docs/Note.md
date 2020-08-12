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

# Tóm tắt kiến thức trong javascript

#### - Cài đặt môi trường lập trình: phần mềm, phần cứng, editor, … bước đơn giản nhất cũng là khó nhất, quyết định thành công của chuỗi các step phía sau. Trong giai đoạn cài đặt, cấu hình, là người mới bắt đầu bạn NÊN giữ các giá trị ở mặc định.

- dùng vs code vì đây là trình soạn thảo do ms phát triển, nó là mã nguồn mở không mất phí, cộng đồng contribute rất nhiều extension hay ho ^^
- Các extension hữu ích

  - theme: Dracula , One monokai Theme, Atom ....
  - Material Icon Theme
  - HTML snippets,
  - Javacript (ES6) code snippets,
  - Live Server
  - CSS peek
  - Path Autocomplete || Path Intellisense
  - Auto Close Tag
  - Auto import
  - Auto Rename Tag
  - Bookmarks
  - Bracket Pair Colorizer
  - Git Graph
  - Gitlens
  - Pettier - Code formatter
  - ESLint
  - Quokka.js
  - REST Client
  - Todo Tree
  - Settings Sync
  - Power Mode

#### - Cách khai báo biến, hằng số, tạo ghi chú trong code, kiểu dữ liệu, toán tử.

- Biến:
  - là tên của vùng nhớ (memory) để lưu trữ dữ liệu.
  - Sử dụng từ khóa (keyword): var, let, const.
  - Điểm khác biệt khi dùng var, let, const là gì?, khi nào thì dùng chúng ?
  - Những quy tắc đặt tên biến là gì ?
- Kiểu dữ liệu : 3 loạt
  - primitive types: number, string, boolean(true || false), symbol
  - Special types: null && undefined
  - Sự khác nhau giữa null & undefined ?
  - reference types: object , array ? ( Chú ý về cách lưu biến trong ô nhớ )

#### - Sử dụng câu điều kiện if, else, switch case, Ternary operator,

- ? :

#### - Sử dụng vòng lặp: for,for...in, for...of, while, do while, break, continue, ...

- for().
- for ..in : lập qua các key của Object, hay các index của mảng
- for ... of: lập qua các phần tử của mảng
- white , do...white, break continue

#### - Thao tác với các kiểu dữ liệu Array, Object,

- cách lưu trong vùng nhớ (memory): lưu địa chỉ
- map, forEach, filter, reduce, push , concat, sort, slice, splice, split, substring, indexOf, Object.keys(), ...

#### - Sử dụng các hàm có sẵn trong js Sử dụng triệt để các hàm có sẵn: vấn đề làm sao biết hàm nào có sẵn, gặp 1 yêu cầu nào đó, nếu nó mang tính phổ thông thường gặp, trên 70% sẽ có hàm, ngoài ra có thể search trước khi bắt đầu tự viết code:

- Chuyển chuỗi sang in hoa, đếm chiều dài chuỗi, số phần tử trong mảng … → phổ biến nên sẽ có hàm xây dựng sẵn.

- Mỗi ngày tiết kiệm được 2000đ, hỏi bao lâu cưới được vợ, biết điều kiện cưới vợ phải có 10 cây vàng ( 1 cây vàng tương tương 50 triệu) → không có hàm nào có sẵn, phải biết tư duy chuyển bài toán sang cách xử lý.

- Các hàm xây dựng sẵn cho array.

#### - function

- function dùng để gom các đoạn code để thực hiện 1 chức năng nào đó, giúp phân chia logic và có thể tái sử dụng.
- kiểu khai báo :
  nomal function, funtion doSomeThing() {}
  arrow function, const doSomeThing = () => {}
  anonymous function. cosnt doSomeThing = function() {}, arr.map (function(){} )
  constructor function: ...
- conventions đặt tên: https://www.freecodecamp.org/news/javascript-naming-conventions-dos-and-don-ts-99c0e2fdd78a/

### - rest - sqeard, Enhanced object litera, template string, Destructuring [ES6, next]

- https://anonystick.com/tong-hop-tinh-nang-javascript-moi-nhat-ke-tu-es6-den-es11-2019120577967801.jsx?fbclid=IwAR1Y_6SHrSnRQipIGEvX0vZZJnY2_mvb0qos9cdvyein7re2x2q-hd2dAgs#t-28

#### - hosting

- var vs let.

#### - scope

- block scope
- function scope

### - bất đồng bộ (Quan trọng)

- javascript là ngôn ngữ đơn luồng: tức nó chỉ làm 1 việc trong 1 thời điểm, vậy làm sao nó vẫn làm nhiều việc cùng một lúc -> cơ chế bất đồng bộ của nó
- callback: https://toidicodedao.com/2015/02/05/callback-trong-javascript/
- promise [ES6] : https://toidicodedao.com/2016/07/05/javascript-promise/
- async/await [next]: https://toidicodedao.com/2017/10/10/async-await-trong-javascript/
- video giải thích về bất đồng bộ: https://www.youtube.com/watch?v=8aGhZQkoFbQ
- Ví dụ chi tiết: https://www.youtube.com/watch?v=Xj0pqYWwX8Y&list=PLzrVYRai0riRaLjgZe00gPMyLI1NdWcpL

#### - class

### - context

### - Nâng cao: HOF, closure, ...

### - DOM

### - BOM

# code

- các truy xuất trong object
- mutable object (biến đổi obj)
- methd xây dựng sẵn cho string

```js
function phoneRemoveCountryPrefix(phone) {
  return phone.replace("+84", 0);
}

function phoneAddCountryPrefix(phone) {
  if (phone.slice(0, 1) === "0") {
    return `+84${phone.slice(1)}`;
  }
  return phone;
}

const hightlightText = (text: string, query: string) => {
  const index = text.indexOf(query);
  const afterStr = text.substring(0, index);
  const middleStr = text.substring(index, afterStr.length + query.length);
  const beforeStr = text.substring(afterStr.length + query.length);
  return `${afterStr}<mark>${middleStr}</mark>${beforeStr}`;
};

const toQuerryString = (params: Record<string, any>) => {
  return Object.keys(params)
    .reduce((men, key) => {
      if (params[key]) {
        men = `${men}${key}=${params[key]}&`;
      }
      return men;
    }, "?")
    .slice(0, -1);
};

const = compareTriplets(a, b) => {
    const result = [0,0];
    if (a.length !== b.length) return 'No compare when the size of a and b not equal'
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            result[0] += 1;
        } else if (a[i] < b[i]) {
            result[1] += 1;
        }
    }

    return result;
}

function miniMaxSum(arr) {
  let min = 0;
  let max = 0;
  let sortedArr = arr.sort((a, b) => a > b);

  sortedArr.forEach((num, idx) => {
    if (idx === 0) {
      max += 0;
    } else {
      max += num;
    }

    if (idx === sortedArr.length - 1) {
      min += 0;
    } else {
      min += num;
    }
  })
  console.log(`${min} ${max}`);
}
```

# Bài tập

1. Trả lời câu hỏi

2)  Tính tổng giá trị của array các số, không biết phần tử số lượng của array đó.

```js
- C1: dùng for, for...of.
- C2: rest & reduce.
  input: [1,2,3,4] -> output: 10
```

3. Tính phần trăm số âm , số dương, số 0 của một mảng các số tự nhiên.
   trả về array như output (dùng template string)

```js
- input : [1, 0, -4, 2, -5, 4, 6, 0]
- output: ['50%', '25%', '25%']
```

4. Tính tỉ số cho đột A và B. biết đội A tham gia hackeRank và nhận được số điểm lần lượt qua 3 trận đấu là 2, 3, 4, đội B lần lượt à 1,3,2.

   cách tính tỉ số : trận đầu 2 > 1 => đội A +1, trận 2 đội 3 = 3 cả 2 đội +0, trận ba 4 > 2 đội A +1. trả về array như ouput

```js
- input a,b
  - a : [2, 3, 4]
  - b : [1, 3, 2]
- output [2, 0]
```

5. Cho một mảng gồm các số tự nhiên nguyên dương, trả về số lớn nhất và nhỏ nhất bằng cách tính tổng 4 phần tử trong mảng. trả về như trong ouput

```js
 - input [1, 2, 3, 4, 5]
 - output:
    {
      min: 10,
      max: 14,
    }
```

6. Tính giá trị tuyệt đối của hiệu số hai đường chéo của ma trận hình vuông cạnh 3 x 3 (mảng 2 chiều)

```js
- input [[11, 2, 4], [4, 5, 6], [10, 8, -12]]

// 11 2 4 <- row
// 4 5 6
// 10 8 -12

|(11 + 2 -12) - (4 + 5 + 10)|
- output : 15
```

- gọi ý dùng 2 vòng lập for, vòng lập for thứ nhất sẽ lập qua (row), vòng lập thứ 2 sẽ lập qua số phần tử của mảng con (11, 2, 4), để ý ở vị trí của 11, 5, -12 hoặc 4, 5, 10 thì i j có đặc điểm gì giống nhau

# Q & A

- Mọi kiểu dữ liệu trong js đều là obj trừ undefined ?
- các method nào làm mutable array, obj ?

# Hôm sau

- class
- context
- Closure
- Higer order functions
- ...
