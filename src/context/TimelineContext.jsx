import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const TimelineContext = createContext();

const TimelineProvider = ({ children }) => {
  const [timelineData, setTimelineData] = useState([]);

  const handleTimelineData = (actionType, name) => {
    const date = new Date().toDateString();

    const actionDetail = {
      name,
      date,
      actionType,
    };
    console.log(actionDetail);
    setTimelineData([...timelineData, actionDetail]);
    toast.success(`${actionType} with ${name}!`);
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
