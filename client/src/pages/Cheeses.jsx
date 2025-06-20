import { React, useState, useEffect } from 'react'
import Navbar from '../components/navbar'
import CheeseCard from '../components/CheeseCard';
import { Link } from 'react-router-dom';

function Cheeses() {

    const [cheeses, setCheeses] = useState(null);

    useEffect(() => {
        const fetchCheeses = async () => {
            try {
                const res = await fetch("http://localhost:3000/cheeses");
                const data = await res.json();
                setCheeses(data);
            } catch (err) {
                console.error("error fetching cheeses", err);
            }
        }
        fetchCheeses();
    }, []);

    return (

        <div >
            <Navbar />
            <h1 className="m-4">Cheeses:</h1>
            {!cheeses ? (
            <div>Loading...</div>
            ) : (
            <div className="flex flex-wrap gap-4 m-4">
                {cheeses.map((cheese) =>
                <Link key={cheese.id} to={`/cheeses/${(cheese.name).toLowerCase()}`}>
                    <CheeseCard name={cheese.name} />
                </Link>
                )}

            </div>
        )}
        </div>
       

        
        
    )

}

export default Cheeses