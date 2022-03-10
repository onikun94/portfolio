import Link from 'next/link';
import React, { VFC } from 'react';

type HeaderTypeProps = {
  title: string;
  link1: string;
  link2: string;
  link3: string;
  link4: string;
};

const Header: VFC<HeaderTypeProps> = (props) => {
  return (
    <div className="my-4">
      <h1 className="my-4 font-sanjp text-3xl text-center">{props.title}</h1>
      <ul className="m-8 text-xl font-medium text-center">
        <li className="inline-block px-2 font-spartan">
          <Link href="/">{props.link1}</Link>
        </li>
        <li className="inline-block px-2 font-spartan">
          <Link href="/profile">{props.link2}</Link>
        </li>
        <li className="inline-block px-2 font-spartan">
          <Link href="/blog">{props.link3}</Link>
        </li>
        <li className="inline-block px-2 font-spartan">
          <Link href="/about">{props.link4}</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
