import React from "react";

const Form = props => {



    return(
        <>
            <h1>Build Your Own Pizza</h1>
            <div className="pizza-image">
                <img src="" alt="pizza"></img>
            </div>
            <div>
                <h2>Build Your Own Pizza</h2>
            </div>
            <div>
                <h2>Choice of Size</h2> <br />
                <h3>Required</h3>
            </div>
            <form>
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
                    <h2>Choice of Sauce</h2> <br />
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
                    <h2>Add Toppings</h2> <br />
                    <h3>Required</h3>
                </div>
                <div>

                
                </div>
            </form>
        </>
    )
}

export default Form;