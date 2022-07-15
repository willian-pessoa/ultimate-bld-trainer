import React from "react";
import "./home.styles.scss";

function HomePage() {
  return (
    <div className="home-page-container">
      <h4>Welcome to The Comms Reviewer</h4>
      <div className="description-home-page">
        <p>
          A web app to help you review commutators and stick them well in memory.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
