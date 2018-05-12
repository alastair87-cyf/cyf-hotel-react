import React, { Component } from "react";
import Search from "../components/Search.js";
import Results from "../components/Results.js";
import FakeBookings from "../data/fakeBookings.js";

export default class Bookings extends Component {
  search = () => {
    console.info("TO DO!");
  };

  render() {
    return (
      <div className="App-content">
        <div className="container">
          <Search search={this.search} />
          <Results results={FakeBookings} />
          {/* <Results results={this.state.results} /> */}
        </div>
      </div>
    );
  }
}
