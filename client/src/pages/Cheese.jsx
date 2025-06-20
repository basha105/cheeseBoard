import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/navbar';

function Cheese() {
    const [cheese, setCheese] = useState(null);
    const { cheeseName } = useParams();

    useEffect(() => {
        const fetchCheese = async () => {
            try {
                const res = await fetch(`http://localhost:3000/cheeses/${cheeseName}`);
                const data = await res.json();
                console.log('data:', data);
                setCheese(data);
            } catch (err) {
                console.error('error fetching cheese:', err);
            }
        }
        fetchCheese();
    }, []);

    return (
        <div>
        <Navbar />
        {!cheese ? (
            <div>Loading...</div>
        ) : (
            <div className="m-4">
                
                <div>{cheese.name}</div>
                <div>{cheese.country_name}</div>
                

            </div>
        )}
        </div>
    )
}

export default Cheese