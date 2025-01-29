import React from 'react'

const Cart = (props) => {
  return (
    <div className='cart'>
        <ol>
        {props.cart.map((cart, index) => (
            <li className='cart' key={index}>
                <p>Bread: {cart.breads.name} - {cart.breads.price}</p>
                <p>Meat: {cart.meats.name} - {cart.meats.price}</p>
                <p>Cheese: {cart.cheeses.name} - {cart.cheeses.price}</p>
                <p>Topping: {cart.toppings.name} - {cart.toppings.price}</p>
                <p>Condiment: {cart.condiments.name} - {cart.condiments.price}</p>
            </li>
        ))}
        </ol>
    </div>
  )
}

export default Cart