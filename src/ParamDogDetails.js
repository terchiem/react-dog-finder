import React from 'react';
import { useParams } from 'react-router-dom';
import DogDetails from './DogDetails';

function ParamDogDetails({ dogs }) {

  const { name } = useParams();
  const dog = dogs.find(d => {
    return d.name.toLowerCase() === name
  });


  return <DogDetails dog={dog} />
}

export default ParamDogDetails;