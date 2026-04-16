import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const TimelineContext = createContext();

const TimelineProvider = ({ children }) => {
  const [timelineData, setTimelineData] = useState([]);

  const handleTimelineData = (actionType, name) => {
    const date = new Date().toDateString();
    const actionDetail = {
      title: `${actionType} with ${name}`,
      date,
    };
    setTimelineData([...timelineData, actionDetail]);
    toast.success(actionDetail.title + "!");
  };
  const data = {
    timelineData,
    setTimelineData,
    handleTimelineData,
  };
  return (
    <TimelineContext.Provider value={data}>{children}</TimelineContext.Provider>
  );
};

export default TimelineProvider;
