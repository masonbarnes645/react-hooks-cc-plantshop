import React from "react";
import PlantCard from "./PlantCard";
//.map <plant/>
function PlantList({ plants, handleDelete}) {
  return (
    <ul className="cards"> {plants.map((plant) => (<PlantCard key={plant.id} {...plant} handleDelete={handleDelete}/>))} </ul>
  );
}

export default PlantList;
