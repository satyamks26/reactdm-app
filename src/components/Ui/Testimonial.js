import React from 'react'
import Slider from 'react-slick'
import '../styles/Testimonial.css'

import av01 from "../images/ava-1.jpg"
import av02 from "../images/ava-2.jpg"
import av03 from "../images/ava-3.jpg"


const Testimonial = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay:true,
        autoplaySpeed:3000,
        slidesToShow: 1,
        slidesToScroll: 1 ,
        swipeToSlide:true
    }
  return (
    <section>
        <div className="container">
            <div className="slider_content_top">
                <h3 className="highlight">Testimonials</h3>
                <h2 className='para'>Trusted by more than 2000 customers</h2>
            </div>

        <div className="slider_wrapper">
        <Slider {...settings}>
            <div className="slider_item">
                <p className="descriptiona">
                    "" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita nulla fugit esse voluptate amet eveniet, error beatae harum odio sit?  ""   
                </p>
                <div className="customer_details">
                    <div className="customer_img">
                        <img src={av01} alt="" />
                    </div>
                    <div>
                        <h5 className="customer_name">Joseph</h5>
                        <p className="description">Consultant, Mindtree</p>
                    </div>
                </div>
            </div>

            <div className="slider_item">
                <p className="descriptiona">
                    "" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita nulla fugit esse voluptate amet eveniet, error beatae harum odio sit?  ""   
                </p>
                <div className="customer_details">
                    <div className="customer_img">
                        <img src={av02} alt="" />
                    </div>
                    <div>
                        <h5 className="customer_name">Tina</h5>
                        <p className="description">Ssd, Pesico</p>
                    </div>
                </div>
            </div>

            <div className="slider_item">
                <p className="descriptiona">
                    "" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita nulla fugit esse voluptate amet eveniet, error beatae harum odio sit?  ""   
                </p>
                <div className="customer_details">
                    <div className="customer_img">
                        <img src={av03} alt="" />
                    </div>
                    <div>
                        <h5 className="customer_name">Clarke</h5>
                        <p className="description">Buseness Owner</p>
                    </div>
                </div>
            </div>
        </Slider>
        </div>
       
      
        </div>
    </section>
  )
}

export default Testimonial
