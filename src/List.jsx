import React from 'react'
import PropTypes from 'prop-types';

export const List = ({ category = "Category", items = [] }) => {

  const itemList = items.slice();  // Tee kopio items-listasta
  itemList.sort((a, b) => b.calories - a.calories);  // Lajittele kalorien mukaan
 
    const listItems = itemList.map(item => <li key={item.id}>
                                                  {item.name}: &nbsp;
                                                  <b>{item.calories}</b></li>)

  return (<>
     <div className="list-container">
      <h3 className='list-category'>{category}</h3>
      <ol className='list-items'>{listItems}</ol>
     </div>
    </>
  )
}

List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      calories: PropTypes.number.isRequired
    })
  )
}