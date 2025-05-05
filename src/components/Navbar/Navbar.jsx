import React, { useEffect, useRef } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search_icon.png';
import profile from '../../assets/profile.png';
import drop_down from '../../assets/drop_down.png';
import bell from '../../assets/bell.png';

const Navbar = () => {
  const navRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        navRef.current.classList.add('navbar-black');
      } else {
        navRef.current.classList.remove('navbar-black');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='navbar' ref={navRef}>
      <div className='navbar-left'>
        <img src={logo} alt='logo' style={{ width: '100px', height: 'auto' }} />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>Latest & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className='navbar-right'>
        <img src={search_icon} alt='search_icon' className='icons' style={{ width: '20px', height: 'auto' }} />
        <p>Children</p>
        <img src={bell} alt='bell' className='icons' style={{ width: '20px', height: 'auto' }} />
        <div className='navbar_profile'>
          <img src={profile} alt='profile' className='profile' style={{ width: '35px', height: 'auto' }} />
          <img src={drop_down} alt='drop_down' style={{ width: '20px', height: 'auto' }} />
          <div className="dropdown">
            <p>Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;