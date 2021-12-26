import Career from './Career';
import Data from '@/data/Data.json';

const Careers = () => {
  return (
    <>
      <h1 className="text-center font-bold text-2xl ">経歴</h1>
      <div className=" border-dashed border-opacity-50 border-2   border-gray-400 rounded-md m-4 block ">
        {Data.hisData.map((h) => (
          <Career key={h.contents} {...h} />
        ))}
      </div>
    </>
  );
};

export default Careers;
