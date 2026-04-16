import Chart from "./Chart";

const Stats = () => {
  return (
    <div className="max-w-5xl mx-auto my-17">
      <h1 className="text-4xl font-bold mb-6">Friendship Analytics</h1>
      <div className="bg-white p-3 md:p-8 rounded-lg shadow">
        <h4 className="text-lg text-[#244D3F]">By Interaction Type</h4>
        <Chart />
      </div>
    </div>
  );
};

export default Stats;
