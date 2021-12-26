import Image from 'next/image';
import React, { VFC } from 'react';

type ContactPageProps = {
  site: string;
  link: string;
  img: string;
};

const Contact: VFC<ContactPageProps> = (props) => {
  return (
    <div className="p-2 m-4 w-2/5 text-center">
      <p className="font-bold">{props.site}</p>

      <a href={props.link}>
        <Image className="m-auto w-2/5" src={props.img} alt="snsImage" />
      </a>
    </div>
  );
};

export default Contact;
