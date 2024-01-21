import "../scss/house.scss";

function House ({ name, description, picture }) {
    return (
        <div className="house-card">
            <h3>{name}</h3>
            <p>{description}</p>
            <img className="house-img" src={picture} alt={name} />
        </div>
    )
}
  
  export default House;