import { useEffect, useState } from "react";
import { API } from "../../src/components/axios/api.js";
import Character from "./Character";
import "../scss/characterlist.scss";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    API.get("character")
      .then((response) => setCharacters(response.data))
      .catch((error) => console.error(error));
  }, []);

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input className="seeker-character"
        type="text"
        placeholder="Buscar personajes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="characters">
        {filteredCharacters.map((character, index) => (
          <Character
            key={index}
            name={character.name}
            description={character.description}
            actor={character.actor}
            picture={character.picture}
          />
        ))}
      </div>
    </div>
  );
};

export default CharacterList;


