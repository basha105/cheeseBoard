import { React, useState, useEffect } from 'react'
import Navbar from '../components/navbar'
import CheeseCard from '../components/CheeseCard';

function Cheeses() {

    const [countries, setCountries] = useState(null);
    
    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const res = await fetch("http://localhost:3000/countries");
                const data = await res.json();
                setCountries(data);
            } catch (err) {
                console.error("error fetching countries", err);
            }
        }
        fetchCountries();
    }, []);

    return (
        <>
        <Navbar />
        <div className="m-2">
            <div className="text-5xl">All Cheeses</div>
        </div>
        
        <CheeseCard />
        <div className="text-2xl m-5">Countries:</div>
        {!countries ? (
            <div>Loading...</div>
        ) : (
            <ul>
                {countries.map((country) =>
                <li key={country.id}>{country.name}</li>
                )}
            </ul>
        )}

        </>
    )

}

export default Cheeses