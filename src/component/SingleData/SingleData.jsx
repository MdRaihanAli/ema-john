import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './SingleData.css'

function SingleData(props) {
    const {img,name, price, seller, ratings   }=props.item

  const addToCart = props.addCard

  return (
    <div className='item'>
        <img className='imgWid' src={img} alt="" />
        <div>
            <h5 >{name}</h5>
            <p > Price : ${price}</p>

            <div className='rating'>
                <p>Manufacturer : {seller}</p>
                <p>Rating : {ratings} Star</p>
            </div>
        </div>
        <button onClick={()=>addToCart(props.item)}> Add to Card <FontAwesomeIcon icon={faShoppingCart} /></button>
    </div>
  )
}

export default SingleData