# Data fetching

Trong phần tài liệu về Pages, chúng tôi đã giải thích rằng **Next.js có 2 hình thức của việc tái render. Static Generation v Server-side Rendering. Trong trang này, Chúng ta sẽ nói sâu hơn về các chiến dịch lấy dữ liệu cho mỗi trường hợp. chúng tôi khuyến khích bạn đọc qua tài liệu của **Page\*\* trước nếu bạn chưa làm như vậy.

Chúng tôi sẽ nói về ba hàm **Next.js** riêng biệt, bạn có thể sử dụng để lấy dữ liệu để tái render:

- `getStaticProps` (Static Generation) : Lấy dữ liệu tại thời điểm build.
- `getStaticPaths` (Static generation) : Xác định **dynamic routes** để tái render dựa vào dữ liệu.
- `getServerSideProps` (Server-side Rendering): Lấy dữ liệu trong mỗi lần request.

Ngoài ra, Chúng ta sẽ nói tóm tắt các để lấy dữ liệu trên phía client.

## getStaticProps (Static Generation)

Nếu bạn export một hàm `async` gọi là `getStaticProps` từ 1 trang, **Next.js** sẽ tái render lại trang đó tại thời điểm build sử dụng props được trả về bởi `getStaticProps`

```javascript
export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
```

Tham số `context` là một object chứa các thuộc tính dưới đây

- `params` chứa các tham số về route cho các page sử dụng dynamic routes. Ví dụ, nếu tên của trang là `[id].js` sau đó pẩm sẽ trông như `{id: ...}`. Để tìm hiểu thêm, hãy xem [Dynamic Routing documentation.](https://nextjs.org/docs/routing/dynamic-routes) Bạn nên sử dụng cái này với `getStaticPaths`, cái mà chúng tôi sẽ giải thích sau.

- `preview` là `true` nếu một trang trong chế độ preview và trái lại sẽ là `false`. Xem [Preview Mode documentation.](https://nextjs.org/docs/advanced-features/preview-mode)

- `previewData` chứa bộ dữ liệu xem trước được đặt bởi `setPreviewData`. [See the Preview Mode documentation.](https://nextjs.org/docs/advanced-features/preview-mode)

```
Lưu ý: Bạn có thể import các module tại chỗ đầu tiên trong scope cho việc sử dụng `getStaticProps`. imports được sử dụng trong `getStaticProps` sẽ không được bundled cho phies client, như giải thích dưới đây
```

## Simple Example

Đây là một ví dụ cái mà sử dụng `` đẻ lấy một danh sách các bài post từ CMS (content management system). Ví dụ này cũng có trong phần tài liệu của Pages.

```javascript
// posts will be populated at build time by getStaticProps()
function Blog({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li>{post.title}</li>
      ))}
    </ul>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("https://.../posts");
  const posts = await res.json();

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}

export default Blog;
```

## When should I use getStaticProps?

Bạn nên sử dụng `getStaticProps` nếu:

- Dữ liệu yêu cầu để render trang là có sẵn tại đầu thời điểm build trong một request của người dùng

- Đữ liệu đến từ headless CMS

- Dữ liệu có thể được lưu chữ công khai ( không phải người dùng cụ thể)

- Trang ý phải được tái render (cho SEO) và ra nahnh --- `` tạo ra HTML và cád file JSON, cả hai cái đó có thể được lưu trữ bởi CDM cho hiệu năng

## TypeScript: Use GetStaticProps

...

## Reading files: Use process.cwd()

Các file có thể được đọc trực tiếp từ filesystem trong `getStaticProps`.

Để làm được như vậy, bạn phải lấy được full đường đén 1 file.

Khi **Next.js** biên dịch code của bạ trong một thư mục tách rời bạn không thể sử dụng `__dirname` vì đường dẫn nó sẽ trả về khác với thư mục **pages**

Thay vào đó bạn sử dụng `process.cwd()` cái mà cho bạn thư mục nơi mà **Next.js** được thực thi

```javascript
import fs from "fs";
import path from "path";

// posts will be populated at build time by getStaticProps()
function Blog({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li>
          <h3>{post.filename}</h3>
          <p>{post.content}</p>
        </li>
      ))}
    </ul>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");

    // Generally you would parse/transform the contents
    // For example you can transform markdown to HTML here

    return {
      filename,
      content: fileContents,
    };
  });
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}

export default Blog;
```

## Technical details

### Only runs at build time

Bởi vì `getStaticProps` chạy tại thời điểm build, nó không nhận dữ liệu cái mà chỉ có sẵn trong suốt thời gian request, chằng hạn như tham số query hay HTTP headers vì nó tạo ra HTML tĩnh.

### Write server-side code directly

Lưu ý rằng `getStaticProps` chỉ chạy trên phía server. Nó sẽ không bao giờ chạy trên phia client. Thậm chí Nó sẽ không bao gồm JS bundle cho trình duyệt. Điều đó có nghĩa là bạn có thể viết code chằng hạn như truy vấn cơ sở dữ liệu trực tiếp mà không cần gửi đến trình duyệt. Bạn không nên lấy (fetch) một **API route** từ `getStaticProps` --- thay vào đó, bạn có thể viết code trực tiếp phía server-side trong `getStaticProps`

### Statically Generates both HTML and JSON

Khi một trang với `getStaticProps` được tái render tại thời điểm build, ngoài file HTML của trang, **Next.js** tạo ra một file JSON giữ kết quả của việc chạy `getStaticProps`

file JSON này sẽ được sử dụng trên routing phía client thông qua `next/link` [documentation](https://nextjs.org/docs/api-reference/next/link) hay next/router [documentation](https://nextjs.org/docs/api-reference/next/router).
