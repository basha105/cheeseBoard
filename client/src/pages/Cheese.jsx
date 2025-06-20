
import { React, useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

function Cheese({ name, country, milk }) {

    

    return (
        <div>
            <Navbar/>
            <h1></h1>
            <p>Cheese: {name}</p>
            <p>origin: {country}</p>
            <p>milk: {milk}</p>
        </div>

    )

}

export default Cheese