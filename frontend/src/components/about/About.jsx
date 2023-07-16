import React from 'react';
import './About.css';
import aboutme from '../../assets/aboutme.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { RiFoldersLine } from 'react-icons/ri'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={aboutme} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>6+ Month Coding Exp.</small>

            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>2 worldwide</small>

            </article>

            <article className='about__card'>
              <RiFoldersLine className='about__icon' />
              <h5>Projects</h5>
              <small>8 completed</small>

            </article>
          </div>

          <p>I am rajkumar jangam from india. I am a fullstack software developer skilled in both frontend and backend development, focused on creating clean and user friendly web applications. I am passionate about building excellent softwares that improve lives of those around me.</p>
          <a href='#contact' className='btn btn-primary'>Lets Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About