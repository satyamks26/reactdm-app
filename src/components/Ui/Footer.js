import React from 'react'
import '../styles/Footer.css'


const quickLinks01 = [
    {
        path:'#',
        display:"Marketing"
    },
    {
        path:'#',
        display:"Analytics"
    },
    {
        path:'#',
        display:"Sales"
    }
]
const quickLinks02 = [
    {
        path:'#',
        display:"Pricing"
    },
    {
        path:'#',
        display:"Documentation"
    },
    {
        path:'#',
        display:"Guide"
    }
]
const quickLinks03 = [
    {
        path:'#',
        display:"Blogs"
    },
    {
        path:'#',
        display:"Projects"
    },
    {
        path:'#',
        display:"Contact-us"
    }
]
const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <footer className='footer'>
        <div className="container">
                <div className="footer_wrapper">
                    <div className="footer_logo">
                        <h2 className='h2'> Site  <span> Partner </span></h2>
                        <p className="description">Grow your Business</p>

                        <p className="small_text-description">We excels in creating and implementing effective strategies that drive business growth. By leveraging a mix of organic and paid channels.</p>
                    </div>
                    <div className="footer_quick-links">
                        <h3 className="quick_links-title">Solution</h3>
                        <ul className="quick_links">
                            {quickLinks01.map((item,index)=>(
                                <li className="quick_link-item" key={index}>
                                    <a href={item.path}>{item.display}</a>
                                    </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer_quick-links">
                        <h3 className="quick_links-title">Support</h3>
                        <ul className="quick_links">
                            {quickLinks02.map((item,index)=>(
                                <li className="quick_link-item" key={index}>
                                    <a href={item.path}>{item.display}</a>
                                    </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer_quick-links">
                        <h3 className="quick_links-title">Company</h3>
                        <ul className="quick_links">
                            {quickLinks03.map((item,index)=>(
                                <li className="quick_link-item" key={index}>
                                    <a href={item.path}>{item.display}</a>
                                    </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <p className="copyright">Copyright {year}, developed by kumar Satyam.
                    All rights reserved.
                </p>
        </div>
      
    </footer>
  )
}

export default Footer
