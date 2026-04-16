import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { PropagateLoader } from "react-spinners";
import LeftCard from "./LeftCard";
import RightCard from "./RightCard";

const FriendDetails = () => {
  const { id } = useParams();
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const dataFetch = async () => {
      const res = await fetch("/friends.json");
      const data = await res.json();
      setFriends(data);
      setLoading(false);
    };
    dataFetch();
  }, []);

  const currentFriend = friends.find((friend) => friend.id === Number(id));
  

  return (
    <div className="container mx-auto px-3 my-20">
      <div className="text-center">
        {loading && <PropagateLoader color="#244D3F" size={22} />}
      </div>
      <div>
        {currentFriend ? (
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
            <LeftCard currentFriend={currentFriend} />
            <RightCard currentFriend={currentFriend} />
          </div>
        ) : (
          <div className="text-3xl text-gray-400 text-center">
            No data found
          </div>
        )}
      </div>
    </div>
  );
};

export default FriendDetails;
