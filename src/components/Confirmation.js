import React from "react"


const Confirmation = props => {
    const { pizza } = props;


    return (
        <>
            <h1>Order has been Submitted!</h1>
            <img src="https://media1.tenor.com/images/7013a56cc158a4e1c55bf364b1115388/tenor.gif?itemid=4088893" alt="dog with pizza in"></img>
            <div className="order">
                <h2>Your Order</h2>
                <h4>{pizza.name}</h4>
                <h4>{pizza.size}</h4>
                <h4>{pizza.sauce}</h4>
                <h4>{pizza.toppings[0]} <br /> {pizza.toppings[1]} <br /> {pizza.toppings[2]} <br /> {pizza.toppings[3]}</h4>
                <h4>{pizza.specialInstructions}</h4>
            </div>
        </>
    )
}

export default Confirmation;