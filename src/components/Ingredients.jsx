import React from 'react'

function ingredients(props) {
  return (
    <li className="ingredients">
        <label htmlFor={props.bread}>
            <input type="radio" name={props.category} id={props.bread} />
            {props.bread}
        </label>
    </li>
  )
}

export default ingredients