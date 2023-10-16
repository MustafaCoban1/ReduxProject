import React from 'react'
import {BsFillBasketFill} from 'react-icons/bs'
import { useSelector } from 'react-redux/es/hooks/useSelector'


function Navbar() {
    const {quantity} = useSelector((store) => store.cart); 
    console.log(useSelector((store) => store.cart))
  return (
    <nav>
        <div className='navbar'>
            <h3>Courses App</h3>
            <div className='navDiv'>
                <div className='itemsDiv'>
                <p>{quantity}</p>
                </div>
                <BsFillBasketFill className='itemsIcon'/>
            </div>          
        </div>
    </nav>
  )
}

export default Navbar