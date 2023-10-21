import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-scroll";

const Hero = () => {
  const data = useSelector((state) => state.cryptodata.data); // Access the correct slice of state

  return (
    <section id="home" className="hero-section section-small-margin">
      <div className="container">
        <div className="hero-container">
          <div className="hero-text">
            <img
              src="https://coindom-crypto-search.vercel.app/static/media/bitcoin.e146d46fb598ae0d8f43.png"
              alt=""
            />
            <h1 style={{ color: "#fff" }}>TRACK AND TRADE</h1>
            <br />
            <h1 className="gradient-text">CRYPTO CURRENCIES</h1>
            <img
              src="https://coindom-crypto-search.vercel.app/static/media/ethereum.c6cffe78f0c6abc85da9.png"
              alt=""
            />
          </div>
          <div className="hero-crypto">
            {data.slice(0, 4).map((crypto, index) => (
              <div key={index}>
                <img src={crypto.image} alt={crypto.name} />
                <h1>{crypto.name}</h1>
                {crypto.price_change_percentage_24h > 0 ? (
                  <span style={{ color: "#0ecb81    " }}>
                    +{crypto.price_change_percentage_24h.toFixed(2)}%
                  </span>
                ) : (
                  <span style={{ color: "red" }}>
                    {crypto.price_change_percentage_24h.toFixed(2)}%
                  </span>
                )}
              </div>
            ))}
          </div>
          <Link to="market" smooth={true} duration={500}>
            <a id="hero-btn" href="#" className="footer-btn">
              See Prices
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
