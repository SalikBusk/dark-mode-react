import React from 'react';

interface CardProps {
  image: string;
  alt: string;
  big?: boolean,
}

const Card: React.FC<CardProps> = ({ image, alt, big}) => {
  return (
    <div>
      <img
        className={big ? "w-full h-[85vh] object-cover rounded-[10px] border-none" : "w-full h-[55vh] object-cover rounded-[10px] border-none"}
        src={image} 
        alt={alt}/>
    </div>
  );
};

export default Card;
