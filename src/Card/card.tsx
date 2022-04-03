import React from "react";
import './card.css';

export type CardProps = {
  feature: string,
  description: string,
  image: string,
  className?: string,
}

const Card = (CardProps: CardProps) => {
  return (
    <div className={CardProps.className}>
      <div>
        <h3>{CardProps.feature}</h3>
        <p>{CardProps.description}</p>
      </div>
      <div className="image-container">
        <img src={CardProps.image} alt="" />
      </div>
    </div>
  );
}

export default Card;
