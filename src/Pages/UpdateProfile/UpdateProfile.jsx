import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './UpdateProfile.css'
import 'animate.css';
import { Helmet } from 'react-helmet';

const UpdateProfile = () => {

  const isValidURL = (string) => {
    var res = string.match(/\bhttps?:\/\/\S+\.(jpeg|jpg|gif|png|bmp|svg|webp|tiff|ico)\b/i);
    return (res!== null)
  };

  const defaultImageUrl = 'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg';

  const { user, updateUser } = useContext(AuthContext);

  // State variables for form fields
  const [name, setName] = useState(user.name || '');
  const [photo, setPhoto] = useState(user.photo || '');
  
  const notify = () => toast("Profile Updated Successfully");
  const notify2 = () => toast("Atleast one field is required to make changes");
  const notify3 = () => toast("You passed a wrong image URL. Changing to default image.");
  
  let photoURL = photo;

  const handleSubmit = (e) => {
    e.preventDefault();

    let finalPhotoURL = photoURL.trim() ? photoURL : user.photo;


    if(!name.trim() && !photo.trim()){
      notify2();
      return;
    }
    
    if(finalPhotoURL && !isValidURL(photo)){
      notify3();
      finalPhotoURL = defaultImageUrl;
    } else if(!photoURL.trim()) {
      photoURL = user.photo;
    }
    // Update user profile
    updateUser(user,name.trim() ? name : user.name, finalPhotoURL)
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
    <div className='lg:pt-[300px]  xl:p-24  lg:pb-[300px] xl:pb-32 bg-[#1b1b1b] text-orange-400 '>
     <Helmet>
      <meta charSet="utf-8" />
      <title>Update Profile - Elite Shores Escape</title>

      </Helmet>
     <div className='flex flex-col items-center mx-auto container animate__animated animate__fadeInDown'>
     <div>
      <h2 className='text-[20px] md:text-[35px] lg:text-[45px] font-bold mb-10 text-white'>Update Your Profile</h2>
      </div>
      <div className='flex flex-col lg:flex-row gap-12 items-center'>

        <div className='flex flex-col items-center gap-6'>
          <p className='text-[30px] font-bold'>{user.displayName? user.displayName : 'No name'}</p>
          <p className='text-[30px] font-bold text-center'>{user.email? user.email : 'Email is private for this account'}</p>
          <img className='rounded-[50%] w-[250px] md:w-[350px] lg:w-[350px] h-auto custom-border2' src={user.photoURL} alt="" />
        </div>

      <div className='w-full mb-6 md:mb-10 lg:mb-0'>
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