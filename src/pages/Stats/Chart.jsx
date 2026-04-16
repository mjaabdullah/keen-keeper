import { Legend, Pie, PieChart } from "recharts";

const data = [
  { name: "Group A", value: 400, fill: "#0088FE" },
  { name: "Group B", value: 300, fill: "#00C49F" },
];

const Chart = () => {
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
        <Legend />
      </PieChart>
    </div>
  );
};

export default Chart;
