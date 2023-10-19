import React from "react";

const JoinUs = () => {
  return (
    <section id="join-us" className="join-us-section section-large-margin">
      <div className="container">
        <div className="join-us-container">
          <div className="join-us-text">
            <img
              src="https://coindom-crypto-search.vercel.app/static/media/bitcoin.e146d46fb598ae0d8f43.png"
              alt=""
            />
            <h1 style={{ color: "white" }}>JOIN US VIA</h1>
            <br></br>
            <h1 className="gradient-text">DISCORD</h1>
            <img src="https://coindom-crypto-search.vercel.app/static/media/ethereum.c6cffe78f0c6abc85da9.png"></img>
          </div>
          <p>Invest and manage all your crypto in one place</p>
          <a className="footer-btn" href="http://">
            Join via Discord
          </a>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
