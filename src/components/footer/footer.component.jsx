import { Link } from "react-router-dom";

import "./footer.styles.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__title">CryptoWorld</div>
      <div className="footer__links">
        <Link className="footer__link" to="/">
          Home
        </Link>
        <Link className="footer__link" to="/exchanges">
          Exchanges
        </Link>
        <Link className="footer__link" to="/news">
          News
        </Link>
      </div>
      <div className="footer__end"> &#169; 2023 - All Rights Reserved.</div>
    </div>
  );
};

export default Footer;
