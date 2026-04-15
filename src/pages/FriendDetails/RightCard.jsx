import { LuMessageSquareMore, LuPhoneCall, LuVideo } from "react-icons/lu";
import Card from "../../components/hero/Card";

const RightCard = ({ currentFriend }) => {
  const {
    id,
    name,
    days_since_contact,
    status,
    picture,
    tags,
    bio,
    goal,
    next_due_date,
  } = currentFriend;
  const formatted = new Date(next_due_date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const contactData = [
    {
      title: "Days Since Contact",
      count: days_since_contact,
    },
    {
      title: "Goals (Days)",
      count: goal,
    },
    {
      title: "Next Due",
      count: formatted,
    },
  ];
  return (
    <div className="lg:col-span-2 space-y-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {contactData.map((data, ind) => (
          <Card title={data.title} count={data.count} key={ind} />
        ))}
      </div>
      <div className="bg-white rounded-lg shadow-sm flex  justify-between p-6">
        <div className=" space-y-5">
          <h3 className="text-[#244D3F] text-[20px]">Relationship Goal</h3>
          <span>
            <span className="text-[#64748B]">Connect every</span>{" "}
            <strong>{goal} days</strong>
          </span>
        </div>
        <div>
          <button className="btn">Edit</button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-[#244D3F] text-[20px] mb-4">Quick Check-In</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="bg-[#F8FAFC] rounded-lg border border-[#E9E9E9] p-5 text-lg flex flex-col items-center gap-2">
            <span className="text-3xl">
              <LuPhoneCall />
            </span>
            <span className="text-[#1F2937]">Call</span>
          </div>
          <div className="bg-[#F8FAFC] rounded-lg border border-[#E9E9E9] p-5 text-lg flex flex-col items-center gap-2">
            <span className="text-3xl">
              <LuMessageSquareMore />
            </span>
            <span className="text-[#1F2937]">Text</span>
          </div>
          <div className="bg-[#F8FAFC] rounded-lg border border-[#E9E9E9] p-5 text-lg flex flex-col items-center gap-2">
            <span className="text-3xl">
              <LuVideo />
            </span>
            <span className="text-[#1F2937]">Video</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightCard;
