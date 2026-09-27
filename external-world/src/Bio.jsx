import { useEffect, useState } from "react";

export default function Bio({ delay }) {

    const [bio, setBio] = useState("")
    
    useEffect(() => {
        
        setTimeout(async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/photos', { mode: 'cors' })
            const data = await response.json()
            setBio("I like Asuka")
        }, delay)
    }, [])

    return (
        bio && (
            <>
                <p>{bio}</p>
            </>
        )
    )
}
