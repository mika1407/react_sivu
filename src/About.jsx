import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import omaKuva from './assets/omaKuva.jpg';
import {MyComponent} from './MyComponent'
import { Stopwatch } from './Stopwatch';

function About() {

  const handleClick = (e) => e.target.textContent = "Press the picture and it will disappear"
  const handleImgClick = (e) => e.target.style.display = "none"

  const [name, setName] = useState("Guest")
  const [quantity, setQuantity] = useState(1)
  const [comment, setComment] = useState("")
  const [payment, setPayment] = useState("")
  const [shipping, setShipping] = useState("Delivery")

  function handleNameChange(event){
      setName(event.target.value)
  }

  function handleQuantityChange(event){
      setQuantity(event.target.value)
  }

  function handleCommentChange(event){
      setComment(event.target.value)
  }

  function handlePaymentChange(event){
      setPayment(event.target.value)
  }

  function handleShippingChange(event){
      setShipping(event.target.value)
  }

    const styles = {
    display: "inline-block",
    padding: "10px 20px",
    margin: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px",
    marginTop: "10px",
    border: "none",
    cursor: "pointer"
  }

  return (
    <div className="page-container">
      <div className='about'>
        <h2>About Us</h2>
        <p>This is the About page of the website.</p>
        <Stopwatch />
        <button style={styles} onClick={(e) => handleClick(e)}>Click me!</button>
        <img onClick={(e) =>handleImgClick(e)} src={omaKuva} alt="oma kuva"></img>
        <Link to="/" className="button">Go back to Home</Link>
        <MyComponent />

        <input value={name} onChange={handleNameChange} />
        <p>Name: {name}</p>
        <input value={quantity} onChange={handleQuantityChange} type='number'/>
        <p>Quantity: {quantity}</p>

        <textarea value={comment} onChange={handleCommentChange} 
          placeholder='Enter delivery instructions' />
        <p>Comment: {comment}</p>

        <select value={payment} onChange={handlePaymentChange}>
            <option value="">Select an option</option>
            <option value="Visa">Visa</option>
            <option value="Mastercard">Mastercard</option>
            <option value="Giftcard">Giftcard</option>
        </select>
        <p>Payment: {payment}</p>

        <label>
            <input type="radio" value="Pick Up" 
            checked={shipping === "Pick Up"} onChange={handleShippingChange}/>
            Pick Up
        </label>
        <label>
            <input type="radio" value="Delivery" 
            checked={shipping === "Delivery"} onChange={handleShippingChange}/>
            Delivery
        </label><br />
        <p>Shipping: {shipping}</p>
      </div>
    </div>
  );
}

export default About;
