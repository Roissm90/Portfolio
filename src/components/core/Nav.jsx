import { useState } from 'react';
import { Link } from 'react-router-dom';
import './_nav.scss';
import ProfileImg from '../../images/profile.png';
import PropTypes from 'prop-types';

const Nav = ({ nightMode, toggleNightMode }) => {
  const [showPopup, setShowPopup] = useState(false);
  

  const togglePopup = () => {
    setShowPopup(!showPopup);
    if (!showPopup) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  };

  return (
    <nav className={`side-nav ${nightMode ? 'night-mode' : ''}`}>
      <div className="container__img" onClick={togglePopup}>
        <img src={ProfileImg} alt="" />
      </div>
      {showPopup && (
        <div className="popup" onClick={togglePopup}>
          <div><img src={ProfileImg} alt="Profile" /></div>
        </div>
      )}
      <ul className='nav-list'>
        <li className='nav-item'><Link to='/'>Sobre mí</Link></li>
        <li className='nav-item'><Link to='/skills'>Skills</Link></li>
        <li className='nav-item'><Link to='/proyectos'>Proyectos</Link></li>
      </ul>
      <button className='night-mode' onClick={toggleNightMode}>
        <span>{nightMode ? 'Día' : 'Noche'}</span> 
        <div className='container__move-button'>
          <div className={`moved-button ${nightMode ? 'right' : ''}`}></div>
        </div>
      </button>
    </nav>
  );
};
Nav.propTypes = {
  toggleNightMode: PropTypes.func, // Validación de PropTypes
  nightMode: PropTypes.bool.isRequired, // Validación de PropTypes
};

export default Nav;
