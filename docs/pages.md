# Page

Trong **Next.js** một page là một React component đã được export từ 1 file'.js', '.jsx', '.ts', hay '.tsx' trong thư mục 'pages'. Mỗi page được liên kết với 1 route dữ trên tên file.

# Pre-rendering

Mặc định, **Next.js** render lại mỗi trang. Điều đó có nghĩa là **Next.js** tạo ra HTML cho mỗi trang trước ( for each page in advance ). Thay vì thực hiện tất cả chúng bằng javascript phía client. Việc tái render có thể mang đến kết quả hiệu xuất và CEO tốt hơn.

Mỗi HTML được tạo ra thì được liên kết với mã javascript tối thiểu cần thiết cho mỗi trang. Khi một trang được tải bằng trình duyệt. mã js của nó chạy và làm cho các trang được tương tác đầy đủ. ( Quá trình này được gọi là hydration )

## Two forms of Pre-rendering

**Next.js** có 2 hình thức để tái render. Static Generation and Server-side Rendering. Sự khác nhau là khi nó tạo ra HTML chỗ mỗi trang.

- Static Generation ( khuyến khích ). HTML đợc tại ra tại thời điểm build and sẽ được tái sự trong mỗi request
- Server-side Rendering: HTML được tạo ra trong mỗi reqest

Quan trọng, **Next.js** để bạn chọn hình thức tái render mà bạn muốn sử dụng cho mỗi trang. Bạn có thể tạo một 'Hybrid' **Next.js** app bằng cách sử dụng static generation cho hầu hết các trang và sử dụng Server-side rendering cho trang khác.

Chúng tôi khuyến khích sử dụng Static Generation trên Server-side rendering vì các lý do về hiệu xuất. Các trang được tạo tĩnh có thể được nhớ tạm bằng CDN để tằng hiệu năng. Tuy nhiên, trong một vài trwofng hợp, Server-side rendering có thể chỉ là một lựa chọn.

# Static Generation (Recommended)

#### Example

-[WordPress Example (Demo)](https://github.com/vercel/**next.js**/tree/canary/examples/cms-wordpress)

-[Blog Starter using markdown files (Demo)]()

-[DatoCMS Example (Demo)]()

-[TakeShape Example (Demo)]()

-[Sanity Example (Demo)]()

-[Prismic Example (Demo)]()

-[Contentful Example (Demo)]()

-[Strapi Example (Demo)]()

-[Agility CMS Example (Demo)]()

-[Static Tweet Demo]()

Nếu một trang sử dụng Static generation, thì trang HTML được tại tại thời điểm uild. Điều đó có nghĩa là trong sản phẩm, trang HTML được tạo khi bạn chạy **'next build'**. HTML đó sau đó sẽ được tái sử dụng trong mỗi request. NÓ có thể được nhớ tạm bằng một CDN.

Trong **next.js**, bạn có thể tạo ra các trang tĩnh với có hoặc không có dữ liệu. Chúng ta hãy xem xét từng trường hợp

## Static generation without data

Mặc định, **Next.js** tái render các trang sử dụng Static generation mà không cần lấy dữ liệu. Đây là một ví dụ:

```javascript
function About() {
  return <div>About</div>;
}

export default About;
```

Lưu ý rằng trang này không cần lấy bất kì dữ liệu bên ngoài nào để được tái render. Trong trường hợp như trên . **Next.js** tạo ra một file HTML đơn cho mỗi trang trong suốt thời điểm build.

## Static Generation with data

Một vài trang yêu cầu lấy dữ liệu bên ngoài cho việc tái render. Có hai kịch bản, và một trong hai có thể áp dụng. Trong mỗi trường hợp, bạn có thể sử dụng một hàn đặc biệt **Next.js** cung cấp:

1. Trang **nội dung** của bạn phụ thuộc vào dữ liệu bên ngoài: sử dụng **`getStaticProps`**.
2. Đường dẫn trang của bạn phụ thuộc vào dữ liệu bên ngoài. Sử dụng **`getStaticPaths`** (usually in addition to **`getStaticProps`**).

### Scenario 1: Your page content depends on external data

**Ví dụ** trang blog của bạn có thể cần lấy danh sách các bài viết từ CMS (content management system).

```javascript
// TODO: Need to fetch `posts` (by calling some API endpoint)
//       before this page can be pre-rendered.
function Blog({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li>{post.title}</li>
      ))}
    </ul>
  );
}

export default Blog;
```

Đẻ lấy dữ liệu đó khi tái render. **Next.js** cho phép bạn `export` một hàm `async` được gọi là `getStaticProps` từ cùng một file. Hàm này được gọi tại thời điểm build và để bạn truyền dữ liệu lấy được đến `props` của trang khi tái render.

```javascript
// TODO: Need to fetch `posts` (by calling some API endpoint)
//       before this page can be pre-rendered.
function Blog({ posts }) {
  // Render posts...
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
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

Để tim hiểu thêm về cách `` hoạt động, check out the [Data Fetching documentation.](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation)

### Scenario 2: Your page paths depend on external data

**Next.js** cho phép bạn tạo các trang với **dynamic routes**. Ví dụ, bạn có thể tạo một file được gọi là `pages/posts/[id].js` để hiển thị trang bài post dựa trên `id`. Điều đó sẽ cho phép bạn hiển thị một blog với `id: 1` khi truy cập `post/1`.

```
To learn more about dynamic routing, check the Dynamic [Routing documentation.](https://nextjs.org/docs/routing/dynamic-routes)
```

Tuy nhiên, cái `id` bạn muốn tái render tại thời điểm build có thể dựa trên dữ liệu bên ngoài

**ví dụ**: Giả sử rằng bạn chỉ thêm một bài post ( với `id: 1`) đến database. Trong trường hợp này, bạn chỉ muốn tái render `posts/1` tại thời điểm build.

Một lát sau, bạn muốn thêm bài post thứ 2 với `id: 2`. Sau đó bạn muốn tái render `posts/2` như thế.

Vì thế đường dẫn trang của bạn cái mà được tái render dựa trên dữ liệu ngoài. Để xử lý điều đó. Next.js để bạn `export` một hàm `async` gọi là `getStaticPaths` từ một dynamic page (`pages/posts/[id].js` trong trường hợp này). Hàm này được gọi tại thời điểm build và để bạn xác định các đương dẫn nào bạn muốn tái render

```javascript
// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://.../posts");
  const posts = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => `/posts/${post.id}`);

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}
```

Cũng như thế trong `pages/posts/[id].js`, bạn có thể export `getStaticProps` , vì vậy bạn có thể lấy dữa liệu về bài viết này với `id` đó và sử dung nó để tái render page

To learn more about how getStaticPaths works, check out the [ Data Fetching documentation.](https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation)

## When should I use Static Generation?

Chúng ta khuyến khích sử dụng Statuc Generation (có hoặc không có data) bất cứ khi nào khả thi, bởi vì trang của bạn có thể built một lần và được phục vụ (served) bằng CDN. Cái đó sẽ làm nó nhanh hơn nhiều thay vì có 1 server render trang đó trong mỗi lần request.

Bạn có thể sử dụng Static Generation cho rất nhiều kiểu trang, bao gồm

- Marketing pages
- Blog posts
- E-commerce product listings
- Help and documentation

Bạn nên hỏi bản thân mình 'Tôi có thể tái render **ahead** trang này trong request của người dùng? '. Nếu câu trả lời là có, sau đó bạn nên chọn Static Generation.

Nói các khác, Static Generation không phải ý tưởng tốt nếu bạn không tái render một \*\*ahead"" một trang trong request của ngời dùng. Có lẽ trang của bạn hiển thị các dữ liệu thường xuyên được cập nhật, và nột dung trang thay đổi trong mỗi lần request

Trong những trường hợp như vầy, bạn có thể làm một trong những điều sau.

- Use Static genaration với Client-side rendering. BẠn có thể giữ việc tái render một số phần của trạng và sau đó bạn sử dụng client-side javascript để populate sau đó. To learn more about how getStaticPaths works, check out the [ Data Fetching documentation.](https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation)

- Sử dụng Server-Side Rendering. **Next.js** tái render một trang trong mỗi request. Nó sẽ chậm hơn bởi vì trang đó không đc nhớ bở CDN, nhưng việc trang tái render cho phép trang luôn luôn được up-to-date. Chúng ta sẽ nói cách tiếp cận bên dưới.

## Server-side Rendering

```
Also referred to as "SSR" or "Dynamic Rendering".
```

Nếu mọt trang sử dung Server-side rendering , trang HTML được tạo ra trong mỗi lần request.

Để sử dụng Server-side rendering cho mỗi trang, bạn cần `export` một hàm `async` gọi là `getServerSideProps`. Hàm này sẽ được gọi bởi server trong mỗi lần request.

Ví dụ, giả sử rằng trang của bạn cần tái render thường xuyên dữ liệu được cập nhật (Được lấy từ API ngoài). Bạn có thể vết `getServerSideProps` cái lấy dữ liệu đó và truyên ó đến `Page` giống bên dưới.

```javascript
function Page({ data }) {
  // Render data...
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://.../data`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default Page;
```

Như bạn có thể thấy, `getServerSideProps` giống với `, nhưng khác rằng` chạy mỗi khi request thay vì trong thời điểm build.

To learn more about how getStaticPaths works, check out the [ Data Fetching documentation.](https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation)

## Summary

We've discussed two forms of pre-rendering for Next.js.

- **Static Generation (Recommended)**: The HTML is generated at build time and will be reused on each request. To make a page use Static Generation, either export the page component, or export getStaticProps (and getStaticPaths if necessary). It's great for pages that can be pre-rendered ahead of a user's request. You can also use it with Client-side Rendering to bring in additional data.

- **Server-side Rendering:** The HTML is generated on each request. To make a page use Server-side Rendering, export getServerSideProps. Because Server-side Rendering results in slower performance than Static Generation, use this only if absolutely necessary.
