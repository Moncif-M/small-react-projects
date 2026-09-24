import { useState } from "react"

export default function FunctionalInput() {
    
    const [todos, setTodos] = useState([])
    const [inputVal, setInputVal] = useState("")

    const handleInputChange = (e) => {
        setInputVal(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        setTodos([...todos, inputVal])
        setInputVal("")
    }

    return (
        <section>
            <h3>Functional</h3>    
            <form onSubmit={onSubmit}>
                <label htmlFor="task-enty">Enter a task: </label>
                <input type="text" id="task-enty" placeholder="Type your task..." onChange={handleInputChange} value={inputVal}/>
                <button type="submit">Submit</button>
            </form>
            <h4>The tasks!</h4>
            <ul>
                {todos.map((todo) => <li key={todo}>{todo}</li>)}
            </ul>
        </section>
    )
}
