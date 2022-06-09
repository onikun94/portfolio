import Image from 'next/image';
import Link from 'next/link';
import React, { VFC } from 'react';
type HeaderTypeProps = {
  title: string;
  snsData: { id: number; site: string; link: string; img: string }[];
  headLink: { link: string; linkName: string }[];
  width: number;
};

// eslint-disable-next-line react/display-name
const Header: VFC<HeaderTypeProps> = React.memo(({ title, snsData, headLink, width }) => {
  return (
    <>
      {width >= 630 ? (
        <div className=" bg-white ">
          <div className="mx-auto w-3/5">
            <div className="flex justify-between ">
              <h1 className="flex pt-4 pl-4 text-2xl">{title}</h1>
              <div className="flex pt-4 text-xl">
                {snsData.map((sns) => (
                  <div key={sns.id} className="mx-2">
                    <Link href={sns.link}>
                      <a>
                        <Image src={sns.img} width={32} height={32} alt={sns.img}></Image>
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <ul className="flex text-lg">
              {headLink.map((h) => (
                <li key={h.linkName} className="inline-block py-2 px-4 bg-white rounded-md">
                  <Link href={h.link}>
                    <a>{h.linkName}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className=" bg-white ">
          <div>
            <div className="flex justify-between ">
              <h1 className="flex pt-4 pl-4 text-2xl">{title}</h1>
              <div className="flex pt-4 text-xl">
                {snsData.map((sns) => (
                  <div key={sns.id} className="mx-2">
                    <Link href={sns.link}>
                      <a>
                        <Image src={sns.img} width={32} height={32} alt={sns.img}></Image>
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <ul className="flex text-lg">
              {headLink.map((h) => (
                <li key={h.linkName} className="inline-block py-2 px-4 bg-white rounded-md">
                  <Link href={h.link}>
                    <a>{h.linkName}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
});

export default Header;
