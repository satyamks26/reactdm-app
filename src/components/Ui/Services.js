import React from 'react'
import '../styles/Services.css'

const serviceData = [
    {
        icon:"ri-google-fill",
        title:"Google Ads",
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente explicabo voluptatem pariatur repellat atque alias consequatur' 
    },
    {
        icon:"ri-facebook-circle-fill",
        title:"Facebook Ads",
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente explicabo voluptatem pariatur repellat atque alias consequatur' 
    },
    {
        icon:"ri-instagram-fill",
        title:"Instagram Ads",
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente explicabo voluptatem pariatur repellat atque alias consequatur' 
    },
    {
        icon:"ri-apps-2-fill",
        title:"Specific Ads ",
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente explicabo voluptatem pariatur repellat atque alias consequatur' 
    }
]
const Services = () => {
  return (
    <section id="service">
        <div className="container">
            <div className="service_top-content">
                <h1 className="subtitle">Our Services</h1>
                <h2>Save your precious time,</h2>
                <h2 className="highlight">With our best services</h2>
            </div>
            <div className="service_item-wrapper">
                {serviceData.map((item,index)=>(
                    <div className="services_item">
                    <span className="service_icon"><i class={item.icon}></i></span>
                    <h3 className="service_title">{item.title}</h3>
                    {/* <p className="description">{item.des} </p> */}
                </div>
                ))}
                
            </div>
        </div>
    </section>
      
    
  )
}

export default Services
