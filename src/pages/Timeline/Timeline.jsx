import { useContext } from "react";
import { TimelineContext } from "../../context/TimelineContext";
import TimelineCard from "./TimelineCard";

const Timeline = () => {
  const { timelineData } = useContext(TimelineContext);

  return (
    <div className="max-w-6xl mx-auto my-10 p-3">
      <h1 className="text-3xl md:text-4xl font-bold mb-5">Timeline</h1>
      <select defaultValue="Pick a color" className="select ">
        <option disabled={true}>Filter Timeline</option>
        <option>Call</option>
        <option>Text</option>
        <option>Video</option>
      </select>
      <div className="space-y-5 mt-6">
        {timelineData.map((data, ind) => (
          <TimelineCard data={data} key={ind} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
