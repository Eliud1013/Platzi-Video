import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "../assets/styles/components/CarouselItem.scss";
import playIcon from "../assets/static/play-icon.png";
import plusIcon from "../assets/static/plus-icon.png";
import deleteIcon from "../assets/static/deleteicon.png";

import { setFavorite, deleteFavorite } from "../actions/actions.js";

const CarouselItem = (props) => {
  const { cover, title, year, contentRating, duration, id, isList } = props;
  const handleSetFavorite = () => {
    props.setFavorite({
      cover,
      title,
      year,
      contentRating,
      duration,
      id,
    });
  };
  const handleDeleteFavorite = (itemid) => {
    props.deleteFavorite(itemid);
  };
  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title} />
      <div className="carousel-item__details">
        <div>
          <Link to={`/video/${id}`}>
            <img
              className="carousel-item__details--img"
              src={playIcon}
              alt="Play Icon"
            />
          </Link>

          {isList ? (
            <img
              className="carousel-item__details--img"
              src={deleteIcon}
              alt="Delete icon"
              onClick={() => handleDeleteFavorite(id)}
            />
          ) : (
            <img
              className="carousel-item__details--img"
              src={plusIcon}
              alt="Plus Icon"
              onClick={handleSetFavorite}
            />
          )}
        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
