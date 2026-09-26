import { Outlet, useParams } from "react-router"
import Default from "./Default.jsx"
import Popeye from "./Popeye.jsx"
import Spinach from "./Spinach.jsx"

export default function Profile() {
    const { name } = useParams()
    const textHolder = "Xdd moment"

    // return (
    //     <div>
    //         <h1>Hello from profile page!</h1>
    //         <p>So, how are you?</p>
    //         <hr />
    //         <h2>The profile visited is here:</h2>
    //         {name === "popeye" ? (
    //             <Popeye />
    //         ) : name === "spinach" ? (
    //             <Spinach />
    //         ) : (
    //             <Default />
    //         )}
    //     </div>
    // )
    return (
        <div>
             <h1>Hello from profile page!</h1>
             <p>So, how are you?</p>
             <hr />
             <h2>The profile visited is here:</h2>
             <Outlet context={textHolder}/>
        </div>
    )
}
