import React from "react";

const Results = props => (
  <table className="results">
    <thead>
      <th>Title</th>
      <th>First name</th>
      <th>Surname</th>
      <th>Email</th>
      <th>Room id</th>
      <th>Check in date</th>
      <th>Check out date</th>
    </thead>
    <tr>
      <td>Mr</td>
      <td>Person1</td>
      <td>Else</td>
      <td>Person1@else.com</td>
      <td>1</td>
      <td>2017-11-21</td>
      <td>2017-11-28</td>
    </tr>
  </table>
);

export default Results;
