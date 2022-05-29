import Image from 'next/image';
import Link from 'next/link';
import React, { VFC } from 'react';
type HeaderTypeProps = {
  title: string;
  // link1: string;
  // link2: string;
  // link3: string;
  snsData: { id: number; site: string; link: string; img: string }[];
  headLink: { link: string; linkName: string }[];
};

const Header: VFC<HeaderTypeProps> = ({ title, snsData, headLink }) => {
  return (
    <div className=" bg-white ">
      <div className="mx-auto w-3/5">
        <div className="font-spartan justify-between flex ">
          <h1 className="pt-4 pl-4 font-spartan text-2xl flex ">{title}</h1>
          <div className=" text-xl pt-4 flex">
            {snsData.map((sns) => (
              <div key={sns.id} className="mx-2">
                <Link href={sns.link}>
                  <a>
                    <Image src={sns.img} width={32} height={32}></Image>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <ul className="text-md font-medium flex ">
          {headLink.map((h) => (
            <li className="inline-block bg-white px-4 py-2 rounded-md font-spartan ">
              <Link href={h.link}>
                <a>{h.linkName}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
