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
      <h1 className="my-4 text-4xl font-bold text-center">{props.title}</h1>
      <ul className="m-4 text-2xl font-medium text-right">
        <li className="inline-block px-2">
          <Link href="/">{props.link1}</Link>
        </li>
        <li className="inline-block px-2">
          <Link href="/profile">{props.link2}</Link>
        </li>
        <li className="inline-block px-2">
          <Link href="/about">{props.link3}</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
