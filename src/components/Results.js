import React from "react";

/*export default class Results extends React.Component {
  render() {
    this.props.results.forEach(result => console.log(result.id));
    return null;
  }
}*/

const Results = props => (
  <table className="results">
    <thead>
      <tr>
        <th>Title</th>
        <th>First name</th>
        <th>Surname</th>
        <th>Email</th>
        <th>Room id</th>
        <th>Check in date</th>
        <th>Check out date</th>
      </tr>
    </thead>
    <tbody>
      {props.results.map(result => (
        <tr>
          <td>{result.title}</td>
          <td>{result.firstName}</td>
          <td>{result.surname}</td>
          <td>{result.email}</td>
          <td>{result.roomId}</td>
          <td>{result.checkInDate}</td>
          <td>{result.checkOutDate}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Results;
