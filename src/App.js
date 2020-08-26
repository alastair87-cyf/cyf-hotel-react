import React from "react";

import Bookings from "./Bookings";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards
        cards={[
          {
            src:
              "https://i2-prod.glasgowlive.co.uk/incoming/article15679547.ece/ALTERNATES/s810/0_Met-Tower.jpg",
            alt: "Glasgow",
            href: "www.peoplemakeglasgow.com",
            href_friendly: "peoplemakeglasgow.com",
            city: ""
          },
          {
            src:
              "https://i2-prod.glasgowlive.co.uk/incoming/article15679547.ece/ALTERNATES/s810/0_Met-Tower.jpg",
            alt: "",
            href: "www.visitmanchester.com",
            href_friendly: "visitmanchester.com",
            city: "Manchester"
          },
          {
            src:
              "https://i2-prod.glasgowlive.co.uk/incoming/article15679547.ece/ALTERNATES/s810/0_Met-Tower.jpg",
            alt: "",
            href: "www.visitlondon.com",
            href_friendly: "visitlondon.com",
            city: "London"
          }
        ]}
      />
      <Bookings />
    </div>
  );
};

export default App;
