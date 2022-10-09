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
    <div className="container mx-auto px-10 mb-8 bg-slate-400">
      <Head>
        <title>CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {posts?.map((post, index) => (
          <div key={index}>
            {post.title}
            {post.exerpt}
          </div>
        ))}
      </div>
    </div>
  );
}
