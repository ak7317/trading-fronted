import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 text-center">
          We pioneered the discount broking model in India
          <br />
          Now, we are breaking ground with our technology.
        </h1>
      </div>

      <div
        className="row p-5 mt-5 border-top text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-5">
          <p>
           We kick-started operations on the 15th of August, 2025 with the goal
           of breaking all barriers that traders and investors face in India in
           terms of cost, support, and technology. We named the company
           TradeNova, a combination of "Trade" and "Nova"—the Latin word for 
           new, representing a fresh and bright era for the trading community.
          </p>
          <p>
    Today, our modern MERN-based architecture and user-centric design have 
    made TradeNova a standout platform for seamless trading simulations.
  </p>
  <p>
    Our ecosystem is built to handle high-frequency data, providing users 
    with real-time insights and a robust environment to master the 
    Indian capital markets.
  </p>
</div>
<div className="col-6 p-5">
  <p>
    In addition, we focus on financial literacy through integrated 
    learning modules designed to empower the next generation of 
    retail investors.
  </p>
  <p>
    <a href="/NovaLabs" style={{ textDecoration: "none" }}>
      NovaLabs
    </a>
    , our internal R&D initiative, continuously explores advanced 
    technologies like AI and predictive analytics to enhance the 
    trading experience.
  </p>
  <p>
    And yet, we are always innovating. Follow our development journey 
    on GitHub or check out the latest technical breakthroughs on our 
    engineering blog.
  </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;