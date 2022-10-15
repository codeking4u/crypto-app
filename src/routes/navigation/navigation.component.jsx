import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import logo from "../../assets/cryptocurrency.png";
import Footer from "../../components/footer/footer.component";

import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="nav-container">
        <div className="logo-container">
          <img src={logo} alt="" />
          <Link className="company-name" to="/">
            CryptoWorld
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </div>
      </div>
      <div className="main">
        <Outlet />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Navigation;
