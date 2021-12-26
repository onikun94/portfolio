import Data from '@/data/Data.json';
import Contact from './Contact';
const Contacts = () => {
  return (
    <>
      {Data.aboutData.map((about) => (
        <div className="flex flex-wrap m-2 justify-center">
          <Contact key={about.id} {...about} />
        </div>
      ))}
    </>
  );
};

export default Contacts;
