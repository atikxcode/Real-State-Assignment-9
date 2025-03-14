import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaBed, FaBath, FaCar, FaBuilding, FaBorderStyle } from "react-icons/fa";
import { Helmet } from 'react-helmet';

const PropertyDetails = () => {



  const {id} = useParams();
  const [property, setProperty] = useState({
    facilities: [],
    additional_information: {},
    special_features: []
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
    <div className='pt-24 pb-24 flex flex-col items-center gap-6 bg-[#1b1b1b] '>

      <Helmet>
      <meta charSet="utf-8" />
      <title>Property Details - Elite Shores Escape</title>

      </Helmet>

    <div className='container mx-auto '>
    <img className='w-[90%] md:w-[90%] lg:w-[90%] xl:w-[1380px] h-[90%] md:h-[90%] lg:h-[90%] xl:h-[800px] rounded-xl mx-auto xl:mx-none' src={property.estate_image} alt="" />
    
    
   
    <div className='flex flex-col md:flex-col lg:flex-col xl:flex-row items-center justify-between  '>

      <div>

      <div className='p-8 flex flex-col gap-4'>

      <div className="rating rating-md">
        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
        
      </div>

      <p className='text-[#b95c47] text-[18px] md:text-[18px] lg:text-[18px] xl:text-[20px] '>{property.segment_name}</p>
      <p className='text-[25px] md:text-[25px] lg:text-[35px] xl:text-[45px] text-white'>{property.estate_title}</p>
      <p className='w-[90%] md:w-[90%] lg:w-[90%]  xl:w-[700px] text-xl leading-[32px] text-[#b95c47]'>{property.description}</p>
      <p className='text-[#b95c47] text-xl md:text-xl lg:text-xl xl:text-2xl'><span className='text-[white] text-xl xl:text-2xl'>Total Area:</span> {property.area}</p>
      <p className='text-[#b95c47] text-xl md:text-xl lg:text-xl xl:text-2xl'><span className='text-[white] text-xl xl:text-2xl'>Only At: </span>{property.price}</p>
      <p className='text-white text-2xl'>{property.location}</p>

      </div>

      </div>


      <div className='flex flex-row gap-12 items-center'>

      <div  className='flex-col justify-center xl:justify-center xl:flex-none '>

        {/* Here the features section */}
        <div>
        <p className='text-white text-lg xl:text-2xl mb-2'>Out Top Facilities</p>
        </div>
        <div className='flex flex-col items-center text-[#FFFFFF99] text-lg xl:text-xl gap-2'>
        <p>{property.facilities[0]}</p>
        <p>{property.facilities[1]}</p>
        <p>{property.facilities[2]}</p>
        <p>{property.facilities[3]}</p>
        <p>{property.facilities[4]}</p>
        </div>
        
      </div>



        <div className='flex flex-col items-center p-2'>

        <p className='text-white text-2xl mb-2'>Amenities</p>
        <div className='flex flex-col items-center text-[#FFFFFF99] text-xl gap-2'>
        <p className='flex items-center gap-2'><span className='text-orange-500'><FaBed /> </span> <span>{property.additional_information?.bedrooms}</span> <span>bedrooms</span></p>
        <p className='flex items-center gap-2'><span className='text-orange-500'><FaBath /></span><span>{property.additional_information?.bathrooms}</span> <span>bathroom</span></p>
        <p className='flex items-center gap-2'><span className='text-orange-500'><FaCar /></span><span>{property.additional_information?.garage_spaces}</span> <span>garage space</span></p>
        <p className='flex items-center gap-2'><span className='text-orange-500'><FaBuilding /></span><span>Since</span><span>{property.additional_information?.year_built}</span> </p>
        <p className='flex items-center gap-2'><span className='text-orange-500'><FaBorderStyle /></span><span>{property.additional_information?.architectural_style}</span> <span></span></p>

        </div>
  
        </div>


        </div>

        <div className='flex flex-col text-white items-center p-4'>
          <p className='text-white text-2xl '>Special Feature</p>
          <div className='mt-8 flex flex-col items-center text-[#FFFFFF99] text-xl gap-2'>
          <p>{property.additional_information.special_features?.[0]}</p>
          <p>{property.additional_information.special_features?.[1]}</p>
          <p>{property.additional_information.special_features?.[2]}</p>
          </div>
          
        </div>

    </div>

   
    </div>
   
      

     
    
    </div>
  );
};

export default PropertyDetails;