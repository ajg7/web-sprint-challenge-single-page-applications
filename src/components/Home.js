import React from "react";
import { Link } from "react-router-dom"


const Home = props => {



    return(
        <>
            <div>
                <h1>Lambda Eats</h1>
                <nav>
                    <button>Home</button>
                    <button>Help</button>
                </nav>
            </div>
            <div>
                <h2>Your Favorite Pizza Awaits!</h2>
                <Link to="/pizza"><button>Pizza?</button></Link>
            </div>
            <div>
                <h3>At this time we can only serve pizza, but stay tuned for more options!</h3>
            </div>
        </>
    )
}

export default Home;