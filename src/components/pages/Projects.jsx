import './_projects.scss';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import PropTypes from 'prop-types';

import html from '../../images/html.png';
import css from '../../images/css.png';
import js from '../../images/js.png';
//import angular from '../../images/angular.png';
import gsapImg from '../../images/gsap.png';
import react from '../../images/react.png';
import node from '../../images/node.png';
import sass from '../../images/sass.png';
import git from '../../images/github.png';

import { Link } from 'react-router-dom';

const Projects = ( {nightMode} ) => {
  const listVanillaRef = useRef(null);
  const listFrameworksRef = useRef(null);

  useEffect(() => {
    const animateItems = () => {
      gsap.to([listVanillaRef.current.children, listFrameworksRef.current.children], {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.5,
        ease: 'power3.out',
      });
    };

    animateItems();
  }, []);

  return (
    <section className={`container-projects ${nightMode ? 'night-mode' : ''}`}>

      <article>

        <h2>HTML5 - CSS3 - JavaScript</h2>

        <ul className="list__vanilla" ref={listVanillaRef}>

          <li>
            <h3 className="project-title">Hogwarts</h3>
            <ul className="list__languages">
              <li>
                <img src={html} alt="" />
              </li>
              <li>
                <img src={css} alt="" />
              </li>
            </ul>
            <div className="container__video">
              <video src="https://res.cloudinary.com/do0s2lutu/video/upload/v1707071827/hogwarts-video_mjqx5u.mp4" controls></video>
            </div>
            <div className="container__info">
              <p>Primer proyecto básico utilizando únicamente HTML y CSS, con efectos, y animaciones sin utilizar JavaScript</p>
              <div className='container__links'>
                <Link to="https://github.com/Roissm90/HP-hogwarts" target='_blank' rel='noopener'>
                  <span>Front</span>
                  <img src={git} alt="" />
                </Link>
              </div>
            </div>
          </li>

          <li>
            <h3 className="project-title">Cocina</h3>
            <ul className="list__languages">
              <li>
                <img src={html} alt="" />
              </li>
              <li>
                <img src={css} alt="" />
              </li>
            </ul>
            <div className="container__video">
              <video src="https://res.cloudinary.com/do0s2lutu/video/upload/v1707071675/cocineta-video_k0d1fm.mp4" controls></video>
            </div>
            <div className="container__info">
              <p>Segundo proyecto también con HTML y CSS, esta vez tomando como inspiración una acedemia online de cocina.</p>
              <div className='container__links'>
                <Link to="https://github.com/Roissm90/cokking-project" target='_blank' rel='noopener'>
                  <span>Front</span>
                  <img src={git} alt="" />
                </Link>
              </div>
            </div>
          </li>

          <li>
            <h3 className="project-title">Ropa</h3>
            <ul className="list__languages">
              <li>
                <img src={html} alt="" />
              </li>
              <li>
                <img src={css} alt="" />
              </li>
            </ul>
            <div className="container__video">
              <video src="https://res.cloudinary.com/do0s2lutu/video/upload/v1707072001/ropa-video_m5g6kg.mp4" controls></video>
            </div>
            <div className="container__info">
              <p>Último proyecto realizado únicamente con HTML y CSS, esta vez simulando una pagina de venta de ropa.</p>
              <div className='container__links'>
                <Link to="https://github.com/Roissm90/shop-project" target='_blank' rel='noopener'>
                  <span>Front</span>
                  <img src={git} alt="" />
                </Link>
              </div>
            </div>
          </li>

          <li>
            <h3 className="project-title">Pokedex</h3>
            <ul className="list__languages">
              <li>
                <img src={html} alt="" />
              </li>
              <li>
                <img src={sass} alt="" />
              </li>
              <li>
                <img src={js} alt="" />
              </li>
            </ul>
            <div className="container__video">
              <video src="https://res.cloudinary.com/do0s2lutu/video/upload/v1707071977/pokemon-video_qu5umn.mp4" controls></video>
            </div>
            <div className="container__info">
              <p>Primer proyecto en el que uso JavaScript para hacer peticiones a una API de Pokémon, en la que creo la estructura del HTML a través de JavaScript.</p>
              <div className='container__links'>
                <Link to="https://github.com/Roissm90/Pokedex-project" target='_blank' rel='noopener'>
                  <span>Front</span>
                  <img src={git} alt="" />
                </Link>
              </div>
            </div>
          </li>

        </ul>
      </article>

      <article>

        <h2>Frameworks</h2>

        <ul className="list__frameworks" ref={listFrameworksRef}>

        <li>
            <h3 className="project-title">Final Fantasy</h3>
            <ul className="list__languages">
              <li>
                <img src={node} alt="" />
              </li>
              <li>
                <img src={react} alt="" />
              </li>
              <li>
                <img src={gsapImg} alt="" />
              </li>
            </ul>
            <div className="container__video">
              <video src="https://res.cloudinary.com/do0s2lutu/video/upload/v1707071798/ff-video_jzllh5.mp4" controls></video>
            </div>
            <div className="container__info">
              <p>Es mi primer proyecto con React, con peticiones a una API creada por mi con Node, en la que hago peticiones para mostrar los datos de la API, y un sistema de usuarios en el que se pueden crear desde la página de Registros, con un área personalizada en la cuál se guarda un progreso de partidas en relación al ID del usuario logueado. También incluyo animaciones con la librería GSAP.</p>
              <div className='container__links'>
                <Link to="https://github.com/Roissm90/My-First-React-Project" target='_blank' rel='noopener'>
                  <span>Front</span>
                  <img src={git} alt="" />
                </Link>
                <Link to="https://github.com/Roissm90/Node-DB-FF" target='_blank' rel='noopener'>
                  <span>Back</span>
                  <img src={git} alt="" />
                </Link>
              </div>
            </div>
          </li>

        </ul>

      </article>

    </section>
  )
}

Projects.propTypes = {
  nightMode: PropTypes.bool.isRequired, // Validación de PropTypes
};

export default Projects
