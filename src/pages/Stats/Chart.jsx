import { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { TimelineContext } from "../../context/TimelineContext";

const Chart = () => {
  const { timelineData } = useContext(TimelineContext);

  const getChartData = (type) => {
    return timelineData.filter((item) => item.actionType === type).length;
  };

  const data = [
    { name: "Call", value: getChartData("Call"), fill: "#244D3F" },
    { name: "Text", value: getChartData("Text"), fill: "#7E35E1" },
    { name: "Video", value: getChartData("Video"), fill: "#37A163" },
  ];
  return (
    <div className="flex justify-center">
      <PieChart
        style={{
          width: "100%",
          maxWidth: "300px",
          maxHeight: "50vh",
          aspectRatio: 1,
        }}
        responsive
      >
        <Pie
          data={data}
          innerRadius="80%"
          outerRadius="100%"
          cornerRadius="80%"
          fill="#8884d8"
          paddingAngle={1}
          dataKey="value"
          isAnimationActive={true}
        />
        <Tooltip />
        <Legend wrapperStyle={{ paddingTop: "20px" }} />
      </PieChart>
    </div>
  );
};

export default Chart;
