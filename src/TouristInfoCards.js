import React from "react";

const TouristInfoCard = props => (
  <div>
    <img src={props.card.src} alt={props.card.alt} width="100px" />
    <p>
      <a href={props.card.href}>{props.card.href_friendly}</a>
    </p>
    <p>{props.card.city}</p>
  </div>
);

const TouristInfoCards = props => (
  <div>
    {props.cards.map(card => (
      <TouristInfoCard card={card} />
    ))}
  </div>
);

export default TouristInfoCards;
