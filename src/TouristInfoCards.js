import React from "react";

const TouristInfoCard = props => (
  <div className="card">
    <img src={props.card.src} className="card-img-top" />
    <div className="card-body">
      <a href={props.card.href} className="btn btn-primary">
        {props.card.href_friendly}
      </a>
    </div>
  </div>
);

const TouristInfoCards = props => (
  <div className="cards">
    {props.cards.map(card => (
      <TouristInfoCard card={card} />
    ))}
  </div>
);

export default TouristInfoCards;
