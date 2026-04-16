import { useContext } from "react";
import EmptyState from "../../components/shared/EmptyState";
import { TimelineContext } from "../../context/TimelineContext";
import Chart from "./Chart";

const Stats = () => {
  const { timelineData } = useContext(TimelineContext);
  return (
    <div className="max-w-5xl mx-auto my-8 lg:my-15 p-3">
      <h1 className="text-2xl lg:text-4xl font-bold mb-6">
        Friendship Analytics
      </h1>
      <div className="bg-white p-3 md:p-8 rounded-lg shadow">
        {timelineData.length > 0 ? (
          <>
            <h4 className="text-lg text-[#244D3F] mb-4">By Interaction Type</h4>
            <Chart />
          </>
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  );
};

export default Stats;
