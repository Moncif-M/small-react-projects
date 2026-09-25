import { Component } from "react";

export default class ClassInput extends Component {
    constructor() {
        super()
    
        this.state = {
            todos: [],
            inputVal: "",
    }
    
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.logOutput = this.logOutput.bind(this)

    }   


    handleSubmit(e) {
        e.preventDefault()
        this.setState((state) => ( {
            todos: [...state.todos, state.inputVal],
            inputVal: "",
        }))
    }

    handleInputChange(e) {
        this.setState((state) => ({
            ...state,
            inputVal: e.target.value
        }))
    }

    logOutput() {
        console.log(this.state.inputVal)
    }



    render() {
        return (
            <section>
                <h3>This is a classComponent</h3>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="task-entry">Enter a task:</label>
                    <input type="text" name="task-entry" value={this.state.inputVal} placeholder="Enter your task..." onChange={this.handleInputChange}/>
                    <button type="submit">Submit</button>
                </form>
                <h4>The tasks!</h4>
                <ul>
                    {this.state.todos.map(todo => <li key={todo}>{todo}</li>)}
                </ul>
            </section>
        )
    }
}
