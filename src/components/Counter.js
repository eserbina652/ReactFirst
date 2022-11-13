import React, {useState} from "react";

const Counter = () => {
const [counter, setCounter] = useState(0)
    console.log(counter)
    return (
        <div>
            <button onClick={() => setCounter(counter +1)}>+</button>
            <p>{counter}</p>
            <button onClick={() => setCounter(counter -1)}>-</button>
        </div>
    )
}



export default Counter