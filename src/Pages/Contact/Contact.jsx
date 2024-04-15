import { FaPhoneAlt, FaMailBulk, FaLocationArrow   } from "react-icons/fa";
import 'aos/dist/aos.css'
import Aos from "aos";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const notify = () => toast("THANKS FOR CONTACTING US");

  const  [name, setName] = useState('');
  const  [email, setEmail] = useState('');
  const  [number, setNumber] = useState('');
  const  [subject, setSubject] = useState('');
  const  [message, setMessage] = useState('');

  const contact = e => {
    e.preventDefault();
    setName('');
    setEmail('');
    setNumber('');
    setSubject('');
    setMessage('');
    notify();
  }

  useEffect(() => {
    Aos.init();
  },[])
  return (
    <div className="bg-[#1b1b1b] p-24 pb-36 text-white" >

     <div className="mx-auto container justify-center" data-aos="fade-up" data-aos-duration="1500">

     <div className="flex flex-col xl:flex-row justify-center gap-10">

      <div className="flex flex-col gap-4">
      <h2 className="text-[24px]">Elite Shores Escape</h2>
       <p className="w-[90%] md:w-[90%] lg:w-[90%] xl:w-[400px] text-[#FFFFFF99] text-[15px]">Have questions or ready to take the next step towards your dream property? Contact us today. Our dedicated team is here to assist you every step of the way.</p>
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
          <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} id="" placeholder="Your Name*" className="bg-inherit border-[#B95C4733] border-[1px] p-4" />
          <input type="email" name="email" value={email} id="" onChange={e => setEmail(e.target.value)} placeholder="Your Email" className="bg-inherit border-[#B95C4733] border-[1px] p-4" />
          <input type="number" name="number" value={number} id="" onChange={e => setNumber(e.target.value)} placeholder="Your Number" className="bg-inherit border-[#B95C4733] border-[1px] p-4" />
          <input type="text" name="text" value={subject} id="" onChange={e => setSubject(e.target.value)} placeholder="Subject*" className="bg-inherit border-[#B95C4733] border-[1px] p-4" />
          
        </div>

        <div className="flex flex-col gap-4  items-start">
        <input type="text"  name="message" value={message} onChange={e => setMessage(e.target.value)} id="" placeholder="Message*" className="bg-inherit border-[#B95C4733] border-[1px] w-full h-[300px] p-4 " />
        <button onClick={contact} className="text-white bg-[#b95c47] py-[15px] px-[25px] hover:bg-white hover:text-black duration-700">SEND MESSAGE</button>
        </div>
        

      </div>

      </div>

     </div>
     <ToastContainer />
    </div>
  );
};

export default Contact;