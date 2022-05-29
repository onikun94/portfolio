import React from 'react';

import Contact from './Contact';

import Data from '@/data/Data.json';

const Contacts = () => {
  return (
    <div>
      {Data.aboutData.map((about) => (
        <div key={about.id} className="flex flex-wrap justify-center m-2">
          <Contact {...about} />
        </div>
      ))}
    </div>
  );
};

export default Contacts;
