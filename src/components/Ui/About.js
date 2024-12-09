import React from 'react'
import "../styles/About.css"
import about from "../images/about.jpg"

const chooseData = [
  {
    icon:"ri-pulse-line",
    title:"Increasing Conversion Rates",
    desc:"Implemented advanced  scoring and nurturing techniques that significantly improved conversion rates for clients in various industries."
  },
  {
    icon:"ri-advertisement-line",
    title:"Optimizing Ad Spend",
    desc:" Efficiently allocated and managed advertising budgets, resulting in reduced cost-per- and increased return on ad spend (ROAS)."
  },
  {
    icon:"ri-steering-fill",
    title:"Driving Engagement",
    desc:"Developed and executed social media campaigns that saw a substantial increase in user engagement, including likes, shares, and comments."
  }
]

const About = () => {
  return (
    <section id='about'>
      <div className="container">
        <div className="about_wrapper">
          <div className="about_content">
          <h1 className="subtitle">Why choose us</h1>
          <h2 className='h2'>Our team excels in creating and implementing effective strategies that drive business growth.</h2>
          <h2 className="highlight">By leveraging a mix of organic and paid channels,</h2>

           <div className="choose_item-wrapper">
           {
                chooseData.map((item,index)=>( <div className="choose_item">
                  <span className="choose_icon"><i class={item.icon}></i></span>
                  <div> <h4 className="choose_us-title">{item.title}</h4>
                <p className="description">{item.desc}</p>
                </div></div>
               ))
              }
           </div>
             
    
             

          </div>

          <div className="about_image"><img src={about} alt="" /></div>
        </div>
      </div>
    </section>
  )
}

export default About
