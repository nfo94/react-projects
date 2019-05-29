import React, { Component } from "react";
import "./TourList.scss";
import Tour from "../Tour/Tour";
import { tourData } from "./tourData";

export default class TourList extends Component {
  state = {
    tours: tourData
  };

  removeTour = id => {
    const { tours } = this.tours;
  };

  render() {
    const { tours } = this.state;
    return (
      <section className="tour-container">
        {tours.map(tour => {
          return <Tour key={tour.id} tour={tour} />;
        })}
      </section>
    );
  }
}
