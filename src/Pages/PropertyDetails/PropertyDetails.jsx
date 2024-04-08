import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaBed } from "react-icons/fa";

const PropertyDetails = () => {



  const {id} = useParams();
  const [property, setProperty] = useState({
    facilities: [],
    additional_information: {}
  });

  useEffect(() => {
    fetch('/estate.json')
    .then(res => res.json())
    .then(data => {
      const specificProperty = data.find(item => item.id == id);
      setProperty(specificProperty);
    })
  },[id]);


  
   


  return (
    <div className='container mx-auto my-24 flex flex-col items-center gap-6'>
    <img className='w-[1300px] h-[800px]' src={property.estate_image} alt="" />
    
    
    <div className='flex items-center justify-between border'>

    <div>

    <div className='p-8'>
     <div className="rating rating-md">
      <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
      <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
      <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
      <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
      <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
      
    </div>
    <p>{property.segment_name}</p>
    <p>{property.estate_title}</p>
    <p className='w-[700px]'>{property.description}</p>
    <p>Total Area: {property.area}</p>
    <p>Only At: {property.price}</p>
    <p>{property.location}</p>

     </div>

     </div>


     <div className='flex flex-col gap-5'>

     <div>
      {/* Here the features section */}
      <p>Out Top Facilities</p>
      <div className='flex flex-col items-center'>
      <p>{property.facilities[0]}</p>
      <p>{property.facilities[1]}</p>
      <p>{property.facilities[2]}</p>
      <p>{property.facilities[3]}</p>
      <p>{property.facilities[4]}</p>
      </div>
      
     </div>



     <div>
      <p>Amenities</p>
      <p className='flex items-center gap-2'><span className='text-orange-500'><FaBed /> </span> <span>{property.additional_information.bedrooms}</span> <span>bedrooms</span></p>
      <p>{property.additional_information.bathrooms}</p>
      <p>{property.additional_information.garage_spaces}</p>
      <p>{property.additional_information.year_built}</p>
      <p>{property.additional_information.architectural_style}</p>
     </div>


     </div>
    
    </div>
      

     
    
    </div>
  );
};

export default PropertyDetails;