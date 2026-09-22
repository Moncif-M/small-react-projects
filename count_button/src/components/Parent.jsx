import Button from "./Button.jsx";
import Counter from "./Counter.jsx";
import { useState } from "react";
import "./Parent.css"

export default function Parent() {

    const [counter, setCounter] = useState(0);

    return (
        <div className="container">
            
            <h2>Increment the shit out of that counter ;)</h2>
            <Counter count={counter}/>
            <Button incrementCounter={() => setCounter(counter + 1)}/>

        </div>
    );
}

