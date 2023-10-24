import React from 'react'
import './intro.css';
// import bg from "../../assets/myphoto2.jpeg"
import { Link } from 'react-scroll';
import btnImg from "../../assets/hireme.png"

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Rishabh</span> <br/> Website Designer</span>
            <p className='introPara'>I am a skilled front end web designer with experience in <br/> creating visually appealing and user friendly websites.</p>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500}><button className='btn'><img src={btnImg} alt='hire me' className='btnImg' /> Hire Me</button></Link>
        </div>
        {/* <img src={bg} alt='profile' className='bg'></img> */}
    </section>
  )
}

export default Intro