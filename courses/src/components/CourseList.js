import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CourseItem from './CourseItem';
import { clearCart } from '../control/cartSlice';

function CourseList() {
    const dispatch = useDispatch();
    const {cartItems, quantity, total} = useSelector((store) => store.cart); 
  return (
    <>
    {quantity < 1 ? (   
        <section className='cart'>
        <header>
        <h2>Basket</h2>
        <h4>Empty</h4>
        </header>
        </section>
    ):(
        <section className='cart'>
        <header>
        <h2>My Cart</h2>
        </header>
        <div>
            {cartItems.map((item) => {
                return <CourseItem key={item.id} {...item}/>
            })}
        </div>
        <footer>
            <hr/>
            <div>
                <h4>Total Price <span>{total} $</span></h4>
            </div>
            <button className='cartClearButton' onClick={() =>dispatch(clearCart())}>Clean</button>
        </footer>
        </section>
    )}
    </>
  )
}

export default CourseList