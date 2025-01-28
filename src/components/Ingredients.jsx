import React from 'react'

function ingredients(props) {
  return (
<div className="ingredients">
    <li className="">
        <label htmlFor={props.bread}>
            <input type="radio" name={props.category} id={props.bread} />
            <h4>{props.name}</h4>
            <span>{props.price}</span>
        </label>
    </li>
     {/* <li className="">
            <label htmlFor={props.meat}>
            <input type="radio" name={props.category} id={props.meat} />
            <h4>{props.name}</h4>
            <span>{props.price}</span>
            </label>
        </li>

        <li className="">
            <label htmlFor={props.cheese}>
            <input type="radio" name={props.category} id={props.cheese} />
            {props.cheese}
            </label>
        </li> */}
   
</div>
)}

export default ingredients