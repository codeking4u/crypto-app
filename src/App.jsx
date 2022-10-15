import React from "react";
import { Switch, Routes, Route, Link } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Exchanges from "./routes/exchanges/exchanges.component";
import Cryptocurrencies from "./routes/cryptocurrencies/cryptocurrencies.component";
import CryptoDetails from "./routes/crypto-details/crypto-details.component";
import News from "./routes/news/news.component";

import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path="/exchanges" element={<Exchanges />} />
        <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
        <Route path="/crypto/:coinId" element={<CryptoDetails />} />
        <Route path="/news" element={<News />} />
      </Route>
    </Routes>
  );
};

export default App;
