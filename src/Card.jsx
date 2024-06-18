

export const Card = (props) => {
  return (
        <div className='card'>
            {props.img && <img className='card-image' src={props.img} alt="profile picture"></img>}
            <h2 className='card-title'>{props.name}</h2>
            <p className='card-text'>{props.do}</p>
        </div>
  )
}
