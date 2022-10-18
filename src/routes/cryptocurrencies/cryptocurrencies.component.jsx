import { useState, useEffect } from "react";

import CryptoCard from "../../components/crypto-card/crypto-card.component";
import { useGetCryptosQuery } from "../../services/crypto-api";

import { ReactComponent as SearchIcon } from "../../assets/search.svg";

import "./cryptocurrencies.styles.scss";

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const setSerachval = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const filteredData = data?.data?.coins.filter((coin) => {
      return coin.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setCryptos(filteredData);
  }, [data, searchTerm]);

  if (isFetching) return "Loading...";

  return (
    <>
      {!simplified && (
        <div className="crypto-search">
          <SearchIcon className="search-icon" />
          <input
            type="text"
            placeholder="Search Cryptocurrency"
            className="searchbar"
            onChange={setSerachval}
          />
        </div>
      )}
      <div className="cryptos-container">
        {cryptos?.map((crypto) => {
          return <CryptoCard key={crypto.uuid} details={crypto} />;
        })}
      </div>
    </>
  );
};

export default Cryptocurrencies;
