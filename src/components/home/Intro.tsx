import Image from 'next/image';
import React from 'react';
const Intro = () => {
  return (
    <div className="text-center">
      <div className="m-4">
        <Image
          className=" w-2/4 rounded-full"
          src="/onikun.png"
          width={200}
          height={200}
          alt="my-icon"
        />
      </div>
    </div>
  );
};

export default Intro;
