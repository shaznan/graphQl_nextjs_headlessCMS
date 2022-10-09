import Head from "next/head";

const posts = [
  {
    title: "React Testing",
    exerpt: "Learn react testing",
  },
  {
    title: "React With Tailwinf",
    exerpt: "Learn react with Tailwind",
  },
];

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto mb-8 px-10 ">
      <Head>
        <title>CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts?.map((post, index) => (
            <div key={index}>
              {post.title}
              {post.exerpt}
            </div>
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8"></div>
        </div>
      </div>
    </div>
  );
}
