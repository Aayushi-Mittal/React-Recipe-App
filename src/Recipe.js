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
        {/* <div className="badges">
          <span className="badge">{props.dishType}</span>
          <span className="badge">{props.cuisineType}</span>
          <span className="badge">{props.mealType}</span>
        </div> */}
        <div>
          <a href={props.url}>
            <button className="btn">Check Recipe</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
