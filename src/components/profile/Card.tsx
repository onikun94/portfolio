import React, { VFC } from 'react';
import Image from 'next/image';

type cardPropsType = {
  content1: string;
  size1?: string;
  content2: string;
  content3?: string;
  content4?: string;
  content5?: string;
  content6?: string;
};
const Card: VFC<cardPropsType> = (props) => {
  return (
    <p>
      <div className="  p-2     my-4  ">
        <div className="justify-end flex">
          <div className=" mx-16">
            <Image
              className=" w-2/4 rounded-full"
              src="/onikun.png"
              width={200}
              height={200}
              decoding="async"
              alt="my-icon"
            />
          </div>
          <div className="m-2  w-2/3  ">
            <div className="p-4 ">
              <p className=" text-base  p-1 ">{props.content1}</p>
              <p className="text-xs   ">{props.content2}</p>
            </div>
            <div className="p-4 text-sm border-y">
              <p>{props.content3}</p>
              <p>{props.content4}</p>
              <p>{props.content5}</p>
            </div>
          </div>
        </div>
      </div>
    </p>
  );
};

export default Card;
