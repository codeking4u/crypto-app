import { Link } from "react-router-dom";

import GlobalStats from "../../components/global-stats/global-stats.component";
import Cryptocurrencies from "../cryptocurrencies/cryptocurrencies.component";
import News from "../news/news.component";

import "./home.styles.scss";

const Home = () => {
  return (
    <div className="home-container">
      <GlobalStats />
      <div className="top-ten">
        <div className="page-header">Top 10 Cryptocurrencies in the world</div>
        <div className="show-more">
          <Link to="/cryptocurrencies">Show more</Link>
        </div>
      </div>
      <Cryptocurrencies simplified />
      <div className="latest-news">
        <div className="page-header">Latest News</div>
        <div className="show-more">
          <Link to="/news">Show more</Link>
        </div>
      </div>
      <News simplified />
    </div>
  );
};

export default Home;
