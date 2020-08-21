import React from "react";
import { Link } from "react-router-dom"
import pizza from "../Assets/Pizza.jpg"

const Form = props => {
    return(
        <>
            <h1>Build Your Own Pizza</h1>
            <div className="pizza-image">
                <img src={pizza} alt="pizza"></img>
            </div>
            <div>
                <h2>Build Your Own Pizza</h2>
            </div>
            <form>
                <div>
                    <h2>Name on the Order</h2>
                    <h3>Required</h3>
                </div>
                    <label>
                        <input 
                        name="nameOnTheOrder"
                        type="text"
                        />
                    </label>
                <div>
                    <h2>Choice of Size</h2>
                    <h3>Required</h3>
                </div>
                <div className="size-selection">
                    <label>
                        <select>
                            <option value="">- Select -</option>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                            <option value="extraLarge">Extra Large</option>
                        </select>
                    </label>
                </div>
                <div>
                    <h2>Choice of Sauce</h2>
                    <h3>Required</h3>
                </div>
                <div className="sauce-selection">
                    <label>Original Red
                        <input 
                            type="radio"
                            name="sauce"
                            value="originalRed"
                        />
                    </label>
                    <label>Garlic Ranch
                        <input 
                            type="radio"
                            name="sauce"
                            value="garlicRanch"
                        />
                    </label>
                    <label>BBQ Sauce
                        <input 
                            type="radio"
                            name="sauce"
                            value="bbqSauce"
                        />
                    </label>
                    <label>Spinach Alfredo
                        <input 
                            type="radio"
                            name="sauce"
                            value="spinachAlfredo"
                        />
                    </label>
                </div>
                <div>
                    <h2>Add Toppings</h2> 
                    <h3>Required</h3>
                </div>
                <div className="topping-selection">
                    <label> Cheese
                        <input 
                        type="checkbox"
                        name="cheese"
                        
                        />
                    </label>
                    <label> Pepperoni
                        <input 
                        type="checkbox"
                        name="pepperoni"
                        
                        />
                    </label>
                    <label> Sausage
                        <input 
                        type="checkbox"
                        name="sausage"
                        
                        />
                    </label>
                    <label> Mushrooms
                        <input 
                        type="checkbox"
                        name="mushrooms"
                        
                        />
                    </label>
                </div>
                <div>
                    <h2>Special Instructions</h2> 
                    <h3>Optional</h3>
                </div>
                <div className="special-instructions">
                    <label> Anything else you'd like to add?
                        <input 
                        name="specialInstructions"
                        type="text"
                        />
                    </label>
                </div>
                <div className="submit-button">
                    <Link to="/pizza/confirmation"><button>Submit Order</button></Link>
                </div>
            </form>
        </>
    )
}

export default Form;