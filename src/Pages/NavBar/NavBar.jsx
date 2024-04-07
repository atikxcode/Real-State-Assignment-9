import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import 'animate.css';

const NavBar = () => {

  const [user, setUser] = useState(false)

  const navLinks = <>
  <li><NavLink to='/'>Home</NavLink></li>
  <li><NavLink to='/updateprofile'>Update Profile</NavLink></li>
  <li><NavLink to='/about'>About</NavLink></li>
  <li><NavLink to='/contact'>Contact</NavLink></li>
  </>
  return (
    <div className="container mx-auto mb-10 mt-10">
     <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold">
        
        {navLinks}
      </ul>
    </div>
    <h2 className="font-bold text-2xl animate__animated animate__backInLeft">Elite Shores Escapes</h2>
  </div>
  <div className="navbar-center hidden lg:flex">
  <ul className="menu menu-horizontal px-1 font-semibold">
      
  {navLinks}
    </ul>
  </div>
  <div className="navbar-end gap-4">
  <div className="avatar">
  <div className="w-12 rounded-full">
    <img src='' />
  </div>
  
</div>
    {
      user ? 
      <button  className="btn">Sign Out</button>
      : <Link to='/login'><button className="btn">Login</button></Link>
    }
  </div>
</div>
    </div>
  );
};

export default NavBar;