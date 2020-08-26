import React from "react";
import moment from "moment";

const SearchResults = props => (
  <table>
    <tr>
      <th>id</th>
      <th>title</th>
      <th>first name</th>
      <th>surname</th>
      <th>email</th>
      <th>room id</th>
      <th>check in date</th>
      <th>check out date</th>
      <th>days</th>
    </tr>
    {props.results.map(result => (
      <tr>
        <td>{result.id}</td>
        <td>{result.title}</td>
        <td>{result.firstName}</td>
        <td>{result.surname}</td>
        <td>{result.email}</td>
        <td>{result.roomId}</td>
        <td>{result.checkInDate}</td>
        <td>{result.checkOutDate}</td>
        <td>{moment(result.checkOutDate).diff(result.checkInDate, "days")}</td>
      </tr>
    ))}
  </table>
);

export default SearchResults;
