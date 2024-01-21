import { useEffect, useState } from "react";
import { API } from "../../src/components/axios/api.js";
import House from "./House";
import "../scss/houselist.scss";

const HouseList = () => {
  const [houses, setHouses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    API.get("house")
      .then((response) => setHouses(response.data))
      .catch((error) => console.error(error));
  }, []);

  const filteredHouses = houses.filter((house) =>
    house.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input className="seeker-houses"
        type="text"
        placeholder="Buscar casas..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="houses">
        {filteredHouses.map((house, index) => (
          <House
            key={index}
            name={house.name}
            description={house.description}
            picture={house.picture}
          />
        ))}
      </div>
    </div>
  );
};

export default HouseList;
