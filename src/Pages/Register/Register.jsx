import 'animate.css';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='my-20 animate__animated animate__lightSpeedInRight'>
  
    
    <div>
    <h2 className="my-10 text-center text-[#403F3F] text-[35px] font-semibold">Register your account</h2>
    

<form  className="md:3/4 lg:w-1/2 mx-auto">

<div className="form-control">
  <label className="label">
    <span className="text-[#403F3F] text-[20px] font-semibold">Your Name</span>
  </label>
  <input type="text" placeholder="Enter your name" name="name" className="input bg-[#F3F3F3] text-[#9F9F9F] mb-4" required />
</div>

<div className="form-control">
  <label className="label">
    <span className="text-[#403F3F] text-[20px] font-semibold">Photo URL</span>
  </label>
  <input type="text" placeholder="Enter your photo URL" name="photo" className="input bg-[#F3F3F3] text-[#9F9F9F] mb-4" required />
</div>

<div className="form-control">
  <label className="label">
    <span className="text-[#403F3F] text-[20px] font-semibold">Email address</span>
  </label>
  <input type="email" placeholder="Enter your email address" name="email" className="input bg-[#F3F3F3] text-[#9F9F9F] mb-4" required />
</div>

<div className="form-control">
  <label className="label">
    <span className="text-[#403F3F] text-[20px] font-semibold">Password</span>
  </label>
  <input type="password" placeholder="Enter your password" name="password" className="input bg-[#F3F3F3] text-[#9F9F9F]" required />
  <label className="label">
    <div className="flex items-center gap-2">
      <input type="checkbox" name="checkbox" id="1243345" />
      <p className="text-[#706F6F] text-[16px]">Accept <span className="font-semibold">Term & Conditions</span></p>
    </div>
  </label>
</div>
<div className="form-control mt-6">
  <button className="btn bg-[#403F3F] text-white text-xl font-semibold">Register</button>
</div>
<p className="text-center mt-6 text-[#706F6F] font-semibold">Already Have An Account? <Link to='/login'><span className="text-[#F75B5F] text-[16px] font-semibold">Login</span></Link></p>
</form>
    </div>



  </div>
  );
};

export default Register;