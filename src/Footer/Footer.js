import React from 'react';
import { useNavigate } from 'react-router-dom';
import instaImg from "../Contact/instagram.png";
import fbImg from "../Contact/facebook.png";
import lnkdImg from "../Contact/linkedin.png";
import './footer.css';

function Footer(){
  const navigate= useNavigate()
    return(
      <>
      <div className='footer'>
          <div className='about_us'>
          
            <h2>Mechanical Web</h2>
            <p >This blog contains real time interview questions for different languages. 
              The most latest and frequently asked question for experienced candidates 
              and freshers as well. Hope this will come effective to you all. Thanks 
              and please provide your valualble comments and feedback.

            </p>
            <div className='footerImg'>
            <a href="https://www.instagram.com" target="_blank">
          <img src={instaImg} alt="my insta handle"></img>
        </a>
        <a href="https://www.facebook.com/" target="_blank">
          <img
            src={fbImg}
            alt="my fb handle"
          
          ></img>
        </a>
        <a href="https://www.linkedin.com/in" target="_blank">
          <img src={lnkdImg} alt="my linkedin handle"></img>
        </a>
            </div>
          </div>
          <div className='services'>
            <h2>Services</h2>
            
              <p><a href='/jstheory/#tag'>Javascript</a></p>
              <p><a href='/jscoding/#tag'>JS coding</a></p>
              <p>dotNet</p>
              <p>HTML</p>
              <p>CSS</p>
            
          </div>
            
        </div>
        <div className='footerCR'><p>© Copyright @ 2023 Mechanical Web.</p></div>
      </>       
    );
}

export default Footer;