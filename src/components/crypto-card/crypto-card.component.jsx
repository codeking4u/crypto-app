import millify from "millify";

import "./crypto-card.styles.scss";

const CryptoCard = ({ details }) => {
  const { rank, name, iconUrl, price, marketCap, change } = details;
  return (
    <div className="crypto-card">
      <div className="crypto-card__header">
        <span className="title">{`${rank}. ${name}`}</span>
        <img className="icon" src={iconUrl} alt="crypto-img" />
      </div>
      <div className="crypto-card__body">
        <div className="price">{`Price: ${millify(price)}`}</div>
        <div className="market">{`Market: ${millify(marketCap)}`}</div>
        <div className="daily-change">{`Daily Change: ${millify(change)}`}</div>
      </div>
    </div>
  );
};

export default CryptoCard;
