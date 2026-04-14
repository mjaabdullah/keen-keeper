import { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
import FriendCard from "./FriendCard";

const Friends = () => {
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

  return (
    <div className="container mx-auto px-3 mb-20">
      <h2 className="text-2xl font-semibold mb-4">Your Friends</h2>
      {loading ? (
        <div className="text-center">
          <PropagateLoader color="#244D3F" size={22} />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {friends.map((friend, ind) => (
            <FriendCard friend={friend} key={ind} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Friends;
