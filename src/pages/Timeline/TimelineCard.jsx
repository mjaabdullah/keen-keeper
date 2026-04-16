import { LuMessageSquareMore, LuPhoneCall, LuVideo } from "react-icons/lu";

const TimelineCard = ({ data }) => {
  const { name, date, actionType } = data;
  const formatted = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className="bg-white rounded-lg p-4 flex gap-3 border border-gray-50 shadow">
      <div className="text-3xl flex items-center">
        {actionType === "Call" ? (
          <LuPhoneCall />
        ) : actionType === "Text" ? (
          <LuMessageSquareMore />
        ) : actionType === "Video" ? (
          <LuVideo />
        ) : (
          ""
        )}
      </div>
      <div className="space-y-1">
        <div className="flex gap-1 items-center">
          <h3 className="text-xl text-[#244D3F]">{actionType}</h3>
          <span className="text-lg text-[#64748B]">with {name}</span>
        </div>
        <span className="text-lg text-[#64748B]">{formatted}</span>
      </div>
    </div>
  );
};

export default TimelineCard;
