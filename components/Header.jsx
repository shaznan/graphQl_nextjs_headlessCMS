import React, { useContext } from "react";
import Link from "next/link";

const catergories = [
  {
    name: "React",
    slug: "react",
  },
  {
    name: "Web Development",
    slug: "web-dev",
  },
];

const Header = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8 ">
        <div className="md:float-left block bg-slate-200">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white">
              GraphCMS
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents bg-red-700">
          {catergories?.map((catergory) => (
            <Link key={catergory.slug} href={`/catergory/${catergory?.slug}`}>
              <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                {catergory?.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
