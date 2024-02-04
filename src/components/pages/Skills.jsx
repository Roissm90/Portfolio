import { useEffect } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';

import html from '../../images/html.png';
import css from '../../images/css.png';
import js from '../../images/js.png';
import angular from '../../images/angular.png';
import react from '../../images/react.png';
import gsapImg from '../../images/gsap.png';
import node from '../../images/node.png'
import sass from '../../images/sass.png';
import vs from '../../images/vs.png';
import './_skills.scss';


const Skills = ({ nightMode }) => {
  useEffect(() => {
    const progressBars = document.querySelectorAll('.progress-bar');

    const widthMap = {
      'bar-html': '90px',
      'bar-css': '90px',
      'bar-js': '70px',
      'bar-angular': '50px',
      'bar-react': '60px',
      'bar-gsap': '30px',
      'bar-node': '30px',
      'bar-sass': '90px',
      'bar-vs': '95px',
    };

    progressBars.forEach(bar => {
      const secondClass = bar.parentElement.className.split(' ')[1]; // Obtener la segunda clase
      bar.style.width = widthMap[secondClass];
      gsap.fromTo(bar, { width: '0px' }, { width: widthMap[secondClass], duration: 5, ease: 'linear', repeat: 0, yoyo: false, onComplete: () => {
        bar.style.width = widthMap[secondClass]; // Establecer el ancho al valor final al completar la animación
      }});
    });
  }, []);

  return (
    <section className={`sctn-skills ${nightMode ? 'night-mode' : ''}`}>
      <article className='art-languages'>
        <h2>Lenguajes</h2>
        <ul className="list-languages">
          <li>
            <img src={html} alt="" />
            <div className='container__progress-bar bar-html'><div className='progress-bar hmtl'></div></div>
          </li>
          <li>
            <img src={css} alt="" />
            <div className='container__progress-bar bar-css'><div className='progress-bar css'></div></div>
          </li>
          <li>
            <img src={js} alt="" />
            <div className='container__progress-bar bar-js'><div className='progress-bar js'></div></div>
          </li>
        </ul>
      </article>
      <article className="art-frameworks">
        <h2>Librerías y Frameworks</h2>
        <ul className="list-frameworks">
          <li>
            <img src={angular} alt="" />
            <div className='container__progress-bar bar-angular'><div className='progress-bar angular'></div></div>
          </li>
          <li>
            <img src={react} alt="" />
            <div className='container__progress-bar bar-react'><div className='progress-bar react'></div></div>
          </li>
          <li>
            <img src={gsapImg} alt="" />
            <div className='container__progress-bar bar-gsap'><div className='progress-bar gsap'></div></div>
          </li>
          <li>
            <img src={node} alt="" />
            <div className='container__progress-bar bar-node'><div className='progress-bar node'></div></div>
          </li>
        </ul>
      </article>
      <article className="art-tools">
        <h2>Herramientas</h2>
        <ul className="list-tools">
          <li>
            <img src={sass} alt="" />
            <div className='container__progress-bar bar-sass'><div className='progress-bar sass'></div></div>
          </li>
          <li>
            <img src={vs} alt="" />
            <div className='container__progress-bar bar-vs'><div className='progress-bar vs'></div></div>
          </li>
        </ul>
      </article>
      <article className="art-soft__skills">
        <h2>Soft Skills</h2>
        <ul className="list-soft__skills">
          <li>Reconocimiento y gestión de conflictos</li>
          <li>Experiencia en el trato con clientes</li>
          <li>Espíritu de equipo</li>
          <li>Comunicación efectiva</li>
          <li>Atención al detalle</li>
          <li>Pensamiento crítico</li>
          <li>Empatía</li>
          <li>Adaptabilidad</li>
        </ul>
      </article>
    </section>
  )
}
Skills.propTypes = {
  nightMode: PropTypes.bool.isRequired, // Validación de PropTypes
};

export default Skills;
