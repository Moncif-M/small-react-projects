import { Link } from "react-router"

export default function App() {
    return (
        <div>
            <h1>Hello from the main page of the app!</h1>
            <p>Here are some examples of links to other pages</p>
            <nav>
                <ul>
                    <li>
                        <Link to="profile">Profile page</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
