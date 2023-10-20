import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../store/store"; // Import the setData action
import { Link } from "react-router-dom";

const Table = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cryptodata.data); // Access the correct slice of state

  const handleApiCall = async () => {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      );
      console.log("response", response.data);
      dispatch(setData(response.data)); // Dispatch the setData action with the response data
    } catch (error) {
      console.error("API request failed:", error);
    }
  };

  useEffect(() => {
    handleApiCall();
  }, []);

  return (
    <section id="market" className="section-small-margin">
      <div className="container">
        <h1>Market Update</h1>
        <div className="crypto-table">
          <div className="table-header">
            <div className="table-header-item">Coin</div>
            <div className="table-header-item">Price</div>
            <div className="table-header-item">24h Change</div>
            <div className="table-header-item">Market Cap</div>
          </div>

          <div className="crypto-list">
            {data.map((crypto, index) => (
              <Link
                style={{ textDecoration: "none" }}
                to={`/coin/${crypto.id}`}
              >
                <a className="crypto-coin" key={index}>
                  <span>
                    <img src={crypto.image} alt={crypto.name}></img>
                    {crypto.name}
                  </span>
                  <p>${crypto.current_price}</p>
                  <p
                    style={
                      crypto.price_change_percentage_24h > 0
                        ? { color: "#0ecb81" }
                        : { color: "red" }
                    }
                  >
                    {crypto.price_change_percentage_24h.toFixed(2)}%
                  </p>

                  <p>${crypto.market_cap}</p>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Table;
