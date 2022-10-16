import { useState } from "react";

import CryptoCard from "../../components/crypto-card/crypto-card.component";
import { useGetCryptosQuery } from "../../services/crypto-api";

import "./cryptocurrencies.styles.scss";

const Cryptocurrencies = () => {
  const { data, isFetching } = useGetCryptosQuery();
  const [cryptos, setCryptos] = useState(data?.data?.coins);

  if (isFetching) return "Loading...";
  console.log(cryptos);
  return (
    <div className="cryptos-container">
      {cryptos?.map((crypto) => {
        return <CryptoCard details={crypto} />;
      })}
    </div>
  );
};

export default Cryptocurrencies;
