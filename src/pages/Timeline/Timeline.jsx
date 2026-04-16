import { useContext, useState } from "react";
import EmptyState from "../../components/shared/EmptyState";
import { TimelineContext } from "../../context/TimelineContext";
import TimelineCard from "./TimelineCard";

const Timeline = () => {
  const { timelineData } = useContext(TimelineContext);
  const [filterData, setFilterData] = useState(timelineData);
  const handleFilter = (type) => {
    const newData = timelineData.filter((data) => data.actionType === type);
    setFilterData(newData);
  };

  return (
    <div className="max-w-6xl mx-auto my-10 p-3">
      <h1 className="text-3xl md:text-4xl font-bold mb-5">Timeline</h1>
      <select
        onClick={(e) => handleFilter(e.target.value)}
        defaultValue="Pick a color"
        className="select "
      >
        <option disabled={true}>Filter Timeline</option>
        <option value="Call">Call</option>
        <option value="Text">Text</option>
        <option value="Video">Video</option>
      </select>
      <div className="space-y-5 mt-6">
        {filterData.length > 0 ? (
          filterData.map((data, ind) => <TimelineCard data={data} key={ind} />)
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  );
};

export default Timeline;
