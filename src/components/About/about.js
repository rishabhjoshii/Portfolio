import React from 'react'
import "./about.css"
import UIDesign from "../../assets/ui-design.png"
import webDesign from "../../assets/website-design.png"
import AppDesign from "../../assets/app-design.png"

const About = () => {
  return (
    <section id='about'>
        <span className='aboutTitle'>What I do</span>
        <span className='aboutDesc'>I am a skilled and passionate web designer with experience in creating visually appealing and user friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML,CSS, and Javascript. I also have good knowledge of Data Structures and Algorithms.</span>
        <div className='aboutBars'>
            <div className='aboutBar'>
                <img src={UIDesign} alt='UIDesign' className='aboutBarImg'/>
                <div className='aboutBarText'>
                    <h2>UI/UX Design</h2>
                    <p>I create visually appealing and user friendly interfaces.</p>
                </div>
            </div>

            <div className='aboutBar'>
                <img src={webDesign} alt='webDesign' className='aboutBarImg'/>
                <div className='aboutBarText'>
                    <h2>Website Design</h2>
                    <p>I mainly works on front end part.</p>
                </div>
            </div>

            <div className='aboutBar'>
                <img src={AppDesign} alt='AppDesign' className='aboutBarImg'/>
                <div className='aboutBarText'>
                    <h2>Problem Solving</h2>
                    <p>I'm a DSA practioner and have good knowledge of DSA.</p>
                </div>
            </div>

        </div>
    </section>
  )
}

export default About;