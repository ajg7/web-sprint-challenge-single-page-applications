import React from "react";
import { useHistory } from "react-router-dom"
import pizza from "../Assets/Pizza.jpg"


const Form = props => {
    const { submit, inputChange, values, checkboxChange, errors, disabled } = props;
    const history = useHistory();

    const onInputChange = event => {
        const { name, value } = event.target;
        inputChange(name, value);
    }

    const onCheckboxChange = event => {
        const { name, checked } = event.target
        checkboxChange(name, checked)
      }

    const onSubmit = event => {
        event.preventDefault()
        submit()
        history.push("/pizza/confirmation")
    }


    return(
        <>
            <h1>Build Your Own Pizza</h1>
            <div className="pizza-image">
                <img src={pizza} alt="pizza"></img>
            </div>
            <div>
                <h2>Build Your Own Pizza</h2>
            </div>
            <form onSubmit={onSubmit}>
                <div className='errors'>
                    <div>
                        <h3>{errors.name}</h3>
                    </div>
                </div>
                <div>
                    <h2>Name on the Order</h2>
                    <h4>Required</h4>
                </div>
                    <label>
                        <input 
                        onChange={onInputChange}
                        name="name"
                        type="text"
                        value= {values.name}
                        />
                    </label>
                <div>
                    <h2>Choice of Size</h2>
                    <h4>Required</h4>
                </div>
                <div className="size-selection">
                    <label>
                        <select
                        onChange={onInputChange}
                        value={values.size}
                        name="size"
                        >
                            <option value="">- Select -</option>
                            <option value="Small">Small</option>
                            <option value="Medium">Medium</option>
                            <option value="Large">Large</option>
                            <option value="Extra Large">Extra Large</option>
                        </select>
                    </label>
                </div>
                <div>
                    <h2>Choice of Sauce</h2>
                    <h4>Required</h4>
                </div>
                <div className="sauce-selection">
                    <label>Original Red
                        <input 
                            type="radio"
                            name="sauce"
                            value="Original Red"
                            onChange={onInputChange}
                        />
                    </label>
                    <label>Garlic Ranch
                        <input 
                            type="radio"
                            name="sauce"
                            value="Garlic Ranch"
                            onChange={onInputChange}
                        />
                    </label>
                    <label>BBQ Sauce
                        <input 
                            type="radio"
                            name="sauce"
                            value="BBQ Sauce"
                            onChange={onInputChange}
                        />
                    </label>
                    <label>Spinach Alfredo
                        <input 
                            type="radio"
                            name="sauce"
                            value="Spinach Alfredo"
                            onChange={onInputChange}
                        />
                    </label>
                </div>
                <div>
                    <h2>Add Toppings</h2> 
                    <h4>Required</h4>
                </div>
                <div className="topping-selection">
                    <label> Cheese
                        <input 
                        type="checkbox"
                        name="cheese"
                        checked={values.toppings.cheese}
                        onChange={onCheckboxChange}
                        />
                    </label>
                    <label> Pepperoni
                        <input 
                        type="checkbox"
                        name="pepperoni"
                        checked={values.toppings.pepperoni}
                        onChange={onCheckboxChange}
                        />
                    </label>
                    <label> Sausage
                        <input 
                        type="checkbox"
                        name="sausage"
                        checked={values.toppings.sausage}
                        onChange={onCheckboxChange}
                        />
                    </label>
                    <label> Mushrooms
                        <input 
                        type="checkbox"
                        name="mushrooms"
                        checked={values.toppings.mushrooms}
                        onChange={onCheckboxChange}
                        />
                    </label>
                </div>
                <div>
                    <h2>Special Instructions</h2> 
                    <h4>Optional</h4>
                </div>
                <div className="special-instructions">
                    <label> Anything else you'd like to add?
                        <input 
                        onChange={onInputChange}
                        name="specialInstructions"
                        type="text"
                        value= {values.specialInstructions}
                        />
                    </label>
                </div>
                <div className="submit-button">
                    <button disabled={values.name === "" ? disabled : null}>Submit Order</button>
                </div>
            </form>
        </>
    )
}

export default Form;