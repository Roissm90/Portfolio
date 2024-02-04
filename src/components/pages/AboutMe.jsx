import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './_aboutMe.scss';
import gsap from 'gsap';
import PropTypes from 'prop-types';

import schoolImg from '../../images/school_logo.png';
import bootcampImg from '../../images/upgradehub_logo.jpg';
import logoGit from '../../images/logo-git.png';
import logoLinkedin from '../../images/logo-linkedin.png';
import schoolPhoto from '../../images/sanjose_photo.jpg';
import upgradePhoto from '../../images/upgrade_photo.jpg';

import cvPdf from '../../files/cv.pdf';

const AboutMe = ({ nightMode }) => {
  const handleDownloadClick = () => {
    const confirmed = window.confirm('Se abrirá otra página con el archivo CV.pdf. ¿Quiere continuar?');
    if (confirmed) {
      window.open(cvPdf, '_blank');
    }
  };

  const listInfoRef = useRef(null);
  const listCentersRef = useRef(null);
  const listLinksRef = useRef(null);

  useEffect(() => {
    
    const animateItems = () => {
      gsap.to([listInfoRef.current.children, listCentersRef.current.children, listLinksRef.current.children], {
        scale: 1,
        duration: .5,
        stagger: .5,
        ease: 'power3.out',
      });
    };
    
    animateItems();
  }, []);

  return (
    <main className={`container__aboutMe ${nightMode ? 'night-mode' : ''}`}>
      <section className="sctn-info">
        <ul className="list-info" ref={listInfoRef}>
          <li>Hola, soy <h1>Santiago Martínez Rois</h1></li>
          <li>Nací en Madrid, el 30/04/1990</li>
          <li>Soy Web Developer enfocado al Front-End, como tal me esfuerzo por un buen acabado de mis proyectos</li>
          <li>Me apasiona todo lo referente a la maquetacion y efectos en los proyectos en los que trabajo, creo firmemente en la importancia de las webs  dinámicas y atractvias para el usuario</li>
          <li>Como Web Developer, estoy comprometido con el aprendizaje continuo y seguir explorando nuevas tecnologías y participar en proyectos  desafiantes que me permitan crecer profesionalmente y contribuir al éxito de mi equipo.</li>
          <li>Aquí te dejo mi CV por si quieres echarle un vistazo. <a href="#" onClick={handleDownloadClick}>CV</a></li>
        </ul>
      </section>
      <section className="sctn-studies">
        <h2>Estudios:</h2>
        <ul className="list-centers" ref={listCentersRef}>
          <li>
            <h3>Bachillerato Superior CC.SS.</h3>
            <Link to="https://sanjosedebegona.es/" target='_blank' rel="noreferrer">
              <span>Colegio San José de Begoña</span>
              <img src={schoolImg} alt="Imagen del Colegio San José de Begoña" />
              <img src={schoolPhoto} alt="" />
            </Link>
          </li>
          <li>
            <h3>Bootcamp Full Stack Developer</h3>
            <Link to="https://www.upgrade-hub.com/" target='_blank' rel="noreferrer">
              <span>Upgrade-Hub</span>
              <img src={bootcampImg} alt="Imagen del centro de estudios Upgrade-Hub" />
              <img src={upgradePhoto} alt="" />
            </Link>
          </li>
        </ul>
      </section>
      <section className='sctn-links'>
        <h2>Social</h2>
        <ul className="list-links" ref={listLinksRef}>
          <li><Link to="https://github.com/Roissm90" target='_blankl' rel='noopener'><img src={logoGit} alt="" /></Link></li>
          <li><Link to="https://www.linkedin.com/in/roissm90/" target='_blankl' rel='noopener'><img src={logoLinkedin} alt="" /></Link></li>
        </ul>
      </section>
    </main>
  )
}
AboutMe.propTypes = {
  nightMode: PropTypes.bool.isRequired, // Validación de PropTypes
};

export default AboutMe;
