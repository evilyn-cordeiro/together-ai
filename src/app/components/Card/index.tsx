interface CardProps {
  icon: string;
  title: string;
  description: string;
  className: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description, className }) => {
  return (
    <div
      className={`flex flex-col items-start text-left max-w-[450px] ${className}`}
    >
      <img src={icon} alt={title} className="w-16 h-16 mb-4" />
      <h3 className="text-[28px] font-normal  mb-4 tracking-[-.02em] leading-[1.2]">
        {title}
      </h3>
      <p className="text-lg  mb-4">{description}</p>
    </div>
  );
};

export default Card;
