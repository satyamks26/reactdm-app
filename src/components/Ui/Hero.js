import React from 'react'
import '../styles/Hero.css'
import heroDarkImg from '../images/hero-img.png'

const Hero = () => {
  return (
    <section className='hero_section' id='home'>
      <div className='container'>
        <div className='hero_wrapper'>
            <div className='hero_content'>
              <div>
              <h2>We have perfect digital solutions to promote</h2>
              <h2 className='spann'> your brand </h2>
              </div>
               <p className='description'>Your Partner in Digital Marketing Join the many businesses that trust Pros for their Digital Marketings needs. Start seeing results today!

               </p>
               <div className='hero_btns'>
                <button className='primary_btn'>Get started</button>
                <button className='secondry_btn'>Discover More</button>
               </div>

                
            </div>
            
            <div className='hero_image'>
              <img src={heroDarkImg} alt='hero'/>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
