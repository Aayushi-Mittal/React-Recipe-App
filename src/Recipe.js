import React from "react";
import "./index.css";

const Recipe = (props) => {
  return (
    <div className="card">
      <div className="left">
        <img className="img" src={props.image} alt={props.title} />
      </div>
      <div className="right">
        <a href="props.url">
          <h2>{props.title}</h2>
        </a>
        {/* <ul className="badges">
          <li className="badge">{props.dishType}</li>
          <li className="badge">{props.mealType}</li>
          <li className="badge">{props.cuisineType}</li>
        </ul> */}
        <a href={props.url}>
          <button className="btn">See More...</button>
        </a>
      </div>
    </div>
  );
};

export default Recipe;
