import { useEffect, useState } from 'react';
import Bio from './Bio.jsx'

export default function Profile({ delay }) {
    const [imageURL, setImageURL] = useState(null)

    useEffect(() => {
        setTimeout(async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/photos', { mode: 'cors'})
            const data = await response.json()
            setImageURL(data[0].url)
        }, delay)
    }, [])

    return (
        (imageURL && (
            <div>
            <h3>Username</h3>       
            <img src={imageURL} alt="" />
            <Bio delay={1000} />
            </div>   
        )) || <h1>Loading...</h1>
    )
}

