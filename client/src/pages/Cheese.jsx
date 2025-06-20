import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Cheese() {
    const [cheese, setCheese] = useState(null);
    const { cheeseName } = useParams();

    useEffect(() => {
        const fetchCheese = async () => {
            try {
                const res = await fetch(`http://localhost:3000/cheeses/${cheeseName}`);
                const data = await res.json();
                setCheese(data);
            } catch (err) {
                console.error('error fetching cheese:', err);
            }
        }
        fetchCheese();
    }, [cheeseName]);

    return (
        <>
        {!cheese ? (
            <div>Loading...</div>
        ) : (
            <div>
                <div>{cheese.name}</div>
                <div>{cheese.country_id}</div>
                <div>{cheese.milk_id}</div>
            </div>
        )}
        </>
    )
}

export default Cheese