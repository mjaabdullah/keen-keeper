const Card = ({ title, count }) => {
  return (
    <div className="flex flex-col bg-white py-8 text-center space-y-2 shadow-sm rounded-lg">
      <h2 className="text-3xl font-semibold text-[#244D3F]">{count}</h2>
      <span className="text-lg text-[#64748B]">{title}</span>
    </div>
  );
};

export default Card;
