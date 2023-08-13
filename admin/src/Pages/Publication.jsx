import { publications } from "../dummyData";
import PublicCard from "../Components/PublicCard";
import PublicationModal from "../Components/Modals/Publications";
const Publication = () => {
  let counter = 0;
  return (
    <div className="p-12 ">
      <h1 className="text-purple-600 text-2xl font-bold mb-10 cursor-pointer">
        <PublicationModal />
      </h1>
      <div className="flex flex-col gap-14">
        {publications.map((item) => (
          <PublicCard key={item.id} publicDetails={item} number={++counter} />
        ))}
      </div>
    </div>
  );
};

export default Publication;
