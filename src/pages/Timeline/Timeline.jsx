import { useContext } from "react";
import { TimelineContext } from "../../context/TimelineContext";

const Timeline = () => {
  const { handleTimelineData } = useContext(TimelineContext);
  handleTimelineData();
  return (
    <div className="max-w-6xl mx-auto my-10 p-3">
      <h1 className="text-4xl font-bold mb-5">Timeline</h1>
      <select defaultValue="Pick a color" className="select ">
        <option disabled={true}>Filter Timeline</option>
        <option>Call</option>
        <option>Text</option>
        <option>Video</option>
      </select>
    </div>
  );
};

export default Timeline;
