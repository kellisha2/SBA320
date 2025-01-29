import React from 'react'

function ingredients(props) {

    function handleChange(category, item) {
        props.setItem(previous => ({...previous, [category]: item}));
    }

    return (
        <div className="ingredients">
            <li className="">
                <label htmlFor={props.name}>
                    <input type="radio" name={props.category} id={props.name} onChange={() => handleChange(props.category, props.item)}/>
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
    )
}

export default ingredients