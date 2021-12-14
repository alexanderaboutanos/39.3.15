/** @format */

import "./Pokecard.css";

const Pokecard = (props) => {
  const imgURL =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
  return (
    <div className="Pokecard">
      <h3 className="Pokecard-title">{props.name}</h3>
      <img src={imgURL + props.id + ".png"}></img>
      <p>Type: {props.type}</p>
      <p>EXP: {props.base_experience}</p>
    </div>
  );
};

export default Pokecard;
