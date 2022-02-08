import Career from './Career';

import Data from '@/data/Data.json';

const Careers = () => {
  return (
    <>
      <h1 className="text-2xl text-center">経歴</h1>
      <div className="block m-4  ">
        {Data.hisData.map((h) => (
          <Career key={h.contents} {...h} />
        ))}
      </div>
    </>
  );
};

export default Careers;
