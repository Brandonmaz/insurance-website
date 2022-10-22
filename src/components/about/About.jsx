import React from 'react'
import './about.css'
import ME from '../../assets/introImg.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {AiOutlineFolderOpen} from 'react-icons/ai'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ years experience</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>60+</small>
            </article>
            <article className="about__card">
              <AiOutlineFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>
          </div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas repellat pariatur id. Rem amet ducimus inventore unde quibusdam deleniti accusantium numquam neque, corporis modi saepe, magnam optio aut delectus ullam.
          </p>
          <a href="#contact" className="btn btn__primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About