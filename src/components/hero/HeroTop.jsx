import { FaPlus } from "react-icons/fa";

const HeroTop = () => {
  return (
    <div className="hero">
      <div className="hero-content text-center">
        <div className="py-6">
          <h1 className="text-3xl sm:text-5xl font-bold">
            Friends to keep close in your life
          </h1>
          <p className="py-4">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
          <button className="btn bg-[#244D3F] text-white font-medium mt-5">
            <FaPlus />
            Add a Friend
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroTop;
