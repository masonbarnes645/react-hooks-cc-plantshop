import React, { useState } from "react";
//post plant


function NewPlantForm({ database, handlePost }) {
  const initialState = {
    name:'',
    image:'',
    price: 0,
  }
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  
  
  const [formData, setFormData] = useState(initialState)
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPlant = {
      name: formData.name,
      image: formData.image,
      price: formData.price,
    }
  
 
  
  fetch(database, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newPlant),
  })
  .then ((res) => res.json())
  .then((newPlant) => {
    handlePost(newPlant)
    setFormData(initialState)
  })
  .catch((error) => console.log(error));


  }

  
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" onChange={handleChange}/>
        <input type="text" name="image" placeholder="Image URL"onChange={handleChange} />
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={handleChange}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
