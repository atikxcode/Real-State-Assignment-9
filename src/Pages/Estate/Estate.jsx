

import { useEffect, useState } from 'react';
import Estates from './Estates';

const Estate = () => {

  const [properties, setProperties] = useState([])

  useEffect(() =>{
    fetch('estate.json')
    .then(res => res.json())
    .then(data => setProperties(data))
  },[])

  return (
    <div className='container mx-auto my-24'>
      <div className='flex flex-col items-center mb-24'>
      <h2 className='font-gilda text-[45px] font-medium '>Premier Properties, Rooms & Suites</h2>
      <p className='text-lg text-center w-[500px]'>From spacious suites to deluxe rooms, our Premier Properties offer a range of accommodations tailored to elevate your stay to new heights of luxury</p>
      </div>

      <div className='grid grid-cols-3 gap-4'>
      {
        properties.map(property => <Estates key={property.id} property={property}></Estates>)
      }
      </div>
      
      
      
      
      
    </div>
  );
};

export default Estate;