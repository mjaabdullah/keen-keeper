import Card from "../../components/hero/Card";
import HeroTop from "../../components/hero/HeroTop";

const Banner = () => {
  const cardData = [
    { title: "Total Friends", count: 10 },
    { title: "On Track", count: 3 },
    { title: "Need Attention", count: 6 },
    { title: "Interactions This Month", count: 12 },
  ];
  return (
    <div className="container mx-auto px-3 py-5">
      <HeroTop />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-5">
        {cardData.map((card, ind) => (
          <Card title={card.title} count={card.count} key={ind} />
        ))}
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default Banner;
