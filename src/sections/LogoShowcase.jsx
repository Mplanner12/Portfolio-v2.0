import { expCards } from "../constants";

const LogoIcon = ({ card }) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <img src={card.logoPath} alt={card.company} />
    </div>
  );
};

const LogoShowcase = () => (
  <div className="md:my-20 my-10 relative">
    <div className="gradient-edge" />
    <div className="gradient-edge" />

    <div className="marquee h-52">
      <div className="marquee-box md:gap-12 gap-5">
        {expCards.map((card, index) => (
          <LogoIcon key={index} card={card} />
        ))}

        {expCards.map((card, index) => (
          <LogoIcon key={index} card={card} />
        ))}
      </div>
    </div>
  </div>
);

export default LogoShowcase;
