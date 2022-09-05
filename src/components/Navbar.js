/* eslint react/prop-types: 0 */
import React from 'react';
import { NavLink, useMatch, useResolvedPath } from 'react-router-dom';
import styles from './styles/Navbar.module.css';
import image from './assets/planet.png';

const Navbar = () => (
  <div className={styles.navbarCont}>
    <header className={styles.navHeader}>

      <div className={styles.headerTitle}>
        <img src={image} alt="planet" className={styles.planet} />
        <p className={styles.navTitle}>Space Traveler&apos;s Hub</p>
      </div>
      <nav className={styles.navBar}>
        <ul>
          <CustomeLink to="/">Rockets</CustomeLink>
          <CustomeLink to="/dragons">Dragons</CustomeLink>
          <CustomeLink to="/missions">Missions</CustomeLink>
          <CustomeLink to="/my-profile">My Profile</CustomeLink>
        </ul>
      </nav>
    </header>
  </div>
);

const CustomeLink = ({ to, children }) => {
  const resolvePath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvePath.pathname, end: true });

  return (
    <li className={styles[isActive ? 'activeLink' : '']}>
      <NavLink to={to}>
        {children}
      </NavLink>
    </li>

  );
};

export default Navbar;
