import { useState } from "react";

export default function ChangingHeade() {
    const [header, setHeader] = useState("Change Me!")

    const handleClick = () => {
        setHeader("Changed!")
    }

    return (
        <>
            <h1>{header}</h1>
            <button onClick={handleClick}>Click me!</button>
        </>
    )
}
