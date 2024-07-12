import { React, useState, useEffect } from "react";
import myImage from '../assets/61.jpeg'; 


function Trim () {
    const [trims, setTrims] = useState([]);
    const [selectedTrim, setSelectedTrim] = useState(null);


    useEffect(() => {
        fetch('http://localhost:4000/parts')
            .then((response) => response.json())
            .then((data) => setTrims(data))
            .catch((error) => console.error('Error fetching trims:', error));
    }, []);
    
    const handleTrimClick = (trim) => {
        setSelectedTrim(trim);
    };

    return(
        <div>
            <h2>Trim</h2>
            <img src={myImage} className="center" alt="Primed" />
            <ul>
                {trims.map((trim) => (
                    <li key={trim.id} onClick={() => handleTrimClick(trim)}>
                        {trim.name}
                    </li>
                ))}
            </ul>
            {selectedTrim && (
                <div>
                    <h3>Selected Trim: {selectedTrim.name}</h3>
                    <p>Price: ${selectedTrim["comparison price"]}</p>
                </div>
            )}
        </div>
    )
}


export default Trim;

