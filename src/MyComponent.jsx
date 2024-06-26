import React, {useState, useEffect, useRef} from 'react'


export const MyComponent = () => {

  const inputRef=useRef(null)
  const inputRef2=useRef(null)

  useEffect(() => {
    console.log("COMPONENT RENDERED")
  })
  

  function handleClick(){
    inputRef.current.focus()
    inputRef.current.style.backgroundColor="yellow"
    inputRef2.current.style.backgroundColor=""
  }
  function handleClick2(){
    inputRef.current.focus()
    inputRef2.current.style.backgroundColor="yellow"
    inputRef.current.style.backgroundColor=""
  }

  return (
    <div>
      <button className='button' onClick={handleClick}>
        Click me!
      </button>
      <input ref={inputRef}/>

      <button className='button' onClick={handleClick2}>
        Click me2!
      </button>
      <input ref={inputRef2}/>
    </div>
  )
}
