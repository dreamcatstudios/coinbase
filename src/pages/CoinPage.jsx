import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "../components/Navbar";

const CoinPage = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}`
    );
    setData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Function to render the description with clickable links
  const renderDescriptionWithLinks = () => {
    if (!data?.description?.en) return null;

    // Use dangerouslySetInnerHTML to render the description with HTML
    return <p dangerouslySetInnerHTML={{ __html: data?.description?.en }} />;
  };

  return (
    <>
      <Navbar />
      <section>
        <div className="container">
          <div className="coin-content">
            <div className="coin-content__img-side">
              <img src={data?.image?.large} alt="usd-coin" />
              <h2>{data?.name}</h2>
              <p>{`Rank: #${data?.market_cap_rank}`}</p>
            </div>
            <div className="coin-content__text-side">
              <div className="numb">
                <div className="coin-content__text-side__24h">
                  <span>24h Change:</span>
                  {data?.market_data.price_change_percentage_24h > 0 ? (
                    <p style={{ color: "#0ecb81" }}>
                      {" "}
                      +{data?.market_data.price_change_percentage_24h}%{" "}
                    </p>
                  ) : (
                    <p style={{ color: "red" }}>
                      -{data?.market_data.price_change_percentage_24h}%
                    </p>
                  )}
                </div>
                <div className="coin-content__text-side__current">
                  <span>Price:</span>
                  <p className="green-text">
                    ${data?.market_data["current_price"]["usd"]}
                  </p>
                </div>
                <div className="coin-content__text-side__symbol">
                  <p>Symbol:</p>
                  <span>{data?.symbol}</span>
                </div>
              </div>
              <div className="description">{renderDescriptionWithLinks()}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CoinPage;
