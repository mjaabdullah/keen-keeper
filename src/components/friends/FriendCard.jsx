import { useNavigate } from "react-router";

const FriendCard = ({ friend }) => {
  const { id, name, days_since_contact, status, picture, tags } = friend;
  const navigate = useNavigate();

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
    <div
      onClick={() => navigate(`friend/${id}`)}
      className="card bg-base-100 shadow hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-base-200"
    >
      <div className="card-body items-center text-center p-6">
        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md mb-2">
          <img
            src={picture || `https://i.pravatar.cc/300?u=${name}`}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="font-semibold text-lg text-base-content">{name}</h2>

        <p className="text-xs text-base-content/60">
          {days_since_contact}d ago
        </p>

        <div className="flex flex-wrap gap-2 justify-center">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="badge badge-soft font-medium badge-success"
            >
              {tag}
            </div>
          ))}
        </div>
        <div className="mt-auto">{getStatusBadge()}</div>
      </div>
    </div>
  );
};

export default FriendCard;
