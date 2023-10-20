import React from "react";
import Card from "../components/Card";
import "./styles.css";
import Search from "../components/Search";

function Home() {
  return (
    <div className="home-container">
      <h1>HAVA DURUMU</h1>
      <Search />
      <Card />
    </div>
  );
}

export default React.memo(Home);
