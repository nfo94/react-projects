import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import TourList from "./components/TourList/TourList";

class App extends React.Component {
  render() {
    return (
      <div>
        <header className="header">
          <Navbar />
        </header>
        <main className="main">
          <TourList />
        </main>
      </div>
    );
  }
}

export default App;
