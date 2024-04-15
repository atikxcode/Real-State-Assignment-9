

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
    <div className=' bg-[#1b1b1b] pb-24'>
      <div className='container mx-auto text-white pt-20'>
      <div className='flex flex-col items-center mb-24'>
      <h2 className='font-gilda text-center text-[30px] md:text-[35px] lg:text-[45px] font-medium  mb-4'>Premier Properties, Rooms & Suites</h2>
      <p className='text-lg text-center w-[90%] md:w-[95%] lg:w-[500px]'>From spacious suites to deluxe rooms, our Premier Properties offer a range of accommodations tailored to elevate your stay to new heights of luxury</p>
      </div>

      <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-4' >
      {
        properties.map(property => <Estates key={property.id} property={property}></Estates>)
      }
      </div>
      </div>
      
      
      
      
      
    </div>
  );
};

export default Estate;