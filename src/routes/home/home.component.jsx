import { useGetCryptosQuery } from "../../services/crypto-api";

import "./home.styles.scss";

const Home = () => {
  const { isFetching, data } = useGetCryptosQuery();

  if (isFetching) return "Loading...";

  const globalStats = data?.data?.stats;

  console.log(data);
  return (
    <div className="home-container">
      <div className="g-stats">
        <div className="g-stats__title page-header">Global Crypto Stats</div>
        <div className="stats">
          <div className="stats-item">
            <div className="stats-item__title">Total Cryptocurrencies</div>
            <div className="stats-item__count">{globalStats.total}</div>
          </div>
          <div className="stats-item">
            <div className="stats-item__title">Total Exchanges</div>
            <div className="stats-item__count">
              {globalStats.totalExchanges}
            </div>
          </div>
          <div className="stats-item">
            <div className="stats-item__title">Total Market Cap</div>
            <div className="stats-item__count">
              {globalStats.totalMarketCap}
            </div>
          </div>
          <div className="stats-item">
            <div className="stats-item__title">Total 24h Volume</div>
            <div className="stats-item__count">
              {globalStats.total24hVolume}
            </div>
          </div>
          <div className="stats-item">
            <div className="stats-item__title">Total Market</div>
            <div className="stats-item__count">{globalStats.totalMarkets}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
