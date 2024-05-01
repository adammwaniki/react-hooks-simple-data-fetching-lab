// create your App component here
import React, {useState, useEffect} from "react";

export default function App (){

    const [randomImage, setRandomImage] = useState([]); // we can also set this to null
    const [isLoading, setIsLoading] = useState(true); //initializing the loading as true since it will happen before the fetch API

    useEffect(() => {
        fetch ("https://dog.ceo/api/breeds/image/random")
            .then(response => response.json())
            .then(data => {
                setRandomImage(data.message);
                setIsLoading(false);// changing the state of the loading to false once the API has fetched the data
            })
            .catch(error => console.error("Error fetching data:", error));
  }, []);

    return (
        <>
           {isLoading ? (<p>Loading...</p>) : (<img src={randomImage} alt="A Random Dog" />)}
        </>
    );
}
