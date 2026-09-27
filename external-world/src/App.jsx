import { useEffect, useState } from "react";
import './App.css'


const useImageURL = () => {

    const [imageURL, setImageURl] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    // useEffect(() => {
        //     fetch("https://picsum.photos/v2/list")
        // .then((respone) => respone.json())
        // .then((response) => setImageURl(response[0].download_url))
        // .catch((error) => console.log(error))
        // }, [])

    useEffect(() => {
        async function fetchData() {
            try {
                const respone = await fetch("https://picsum.photos/v2/list/")
                if (respone.status > 400) {
                    throw new Error("Server Error")
                }
                const data = await respone.json()
                setImageURl(data[0].download_url)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    },[])
    return { imageURL, error, loading }
}


export default function App() {

    const { imageURL, error, loading } = useImageURL()

    if (loading) return <p>loading...</p>
    if (error) return <p>A network error was encountred...</p>

    return (
        imageURL && (
            <>
                <h1>Image:</h1>
                <img src={imageURL} alt="some Image"/>
            </>
        )
    )
}
