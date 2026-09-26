import { Link } from "react-router";

export default function ErrorPage() {
    return (
        <div>
            <h1>Oh no, this route doesn't exist!</h1>
            <Link to="/">You can go back by clicking here</Link>
        </div>
    )
}
