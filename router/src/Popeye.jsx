import { Link } from "react-router";
import { useOutletContext } from "react-router";

export default function Popeye() {
    const textHolder = useOutletContext()

    return (
        <>
            <p>Hi, I am Popeye! I love to eat Spinach {textHolder}</p>
            <Link to="/">Click here to go back!</Link>
        </>
    )
}
