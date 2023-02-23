import React from 'react';
import Header from '../Header/Header';
import './Hero.css';
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import NumberCounter from 'number-counter'
import {motion} from 'framer-motion'

 const Hero = () => {
  
  const transition = {type: 'spring', duration: 3};
  const mobile = window.innerWidth<=768 ? true: false;
   return (
     <div className='hero' id='home'>
      <div className="blur hero-blur"></div>
        <div className="left-h">
            <Header/>
            {/* the best ad*/}
            <div className="the-best-ad">
              <motion.div
              initial={{left: mobile? "165px": '238px' }}
              whileInView={{left: '8px'}}
              transtion= {{...transition, type:'tween'}}
              ></motion.div>
              <span>The Best Fitness Club in Town</span>
            </div>
            {/* Hero Heading*/}
            <div className="hero-text">
              <div>
               <span>Get </span>
               <span className='stroke-text'>Fit</span>
             </div>
          <div>
              <span>Get </span>
              <span className='stroke-text'>Healthy</span>
          </div>
         <div>
            <span>Love workouts!!! It has to be us, ultimate body transformation and superlative gym experience.</span>
         </div>
         </div>
         {/* figures*/}
         <div className="figures">
          <div>
            <span><NumberCounter end={40} start={5} delay='4' prefix='+'/></span>
            <span>expert coachs</span>
          </div>
          <div>
            <span>+544</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+20</span>
            <span>fitness programs</span>
            </div>
         </div>
         {/* hero buttons */}
         <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
         </div>
        </div>
      

        
       <div className="right-h">
        <button className="btn">Join Now</button>

        <motion.div 
        initial={{right: '-1rem'}}
        whileInView={{right: '4rem'}}
        transition={transition}
        className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span><span>116 bpm</span>
        </motion.div>
        {/* Hero images */}

        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
        initial={{right:'11rem'}}
        whileInView={{right: '20rem'}}
        transition={transition}
         src={hero_image_back} alt= "" className="hero-image-back" />

        {/* Calories */}
        <motion.div
        initial={{right: '37rem'}}
        whileInView={{right: '28rem'}}
        transition={transition}
        className="calories">
        <img src={Calories} alt="" />
        <div>
         <span>Calories Burned</span>
         <span>230 kcal</span>
        </div>
        </motion.div>
       </div>

      </div>
   );
 }
 
 export default Hero