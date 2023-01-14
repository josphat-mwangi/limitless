import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from '../../styles/navbar.module.scss'




const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [visible, setVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    const handleScroll = () => {
        const currentScrollPos = window.scrollY;
    
        if (currentScrollPos > prevScrollPos) {
          setVisible(false);
        } else {
          setVisible(true);
        }
    
        setPrevScrollPos(currentScrollPos);
    };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    });
  return (
    <div className={visible ? `${styles['header']}` : `${styles['header']} ${styles['header__invisible']}`}>
      <div className={styles.header__container}>
        <div className={styles.logo}>
          {/* <Link to='/'> */}
            <img src='/assets/logo.png' alt='company logo' />
          {/* </Link> */}
        </div>
        <div className={`${styles['navbar']} ${isOpen && styles.navbar__open}`}>
          <ul className={styles.nav__links}>
            <li>
              <Link href="/" id={styles.home}>
                Home
              </Link>
             
            </li>
            <li>
              <Link href="/about" >
                About
              </Link>
            </li>
            <li>
              <Link href="/products" >
                Products
              </Link>
            </li>
            <li className='responsive__links'>
              <Link href="/services" >
                Services
              </Link>
            </li>
            <li className='responsive__links'>
              <Link href="/career" >
                Career
              </Link>
            </li>
            <li className='responsive__links'>
              <Link href="/contact" >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div
          className={`${styles['hamburger']} ${isOpen && styles.navbar__open}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={styles.bars}></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
