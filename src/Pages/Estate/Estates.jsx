import { Link } from "react-router-dom";


const Estates = ({property}) => {

  const {estate_title, segment_name, description, price, status, area, location, facilities, additional_information, estate_image, id } = property;

  return (
    <div className=" p-4 bg-cover bg-center w-[450px] h-[400px] relative group rounded-lg " style={{backgroundImage: `url(${estate_image})`}}>
       <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity"></div>
      {/* <img className="w-[450px] h-[350px]" src={estate_image} alt="" /> */}
      <div className="absolute inset-0 gap-2 p-4 flex flex-col  items-center opacity-0 group-hover:opacity-100 transition-opacity ">
        <p className="text-white text-[28px] font-bold">{estate_title}</p>
        <p className=" text-xl text-orange-500 font-bold">{segment_name}</p>
        <p className="text-white text-center font-medium">{description}</p>
        <p className="text-orange-500 text-center text-[22px] font-bold">{price}</p>
        <div className="text-white w-full items-start p-4 flex justify-between border-[1px] border-orange-500 rounded-2xl hover:border-white hover:text-orange-500 font-bold">
        <p className=" p-2 rounded-2xl text-[20px] ">{status}</p>
        <p className=" p-2 rounded-2xl  text-[20px] ">{area}</p>
        <p className=" p-2 rounded-2xl  text-[20px] ">{location}</p>
        </div>
        <div className="w-full items-start p-4 flex justify-center">
        <button className="btn hover:bg-orange-500 border-0 text-black text-lg font-bold"><Link to={`/propertydetails/${id}`}></Link>View Property</button>
        </div>
       
        
        
        
        
      </div>
     
       
      
    </div>
  );
};

export default Estates;