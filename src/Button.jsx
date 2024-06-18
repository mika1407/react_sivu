import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Button = () => {
  const navigate = useNavigate();

  const styles = {
    width: "120px"
  }

  const handleClick = () => { 
    navigate('/about'); // Navigate to the About page
  };

  return (
    <button style={styles} className='button' onClick={handleClick}>About page</button>
  )
}
