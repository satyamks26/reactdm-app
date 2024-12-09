import React from 'react'
import '../styles/Blog.css'
import blogImg from '../images/blogs.png'
import blogAimg from '../images/BlogA.png'
import blogBimg from '../images/Blogb.png'


const blogData = [
  {
    imgUrl: blogImg,
    title:"Blogs",
    desc:"To know about work , Read...",
    linkUrl:'#'


  },
  {
    imgUrl: blogAimg,
    title:"Articles",
    desc:"To know about work , Read...",
    linkUrl:'#'


  },
  {
    imgUrl: blogBimg,
    title:"Newsletter",
    desc:"To know about work , Read...",
    linkUrl:'#'


  }
]

const Blog = () => {
  return (
    <section className='sectiona' id='blog'>
      <div className="container">
        <div className="blog_top-content">
            <h3 className="subtitle">Our blogs</h3>
            <h2>Lets have a look at some of our <span className="highlights">recent blogs</span></h2>
        </div>
        <div className="blog_wrapper">
          {
            blogData.map((item,index)=>(
              <div className="blog_item"> 
              <div className="blog_img">
              <h4 className='title'>{item.title}</h4>

                <img src={item.imgUrl} alt="" />
              </div>
              <div>
              <p className="description">{item.desc}</p>

                <a href="a" className='a'>
                <i class="ri-arrow-right-fill"></i>
                </a>
              </div>
            </div>
            ))
          }
           
        </div>
      </div>
    </section>
  )
}

export default Blog
