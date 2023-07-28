import React from 'react'
import img1 from '../assets/tech1.jpg';
import { AiFillDelete } from 'react-icons/ai';
const Cart = () => {
    return (
        <div className='cart'>
            <main>
                <CardItem
                    imgSrc={img1}
                    name={"Mac Book"}
                    price={700}
                    qty={1}
                    id="abcdd"
                    />
                <CardItem
                    imgSrc={img1}
                    name={"Mac Book"}
                    price={700}
                    qty={1}
                    id="abcdd"
                    />
                <CardItem
                    imgSrc={img1}
                    name={"Mac Book"}
                    price={700}
                    qty={1}
                    id="abcdd"
                    />
                <CardItem
                    imgSrc={img1}
                    name={"Mac Book"}
                    price={700}
                    qty={1}
                    id="abcdd"
                    />
            </main>
            
            <aside>
                <h2>Subtotal: ${2000}</h2>
                <h2>Shipping: ${200}</h2>
                <h2>Tax: ${20}</h2>
                <h2>Toatal: ${2200}</h2>
            </aside>
        </div>
    )
}

const CardItem = ({ imgSrc, name, price, qty, decrement, increment, deleteHandler, id }) => {
    return(
        <div className="cartItem">
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