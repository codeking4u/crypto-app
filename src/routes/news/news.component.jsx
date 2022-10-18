import { useEffect } from "react";
import { useGetNewsQuery } from "../../services/crypto-news-api";

const News = () => {
  const { data, isFetching } = useGetNewsQuery();

  console.log(data);
  return (
    <div className="news-container">sdf{process.env.REACT_APP_NEWSKEY}</div>
  );
};

export default News;
