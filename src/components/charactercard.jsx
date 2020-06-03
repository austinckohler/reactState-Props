import React from "react";
function CharacterCard(props) {
  return (
    <div className="character-card">
      <h2>{props.character.name}</h2>
      <img src={props.character.image} alt="rm character photos" />
      <ul>
        <li>{props.character.status}</li>
        <li>{props.character.species}</li>
      </ul>
    </div>
  );
}

export default CharacterCard;
