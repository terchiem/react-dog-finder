import React from 'react';
import { Link } from 'react-router-dom';
import './DogDetails.css';

function DogDetails({ dog }) {
  return (
    <div className="DogDetails">
      <h1>{dog.name}</h1>
      <img src={dog.src} alt={dog.name} />
      <p>Age: {dog.age}</p>
      <ul>
        {dog.facts.map((fact, i) => (
          <li key={i}>{fact}</li>
        ))}
      </ul>
      
      <Link to="/">Go Back</Link>
    </div>
  )
}

export default DogDetails;