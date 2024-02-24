import {useEffect, useState} from 'react';
import Character from "./Character"; // Import the Character component


// Returns the component that lists all the information about Rick and Morty:

function List() {
    const [loading, setLoading] = useState(true); // Create a state variable to store the loading state
    const [characters, setCharacters] = useState([]); // Create a state variable to store the characters

    useEffect(() => {
        async function fetchData() {
            const data = await fetch('https://rickandmortyapi.com/api/character'); // Fetch the data from the API

            const {results} = await data.json(); // Extract the results from the data

            setCharacters(results); // Set the characters state variable to the results
            setLoading(false); // Set the loading state to false
        }
        fetchData();
    }, [characters.length]);

    return (
    <div>
        <h2> Characters </h2>
        <div className = 'row'>
         {loading ? (
            <div> Loading... </div>
         ) :(
            characters.map((character) => (
                <Character
                 key={character.id}
                 name={character.name}
                 origin={character.origin}
                 image={character.image}
                 />
            ))
         )}
        </div>
    </div>
    );
}

export default List;

// This component should be included in the entry point of app so its visible.
// we need to refer it in the index.js file.