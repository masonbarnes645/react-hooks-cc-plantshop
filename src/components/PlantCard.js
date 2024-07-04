import React, { useState } from "react";

function PlantCard({ name, image, price, id, handleDelete }) {
  const [buttonState, setButtonState] = useState(true)
  const [editMode, setEditMode] = useState(false)
  const toggleEdit = (current) => setEditMode(!current)
  const handleClick = (current) => setButtonState(!current)
  
  
  
  const [plantPrice, setPlantPrice] = useState(price)
  const priceJSX = <p> Price: {plantPrice} <button onClick={() => toggleEdit(editMode)}>Change Price</button> </p>
  const editPriceJSX = <p>Price:<input type='number' name="name" placeholder="0"onChange={(e) => setPlantPrice(e.target.value)}/><button  onClick={() => toggleEdit(editMode)}>Save New Price </button></p>
  
  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      {editMode ?  editPriceJSX : priceJSX}
      {buttonState ? (
        <button className="primary" onClick={() => handleClick(buttonState)}>In Stock</button>
      ) : (
        <button onClick={() => handleClick(buttonState)}>Out of Stock</button>
      )}
      <button onClick={() => handleDelete(id)}>Remove</button>
    </li>
  );
}

export default PlantCard;
