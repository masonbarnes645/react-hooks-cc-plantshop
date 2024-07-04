import React, { useEffect, useRef, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";



const database = "http://localhost:6001/plants/"



function PlantPage() {
  const [plants, setPlants] = useState([])
  const OGPlants = useRef([])
  
  const handleDelete = (plantId) => {
    fetch(database + plantId, {
      method: 'DELETE',
    })
      .then(res => setPlants(current => current.filter(plant => plant.id !== plantId)))
      .catch(console.log())
  }

  const handleSearchReset = () => {setPlants(OGPlants.current)}
  const handleSearch = (query) => {
  
    setPlants (plants => plants.filter(plant => (plant.name.toLowerCase()).includes(query.toLowerCase())))
  }
  const handlePost = (newPlant) => setPlants(current => [...current, newPlant])

  



  
  
  useEffect(() => {
    fetch(database)
      .then(res => res.json())
      .then(plantData => {
        setPlants(plantData) 
        OGPlants.current  = plantData
  })
      .catch(console.log)
  }, []);


  return (
    <main>
      <NewPlantForm database={database} handlePost={handlePost} />
      <Search handleSearch={handleSearch} handleSearchReset={handleSearchReset} />
      <PlantList plants={plants} handleDelete={handleDelete}/>
    </main>
  );
}



export default PlantPage;
