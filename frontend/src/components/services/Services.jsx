import React from 'react'
import './Services.css';
import {BsShieldFillCheck} from 'react-icons/bs';
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
             
             <ul className="service__list">
              <li>
              <BsShieldFillCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              </li>
              <li>
              <BsShieldFillCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              </li>
              <li>
              <BsShieldFillCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              </li>
              <li>
              <BsShieldFillCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              </li>
             </ul>
        </article>
{/* end of ui/ux card */}


        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
             
             <ul className="service__list">
              <li>
              <BsShieldFillCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              </li>
              <li>
              <BsShieldFillCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              </li>
              <li>
              <BsShieldFillCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              </li>
              <li>
              <BsShieldFillCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              </li>
             </ul>
        </article>
      {/* end of web development card */}


        <article className='service'>
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
             
             <ul className="service__list">
              <li>
              <BsShieldFillCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              </li>
              <li>
              <BsShieldFillCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              </li>
              <li>
              <BsShieldFillCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              </li>
              <li>
              <BsShieldFillCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              </li>
             </ul>
        </article>
      </div>
    </section>
  )
}

export default Services