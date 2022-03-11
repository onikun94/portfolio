import Career from './Career';

import Data from '@/data/Data.json';

const Careers = () => {
  return (
    <>
      <h1 className="text-2xl text-center font-spartan">Profile</h1>
      <p className="  text-gray-500">
        {Data.hisData.map((h) => (
          <Career key={h.contents} {...h} />
        ))}
      </p>
    </>
  );
};

export default Careers;
