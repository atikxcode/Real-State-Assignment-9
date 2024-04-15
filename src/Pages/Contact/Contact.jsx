import { FaPhoneAlt, FaMailBulk, FaLocationArrow   } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-[#1b1b1b] p-24 pb-36 text-white">

     <div className="mx-auto container justify-center">

     <div className="flex justify-center gap-10">

      <div className="flex flex-col gap-4">
      <h2 className="text-[24px]">Elite Shores Escape</h2>
       <p className="w-[400px] text-[#FFFFFF99] text-[15px]">Have questions or ready to take the next step towards your dream property? Contact us today. Our dedicated team is here to assist you every step of the way.</p>
       <p className="flex items-center gap-4">
        <span className="text-[40px] text-orange-400"><FaPhoneAlt /></span>
        <span className="flex flex-col">
          <span className="text-[#FFFFFF99] text-[15px]">Reservation</span>
          <span className="text-[18px] text-white">855 111 4321</span>

        </span>
       </p>

       <p className="flex items-center gap-4">
        <span className="text-[40px] text-orange-400"><FaMailBulk /></span>
        <span className="flex flex-col">
          <span className="text-[#FFFFFF99] text-[15px]">Email Info</span>
          <span className="text-[18px] text-white">info@elite.com</span>

        </span>
       </p>

       <p className="flex items-center gap-4">
        <span className="text-[40px] text-orange-400"><FaLocationArrow /></span>
        <span className="flex flex-col">
          <span className="text-[#FFFFFF99] text-[15px]">Address</span>
          <span className="text-[18px] text-white w-[190px]">0108 Broadway NY, New York 010802 USA</span>

        </span>
       </p>

      </div>

      <div className="flex flex-col">

        <div>
        <h2 className="text-[27px] mb-5">Get in touch</h2>
        </div>

        <div className="grid grid-cols-2 gap-4 pb-4">
          <input type="text" name="" id="" placeholder="Your Name*" className="bg-inherit border-[#B95C4733] border-[1px] p-4" />
          <input type="text" name="" id="" placeholder="Your Email" className="bg-inherit border-[#B95C4733] border-[1px] p-4" />
          <input type="text" name="" id="" placeholder="Your Number" className="bg-inherit border-[#B95C4733] border-[1px] p-4" />
          <input type="text" name="" id="" placeholder="Subject*" className="bg-inherit border-[#B95C4733] border-[1px] p-4" />
          
        </div>

        <div className="flex flex-col gap-4  items-start">
        <input type="text" name="" id="" placeholder="Message*" className="bg-inherit border-[#B95C4733] border-[1px] w-full h-[300px] p-4 " />
        <button className="text-white bg-[#b95c47] py-[15px] px-[25px] hover:bg-white hover:text-black duration-700">SEND MESSAGE</button>
        </div>
        

      </div>

      </div>

     </div>

    </div>
  );
};

export default Contact;