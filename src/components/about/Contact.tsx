import React, { VFC } from 'react';

type ContactPageProps = {
  site: string;
  link: string;
  img: string;
};

const Contact: VFC<ContactPageProps> = (props) => {
  return (
    <div className=" m-4 p-2 w-2/5 text-center">
      <p className="font-bold">{props.site}</p>

      <a href={props.link}>
        <img className="m-auto w-2/5" src={props.img} />
      </a>
    </div>
  );
};

export default Contact;
