import millify from "millify";

import { useGetCryptosQuery } from "../../services/crypto-api";

import "./global-stats.styles.scss";

const GlobalStats = () => {
  const { isFetching, data } = useGetCryptosQuery();

  if (isFetching) return "Loading...";

  const globalStats = data?.data?.stats;

  return (
    <div className="g-stats">
      <div className="g-stats__title page-header">Global Crypto Stats</div>
      <div className="stats">
        <div className="stats-item">
          <div className="stats-item__title">Total Cryptocurrencies</div>
          <div className="stats-item__count">{millify(globalStats.total)}</div>
        </div>
        <div className="stats-item">
          <div className="stats-item__title">Total Exchanges</div>
          <div className="stats-item__count">
            {millify(globalStats.totalExchanges)}
          </div>
        </div>
        <div className="stats-item">
          <div className="stats-item__title">Total Market Cap</div>
          <div className="stats-item__count">
            {millify(globalStats.totalMarketCap)}
          </div>
        </div>
        <div className="stats-item">
          <div className="stats-item__title">Total 24h Volume</div>
          <div className="stats-item__count">
            {millify(globalStats.total24hVolume)}
          </div>
        </div>
        <div className="stats-item">
          <div className="stats-item__title">Total Market</div>
          <div className="stats-item__count">
            {millify(globalStats.totalMarkets)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalStats;
