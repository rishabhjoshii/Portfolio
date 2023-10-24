import React from 'react';
import "./works.css";
// import Portfolio1 from "../../assets/portfolio-1.png"
// import Portfolio2 from "../../assets/portfolio-2.png"
// import Portfolio3 from "../../assets/portfolio-3.png"
// import Portfolio4 from "../../assets/portfolio-4.png"
// import Portfolio5 from "../../assets/portfolio-5.png"
// import Portfolio6 from "../../assets/portfolio-6.png"

import Portfolio1 from "../../assets3/tictactoe.png"
import Portfolio2 from "../../assets3/todoapp.png"
import Portfolio3 from "../../assets3/whetherapp.jpg"
import Portfolio4 from "../../assets3/comingsoon.png"
import Portfolio5 from "../../assets3/comingsoon.png"
import Portfolio6 from "../../assets3/comingsoon.png"

const Works = () => {
  return (
    <section id='works'>
      <h2 className='worksTitle'>My Portfolio</h2>
      <span className='worksDesc'>Welcome to my portfolio, a visual journey through my creative endeavors. Here, you'll find a collection of projects that represent my passion for design and innovation.Each project reflects my dedication to delivering compelling solutions. Explore my work and get a glimpse of the skills and ideas that drive me.</span>
      <div className='worksImgs'>
        <a href='https://javascript-projects-six-rho.vercel.app/' target='_blank' className='worksImgcard'><img src={Portfolio1} alt='image' className='worksImg'/></a>
        <a href='https://to-do-list-one-taupe.vercel.app/' target='_blank' className='worksImgcard'><img src={Portfolio2} alt='image' className='worksImg'/></a>
        <a href='https://weather-app-lac-rho.vercel.app/' target='_blank' className='worksImgcard'><img src={Portfolio3} alt='image' className='worksImg'/></a>
        {/* <a className='worksImgcard'><img src={Portfolio4} alt='image' className='worksImg'/></a> */}
        {/* <a className='worksImgcard'><img src={Portfolio5} alt='image' className='worksImg'/></a>
        <a className='worksImgcard'><img src={Portfolio6} alt='image' className='worksImg'/></a> */}
      </div>
      <button className='worksBtn'>See More</button>
    </section>
  )
}

export default Works;