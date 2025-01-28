import React from 'react'
import Ingredients from './Ingredients'

function Menu(props) {
    console.log(props.breadChoices)
  return (
    <div>
        <h2>Select from every category:</h2>

    <div>
        <h2>Select a Bread:</h2>
        <br/>
        <ul className="breads">
            {props.breadChoices.map((bread, index) =>(
                <Ingredients key={index} category="breads" bread={bread} />
            ))}
        </ul>
    </div>

    <div><h2>Select a Meat: </h2>
        <br/>
        <ul className="meats">
            {props.meatChoices.map((meat, index) =>(
                <Ingredients key={index} category="meat" meat={meat} />
            ))}
        </ul>
    
    </div>

    <div><h2>Select a Cheese: </h2></div>

    <div><h2>Select toppings:</h2></div>
</div>
    
)}

  

export default Menu