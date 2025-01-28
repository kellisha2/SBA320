import React from 'react'
import Ingredients from './Ingredients'

function Menu(props) {
    console.log(props.breadChoices)
  return (
    <div>
        <h2>Select from every category:</h2>

    <div>
        <h3>Select a Bread:</h3>
        <ul className="breads">
            {props.breadChoices.map((bread, index) =>(
                <Ingredients key={index} category="breads" bread={bread}
                name={bread.name}
                price = {bread.price}
                />
            ))}
        </ul>
    </div>

    <div><h3>Select a Meat: </h3>
        <ul className="meats">
            {props.meatChoices.map((meat, index) =>(
                <Ingredients key={index} category="meats" meat={meat} 
                name={meat.name}
                price = {meat.price}

                />
            ))}
        </ul>
    
    </div>

      <div>
        <h3>Select a Cheese: </h3>
        <ul className="cheeses">
            {props.cheeseChoices.map((cheese, index) =>(
                <Ingredients key={index} category="cheeses" cheese={cheese} 
                name={cheese.name}
                price = {cheese.price}
                />
            ))}
        </ul> 
        
     </div>

    <div>
        <h3>Select toppings:</h3>
        <ul className="cheeses">
            {props.toppingChoices.map((topping, index) =>(
                <Ingredients key={index} category="cheeses" topping={topping} 
                name={topping.name}
                price = {topping.price}
                />
            ))}
        </ul> 
    </div> 
</div> 
    
 )}

  

export default Menu