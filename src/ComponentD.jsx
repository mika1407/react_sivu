import React, {useContext} from 'react'
import { UserContext } from './ComponentA'

export const ComponentD = () => {

  const user = useContext(UserContext)

  return (
    <div className='box'>
      <h1>ComponentD</h1>
      <h2>{`Bye ${user}. You used useContext() hook`}</h2>
    </div>
  )
}
