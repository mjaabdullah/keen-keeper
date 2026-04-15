import { HiOutlineBellSnooze } from "react-icons/hi2";
import { LuArchive } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";

const LeftCard = ({ currentFriend }) => {
  const { id, name, days_since_contact, status, picture, tags, bio } =
    currentFriend;

  const getStatusBadge = () => {
    if (status === "overdue") {
      return <div className="badge badge-error badge-md">Overdue</div>;
    }
    if (status === "almost due") {
      return <div className="badge badge-warning badge-md">Almost Due</div>;
    }
    if (status === "on-track") {
      return <div className="badge badge-success badge-md">On-Track</div>;
    }
    return null;
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="card bg-base-100 shadow flex flex-col border border-base-200">
        <div className="card-body items-center text-center p-6">
          <div className="w-25 h-25 rounded-full overflow-hidden  mb-2">
            <img
              src={picture || `https://i.pravatar.cc/300?u=${name}`}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="font-semibold text-lg text-base-content">{name}</h2>
          <div className="mt-auto">{getStatusBadge()}</div>
          <div className="flex flex-wrap gap-2 justify-center">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="badge badge-soft font-medium badge-success"
              >
                {tag.toUpperCase()}
              </div>
            ))}
          </div>
          <em>{bio}</em>
        </div>
      </div>
      <div className="space-y-4">
        <div className="bg-base-100 shadow flex justify-center items-center border border-base-200 rounded-lg p-2.5 gap-2">
          <HiOutlineBellSnooze />
          Snooze 2 weeks
        </div>
        <div className="bg-base-100 shadow flex justify-center items-center border border-base-200 rounded-lg p-2.5 gap-2">
          <LuArchive />
          Archive
        </div>
        <div className="bg-base-100 shadow flex justify-center items-center border border-base-200 rounded-lg p-2.5 gap-2 text-red-500">
          <RiDeleteBinLine />
          Delete
        </div>
      </div>
    </div>
  );
};

export default LeftCard;
