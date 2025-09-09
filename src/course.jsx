import { useEffect, useState } from "react";


function Course(props) {

    const [purchased , setPurchased] = useState(false);
    const [discount , setDiscount] = useState(props.price);

    function Buycourse(amount) {
        console.log(props.name, "purchased", discount, "% discount");
        setPurchased(true);
        setDiscount(discount - amount);
    }

    return (

        props.name && <nav className="card" >
            <img src={props.image} className='image' />
            <h3 >{props.name}</h3>
            <p>{discount}</p>
            <button onClick={(event) => Buycourse(20)}>buy now</button>
            <button onClick={() => props.delete(props.id)}>DELETE</button>
            <p>{ purchased ? "course purchased..." : "Get it now"}</p>
        </nav>
    );

}

export default Course;