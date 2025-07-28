import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        {/* Logo/Brand */}
        <Link to="/" className={styles.navBrand}>
          <img 
            src="/logo.svg" 
            alt="Dine Delicious Logo" 
            className={styles.logo}
          />
          <span>Dine Delicious</span>
        </Link>

        {/* Mobile Menu Button */}
        <div className={styles.mobileMenuButton} onClick={toggleMenu}>
          <div className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className={`${styles.navLinks} ${isOpen ? styles.show : ''}`}>
          <ul>
            <li>
              <NavLink 
                to="/dashboard" 
                className={({ isActive }) => 
                  isActive ? styles.activeLink : styles.navLink
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/menu" 
                className={({ isActive }) => 
                  isActive ? styles.activeLink : styles.navLink
                }
              >
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/tables" 
                className={({ isActive }) => 
                  isActive ? styles.activeLink : styles.navLink
                }
              >
                Tables
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/orders" 
                className={({ isActive }) => 
                  isActive ? styles.activeLink : styles.navLink
                }
              >
                Orders
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/bills" 
                className={({ isActive }) => 
                  isActive ? styles.activeLink : styles.navLink
                }
              >
                Billing
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/customers" 
                className={({ isActive }) => 
                  isActive ? styles.activeLink : styles.navLink
                }
              >
                Customers
              </NavLink>
            </li>
          </ul>
        </div>

        {/* User Profile/Login */}
        <div className={styles.userSection}>
          <NavLink 
            to="/profile" 
            className={styles.profileLink}
          >
            <span>Admin</span>
            <div className={styles.profileIcon}>
              <img 
                src="/user-avatar.png" 
                alt="User  profile" 
              />
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
