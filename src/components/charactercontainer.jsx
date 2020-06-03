import React from "react";
import CharacterCard from "./charactercard";

function CharacterContainer(props) {
  return (
    <div className="Character-container">
      {props.characters.map((character) => {
        return (
          <CharacterCard
            key={character.id}
            character={character}
            name={character.name}
            image={character.image}
            status={character.status}
            species={character.species}
          />
        );
      })}
    </div>
  );
}

export default CharacterContainer;
