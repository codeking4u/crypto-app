import { useEffect } from "react";
import { useGetNewsQuery } from "../../services/crypto-news-api";

import NewsItem from "../../components/news-item/news-item.component";

import "./news.styles.scss";

const News = ({ simplified }) => {
  const newsCount = simplified ? 10 : 100;
  const { data: newsData, isFetching } = useGetNewsQuery(
    newsCount,
    "cryptoCurrency"
  );
  console.log(newsData);
  if (isFetching) return "Loading...";
  return (
    <div className="news-container">
      {newsData?.value?.map((news, key) => {
        return <NewsItem key={key} data={news} />;
      })}
    </div>
  );
};

export default News;
