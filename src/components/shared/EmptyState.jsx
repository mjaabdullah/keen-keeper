const EmptyState = ({ message = "No data found!" }) => {
  return (
    <div className="text-2xl text-gray-500 text-center my-10">{message}</div>
  );
};

export default EmptyState;
