import React, { useState,useEffect } from 'react'
import styles from './Navbar.module.css'
import { getImageUrl } from './../../utils.js';
import { MdClose, MdMenu  } from "react-icons/md";
import Education from './../Education/Education';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { // Adjust this value as needed
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`${styles.navbar} ${isSticky ? styles.sticky : ''}`}>
      <a href='/' className={`${styles.title} ${styles.brand}`}>
        <img className={styles.logoImg} src={getImageUrl('logo/DeveloperNay.png')} alt='logo' />
      </a>
      
      <div className={styles.menu}>
        <span className={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
          {
            menuOpen ? <MdClose   size={30} /> : <MdMenu   size={30} />
          }
        </span>
      
        
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
            <li>
                <a href='#about'>About</a>
            </li>
            <li>
                <a href='#education'>Education</a>
            </li>
            <li>
                <a href='#experience'>Experience</a>
            </li>
            <li>
                <a href='#project'>Project</a>
            </li>
            <li>
                <a href='#contact'>Contact</a>
            </li>
        </ul>
        
      </div>
      
    </nav>
  )
}

export default Navbar
