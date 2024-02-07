import "./news-item.styles.scss";

const NewsItem = ({ data }) => {
  return (
    <div className="news-item-wrapper">
      <div className="news-img-wr">
        <img
          className="news-img"
          src={data.image?.thumbnail?.contentUrl}
          alt=""
        />
      </div>
      <div className="news-title">{data.name}</div>
    </div>
  );
};

export default NewsItem;
