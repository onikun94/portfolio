import Career from './Career';

import Data from '@/data/Data.json';

const Careers = () => {
  return (
    <div>
      <h1 className="font-spartan text-2xl text-center">Profile</h1>
      <div className="  text-gray-500">
        {Data.hisData.map((h) => (
          <Career key={h.contents} {...h} />
        ))}
      </div>
    </div>
  );
};

export default Careers;
