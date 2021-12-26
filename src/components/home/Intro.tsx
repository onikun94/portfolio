import Image from 'next/image';
import React from 'react';
const Intro = () => {
  return (
    <div className="text-center">
      <Image
        className=" w-2/4 rounded-full"
        src="/onikun.png"
        width={500}
        height={500}
        alt="my-icon"
      />
    </div>
  );
};

export default Intro;
