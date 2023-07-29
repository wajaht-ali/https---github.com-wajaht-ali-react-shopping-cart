import React from 'react'
import img1 from '../assets/tech1.jpg';
import { AiFillDelete } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './Home';
const Cart = () => {

    const { cartItems } = useSelector((state) => state.cart);
    const { subTotal, tax, shipping, total} = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const increment = (id) => {
        dispatch({
            type: "addToCart",
            payload: {id},
        })
        dispatch({ type: 'calculatePrice' })
    }
    const decrement = (id) => {
        dispatch({
            type: 'decrement',
            payload: id,
        })
        dispatch({ type: 'calculatePrice' })
    }
    const deleteHandler = (id) => {
        dispatch({
            type: 'deleteFromCart',
            payload: id,
        })
        dispatch({ type: 'calculatePrice' })
    }


    return (
        <div className='cart'>
            <main>
                {
                    cartItems.length > 0 ? (
                        cartItems.map((i) => {
                            return (

                                <CardItems
                                    imgSrc={img1}
                                    name={i.name}
                                    price={i.price}
                                    qty={i.quantity}
                                    id={i.id}
                                    key={i.id}
                                    decrement={decrement}
                                    increment={increment}
                                    deleteHandler={deleteHandler}
                                />
                            )
                        })
                    ) : (<h1>No Items Yet</h1>)
                }
            </main>
            <aside>
                <h2>Subtotal: ${subTotal}</h2>
                <h2>Shipping: ${shipping}</h2>
                <h2>Tax: ${tax}</h2>
                <h2>Toatal: ${total}</h2>
            </aside>
        </div>
    )
}

const CardItems = ({ imgSrc, name, price, qty, decrement, increment, deleteHandler, id }) => {
    return (
        <div className="cartItems">
            <img src={imgSrc} alt={name} />
            <article>
                <h3>{name}</h3>
                <p>${price}</p>
            </article>
            <div>
                <button onClick={() => increment(id)}>+</button>
                <p>{qty}</p>
                <button onClick={() => decrement(id)}>-</button>
            </div>
            <AiFillDelete onClick={() => deleteHandler(id)} />
        </div >
    );
}

export default Cart