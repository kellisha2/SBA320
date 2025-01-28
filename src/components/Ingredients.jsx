import React from 'react'

function ingredients(props) {
  return (
<div className="ingredients">
    <li className="">
        <label htmlFor={props.bread}>
            <input type="radio" name={props.category} id={props.bread} />
            {props.bread}
        </label>
    </li>
        <li className="">
            <label htmlFor={props.cheese}>
            <input type="radio" name={props.category} id={props.cheese} />
            {props.bread}
            </label>
        </li>
  
</div>
)}

export default ingredients