import PropTypes from 'prop-types'

export const Student = ({ name = 'Default Name', age = 0, isStudent= false }) => {
  return (
    <div className='student'>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Student: {isStudent ? "Yes" : "No"}</p>
    </div>
  )
}
Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool
}
