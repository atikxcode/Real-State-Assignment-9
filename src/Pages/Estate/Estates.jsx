import Aos from "aos";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import 'aos/dist/aos.css'


const Estates = ({property}) => {

  useEffect(() => {
    Aos.init();
  },[])
 

  const {estate_title, segment_name, description, price, status, area, location, facilities, additional_information, estate_image, id } = property;

  return (
    <div className=" p-4 bg-cover bg-center w-[350px] h-[400px]  md:w-[80%] md:h-[350px] lg:w-[450px] lg:h-[400px] relative group rounded-lg mx-auto lg:mx-none" data-aos="fade-up" data-aos-duration="2000"  style={{backgroundImage: `url(${estate_image})`}}>
       <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity"></div>
      {/* <img className="w-[450px] h-[350px]" src={estate_image} alt="" /> */}
      <div className="absolute inset-0 gap-2 p-4 flex flex-col  items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <p className="text-white text-[20px] md:text-[25px] lg:text-[28px] font-bold">{estate_title}</p>
        <p className="text-lg md:text-xl lg:text-xl text-orange-500 font-bold">{segment_name}</p>
        <p className="text-white text-center font-medium text-[12px] md:text-[14px] lg:text-[14px]">{description}</p>
        <p className="text-orange-500 text-center text-[19px] md:text-[20px] lg:text-[22px] font-bold">{price}</p>
        <div className="text-white w-full  p-2 md:p-3 lg:p-4 flex justify-between border-[1px] items-center border-orange-500 rounded-2xl hover:border-white hover:text-orange-500 font-bold">
        <p className=" p-2 rounded-2xl text-[16px] md:text-[20px] lg:text-[20px] ">{status}</p>
        <p className=" p-2 rounded-2xl text-[16px] md:text-[20px] lg:text-[20px] ">{area}</p>
        <p className=" p-2 rounded-2xl text-[16px] md:text-[20px] lg:text-[20px] ">{location}</p>
        </div>
        <div className="w-full items-start p-4 flex justify-center">
        <button className="btn hover:bg-white hover:text-black bg-[#b95c47] duration-700 border-0 text-white text-lg font-bold"><Link to={`/propertydetails/${id}`}>View Property</Link></button>
        </div>
       
        
        
        
        
      </div>
     
       
      
    </div>
  );
};

export default Estates;