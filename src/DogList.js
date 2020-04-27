import React from 'react';
import './DogList.css';

function DogList({ dogs }) {

  const dogImages = dogs.map(dog => (
    <img src={dog.src} alt={dog.name} key={dog.name} />
  ));

  return (
    <div className="DogList">
      <h1>Here are our lovely dogs!</h1>
      { dogImages }
    </div>
  );
}


export default DogList;