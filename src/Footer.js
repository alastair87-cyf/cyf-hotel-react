import React from "react";

const Footer = props => (
  <ul>
    {props.address.map(line => (
      <li>{line}</li>
    ))}
  </ul>
);

export default Footer;
