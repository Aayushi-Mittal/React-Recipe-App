const Card = (props) => {
  return (
    <div>
      <div>
        <img src={props.image} alt={props.title} />
      </div>
      <div>
        <a href="props.url">
          <h2>{props.title}</h2>
        </a>
        {/* <ul className="badges">
          <li className="badge">{props.dishType}</li>
          <li className="badge">{props.mealType}</li>
          <li className="badge">{props.cuisineType}</li>
        </ul> */}
        <a href={props.url}>
          <button>See More...</button>
        </a>
      </div>
    </div>
  );
};

export default Card;
