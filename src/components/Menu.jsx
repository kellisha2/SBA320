import React, { useState } from 'react'
import Ingredients from './Ingredients'

function Menu(props) {
    console.log(props.breadChoices);

    const [item, setItem] = useState({
        breads: "",
        meats: "",
        cheeses: "",
        toppings: "",
        condiments: ""
    })


    function submitOrder (){
        props.setCart([...props.cart, item]);
        alert("Item added to the cart");
    }


    return (
        <div className='category-selection'>
            <h2>Select from every category</h2>

            <div className='bread-selection'>
                <h3>Select a Bread:</h3>
                <ul className="breads">
                    {props.breadChoices.map((bread, index) => (
                        <Ingredients key={index} category="breads" item={bread}
                            name={bread.name} 
                            price={bread.price}
                            setItem={setItem}
                        />
                    ))}
                </ul>
            </div>

            <div className='meat-selection'>
                <h3>Select a Meat: </h3>
                <ul className="meats">
                    {props.meatChoices.map((meat, index) => (
                        <Ingredients key={index} category="meats" item={meat}
                            name={meat.name}
                            price={meat.price}
                            setItem={setItem}
                        />
                    ))}
                </ul>
            </div>

            <div className='cheese-selection'>
                <h3>Select a Cheese: </h3>
                <ul className="cheeses">
                    {props.cheeseChoices.map((cheese, index) => (
                        <Ingredients key={index} category="cheeses" item={cheese}
                            name={cheese.name}
                            price={cheese.price}
                            setItem={setItem}
                        />
                    ))}
                </ul>
            </div>

            <div className='topping-selection'>
                <h3>Select toppings:</h3>
                <ul className="toppings">
                    {props.toppingChoices.map((topping, index) => (
                        <Ingredients key={index} category="toppings" item={topping}
                            name={topping.name}
                            price={topping.price}
                            setItem={setItem}
                        />
                    ))}
                </ul>
            </div>

            <div className='condiment-selection'>
                <h3>Select condiments:</h3>
                <ul className="condiments">
                    {props.condimentChoices.map((condiment, index) => (
                        <Ingredients key={index} category="condiments" item={condiment}
                            name={condiment.name}
                            price={condiment.price}
                            setItem={setItem}
                        />
                    ))}
                </ul>
            </div>

            <button className='order-btn' onClick={() => submitOrder()}>Order</button>
        </div>

    )
}



export default Menu;