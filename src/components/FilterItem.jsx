import React from 'react'
import "../styles/filterItem.css"

const FilterItem = ({filter}) => {
  return (
    <div className='filter-items'>
        {filter.icon && filter.icon}
        <div className='filter-name'>
            {filter.title}
        </div>
    </div>
  )
}

export default FilterItem