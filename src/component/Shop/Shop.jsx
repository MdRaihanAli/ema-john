import React from 'react'
import { useEffect, useState } from 'react'
import SingleData from '../SingleData/SingleData';
import './Shop.css'

function Shop() {
    const [data, setData] = useState([]);
    const [card, setCart] = useState([])

    const addToCart=(props)=>{
        setCart([...card,props]);
        
    }

    useEffect(()=>{
        console.log(card);
    },[card])

    useEffect(() => {
        const loadData = async () => {
            let res = await fetch('products.json')
            let data = await res.json()
            setData(data);
        }
        loadData()
    }, []);
    // console.log(data);
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    data.map(singlilData =><SingleData key={singlilData.id} addCard={addToCart} item={singlilData}></SingleData>)
                }
            </div>
            <div className="card-container">
                <h1>card : {card.length}</h1>
            </div>
        </div>
    )
}

export default Shop