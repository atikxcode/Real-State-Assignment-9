import { Link } from "react-router-dom";
import 'animate.css';
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {

  const {signIn} = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = e => {
    e.preventDefault();

    signIn(email, password)
    .then(result => {
      console.log(result.user)
      setEmail('')
      setPassword('')
    })
    .catch(error => {
      console.error(error)
    })
  
  }


  return (
    <div className="my-24 animate__animated animate__flipInX">
      
      
      <div>
      <h2 className="my-10 text-center text-[#403F3F] text-[35px] font-semibold">Login your account</h2>
      

  <form className="md:3/4 lg:w-1/2 mx-auto" onSubmit={handleLogin}>
  <div className="form-control">
    <label className="label">
      <span className="text-[#403F3F] text-[20px] font-semibold">Email address</span>
    </label>
    <input type="email" placeholder="Enter your email address" name="email" className="input bg-[#F3F3F3] text-[#9F9F9F] mb-4" value={email} onChange={e => setEmail(e.target.value)} required />
  </div>
  <div className="form-control">
    <label className="label">
      <span className="text-[#403F3F] text-[20px] font-semibold">Password</span>
    </label>
    <input type="password" placeholder="Enter your password" name="password" className="input bg-[#F3F3F3] text-[#9F9F9F]" value={password} onChange={e => setPassword(e.target.value)} required />
    <label className="label">
      <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
    </label>
  </div>
  <div className="form-control mt-6">
    <button className="btn bg-[#403F3F] text-white text-xl font-semibold">Login</button>
  </div>
  <p className="text-center mt-6 text-[#706F6F] font-semibold">Don't Have An Account? <Link to='/register'><span className="text-[#F75B5F] text-[16px] font-semibold">Register</span></Link></p>
</form>
      </div>

 
  
    </div>
  );
};

export default Login;