import React, {useState} from 'react'
import './Services.css';

export const Services = () => {

  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);
  const [count, setCount] = useState(0);
  const [car, setCar] = useState({year: new Date().getFullYear(), make: "BMW", model: "120"})

  const updateName = () => {
    setName("Mika");
  }

  const incrementAge = () => {
    setAge(age +1);
  }

  const toggleEmployedStatus = () => {
    setIsEmployed(!isEmployed);
  }

  const increment = () => {
    setCount(c => c +1)     // updater function
  }

  const decrement = () => {
    setCount(count -1)
  }

  const reset = () => {
    setCount(0)
  }

  function handleYearChange(event){
    setCar(c => ({...c, year: event.target.value}))
  }
  function handleMakeChange(event){
    setCar(c => ({...c, make: event.target.value}))
  }
  function handleModelChange(event){
    setCar(c => ({...c, model: event.target.value}))
  }

  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"])

  function handleAddFood(){
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value ="";

    setFoods(f => [...f, newFood])
  }

  function handleRemoveFood(index){
    setFoods(foods.filter((_, i) => i !== index))
  }

  return (
    <div className="services">
      <p className="info">Name: {name}</p>
      <button className="btn" onClick={updateName}>Set Name</button>

      <p className="info">Age: {age}</p>
      <button className="btn" onClick={incrementAge}>Increment Age</button>

      <p className="info">Is employed: {isEmployed ? "Yes" : "No"}</p>
      <button className="btn" onClick={toggleEmployedStatus}>Toggle status</button>
      
      <br />
      
      <p className="info">Counter</p>
      <div className='counter-container'>
            <p className='count-display'>{count}</p>
            <button className='counter-btn' onClick={decrement}>Decrement</button>
            <button className='counter-btn' onClick={reset}>Reset</button>
            <button className='counter-btn' onClick={increment}>Increment</button>
      </div>

      <div className='car-container'>
        <p>Your favourite car is: {car.year} {car.make} {car.model}</p>

        <input type='number' value={car.year} onChange={handleYearChange}/><br/>
        <input type='text' value={car.make} onChange={handleMakeChange}/><br/>
        <input type='text' value={car.model} onChange={handleModelChange}/><br/>
      </div>

      <div className='foods'>
        <h2>List of Food</h2>
        <ul>
          {foods.map((food, index) => 
          <li key={index} onClick={() => handleRemoveFood(index)}>
          {food}</li>)}
        </ul>
        <input type='text' id='foodInput' placeholder='Enter food name' />
        <button onClick={handleAddFood}>Add Food</button>
      </div>
    </div>
  )
}
