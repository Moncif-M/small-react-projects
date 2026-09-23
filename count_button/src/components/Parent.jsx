import Button from "./Button.jsx";
import Counter from "./Counter.jsx";
import { useEffect, useState } from "react";
import "./Parent.css"

export default function Parent() {

    const [counter, setCounter] = useState(0);
    const [colors, setColors] = useState({ r: 0, g: 0, b: 0 })

    const generateRandom = () => {
        return Math.floor(Math.random() * 255) + 1 
    }

    useEffect(() => {
        const key = setInterval(() => {
            const newColors = { r: generateRandom(), g: generateRandom(), b: generateRandom()}
            setColors(newColors)
        }, 500)

        return () => {
            clearInterval(key)
        }
    }, [])

    return (
        <div className="container">
            
            <h2 style={{color: `rgb(${colors.r},${colors.g},${colors.b})`}}>Increment the shit out of that counter ;)</h2>
            <Counter count={counter}/>
            <Button incrementCounter={() => setCounter(counter + 1)}/>

        </div>
    );
}

