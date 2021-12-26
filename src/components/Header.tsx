import Link from 'next/link';
import React, { VFC } from 'react';

type HeaderTypeProps = {
  title: string;
  link1: string;
  link2: string;
  link3: string;
};

const Header: VFC<HeaderTypeProps> = (props) => {
  return (
    <div className="my-4">
      <h1 className="font-bold text-center text-4xl my-4">{props.title}</h1>
      <ul className=" font-medium text-2xl  m-4 text-right">
        <li className="px-2 inline-block">
          <Link href="/">{props.link1}</Link>
        </li>
        <li className="px-2 inline-block">
          <Link href="/profile">{props.link2}</Link>
        </li>
        <li className="px-2 inline-block">
          <Link href="/about">{props.link3}</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
