import { logoIconsList } from "../constants";

const LogoIcon = ({ icon }) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <img 
        src={icon.imgPath} 
        alt={icon.name} 
        className="w-35 h-35 object-contain" // Increased size to 128px
      />
    </div>
  );
};

const LogoShowcase = () => (
  <div className="md:my-20 my-10 relative">
    <div className="gradient-edge" />
    <div className="gradient-edge" />
    <div className="marquee h-20">
      <div className="marquee-box md:gap-20 gap-2">
        {logoIconsList.map((icon, index) => (
          <LogoIcon key={index} icon={icon} />
        ))}

        {logoIconsList.map((icon, index) => (
          <LogoIcon key={index} icon={icon} />
        ))}
      </div>
    </div>
    <div className="h-20"></div>
  </div>
);

export default LogoShowcase;