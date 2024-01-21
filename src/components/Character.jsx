import "../scss/character.scss";

const Character = ({ name, description, actor, picture }) => (
  <div className="character-card">
    <h3>{name}</h3>
    <p>{description}</p>
    <p>Intérprete: {actor}</p>
    <img className="character-img" src={picture} alt={name} />
  </div>
);

export default Character;