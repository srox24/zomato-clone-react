import React from 'react'
import "../styles/delivery.css"
import Filters from './Filters'

const deliveryFilters =[
  {
    id: 1,
    icon : <i class="fi fi-rr-settings-sliders center"></i>,
    title : Filters,
},
{
  id: 2,
  title : "Rating 4.0+",
},
{
  id: 3,
  title : "Safe and Hygienic",
},
{
  id: 4,
  title : "Pure Veg",
},
{
  id: 5,
  title : "Delivery Time",
  icon : <i className='fi fi-rr-apps-sort center'></i>
},
{
  id: 6,
  title : "Great Offers",
},
];

const Delivery = () => {
  return (
    <div className='max--width'>
      <Filters filterList={deliveryFilters}/>
    </div>
  )
}

export default Delivery