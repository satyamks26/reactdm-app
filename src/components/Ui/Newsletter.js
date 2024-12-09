import React from 'react'
import '../styles/Newsletter.css'

const Newsletter = () => {
  return (
    <section className='newsletter'>
        <div className="container">
            <div className="newsletter_wrapper">
                <div className="newsletter_content">
                    <h3 className="subtitle">Lets work together</h3>
                    <h2>Explore the <span className="highlighta"> solid </span> ideas and subscribe!</h2>
                </div>
                <div className="newsletter_form">
                    <input type="email" placeholder='Email' />
                    <button className="secondry_btn">Subscribe Now</button>
                </div>
            </div>
        </div>
      
    </section>
  )
}

export default Newsletter
