import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './UpdateProfile.css'
import 'animate.css';

const UpdateProfile = () => {



  const { user, updateUser } = useContext(AuthContext);

  // State variables for form fields
  const [name, setName] = useState(user.name || '');
  const [photo, setPhoto] = useState(user.photo || '');
  
  const notify = () => toast("Profile Updated Successfully");
  
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update user profile
    updateUser(user,name, photo)
      .then(() => {
        // Optionally, show success message or redirect to profile page
        setTimeout(() => {
          notify();
          
        }, 1000)

        setTimeout(() => {
          window.location.reload();
          
        }, 2000)
        
        
      })
      .catch(error => {
        console.error('Error updating profile:', error);
      });
  };
  return (
    <div className='mx-auto border my-24 container p-24 rounded-[40px] bg-[#1b1b1b] text-orange-400 animate__animated animate__rubberBand'>
     <div className='flex flex-col items-center'>
     <div>
      <h2 className='text-[45px] font-bold mb-10 text-white'>Update Your Profile</h2>
      </div>
      <div className='flex gap-6 items-center'>

        <div className='flex flex-col items-center gap-4'>
          <p className='text-[30px] font-bold'>{user.displayName? user.displayName : 'No name'}</p>
          <img className='rounded-[50%] w-[350px] custom-border2' src={user.photoURL} alt="" />
        </div>

      <div className='w-full'>
      <form onSubmit={handleSubmit} className='custom-border '>
        <div>
          <label className='text-orange-400 text-[20px] font-semibold '>Your Name:</label>
          <input className="input bg-[#F3F3F3] text-xl text-black mb-4 w-full" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label className='text-orange-400 text-[20px] font-semibold'>Photo URL:</label>
          <input className="input bg-[#F3F3F3] text-xl text-black mb-4 w-full" type="text" value={photo} onChange={(e) => setPhoto(e.target.value)} />
        </div>
        
        
       <div className='flex justify-center'>
       <button className="mt-10 border w-full p-3 text-lg custom-button custom-border3 transition-all rounded-2xl " type="submit ">Update Profile</button>
       </div>
      </form>
      </div>
      </div>
     </div>
     <ToastContainer />
    </div>
  );
};

export default UpdateProfile;