import React from 'react'
import '../style/Footer.css'
import footerImage from '../images/footerImage.png'

import { AiFillGithub } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { TiSocialTwitter } from 'react-icons/ti'

function Footer () {

    return (
        <section className="footer">
            <hr className="footer-seperator" />
            <section className="footer-info">

                <section className="footer-info-column">
                    <section className="footer-item">
                        <img className='footer-image' src={footerImage} alt="Man Analyzing Data" />
                    </section>      
                </section>

                <section className="footer-info-column">
                    <section className="footer-item">
                    </section>    
                </section>

                <section className="footer-info-column">
                    <section className="footer-item">
                    </section>    
                </section>

                <section className="footer-info-column">
                    <section className="footer-item">
                    </section>    
                </section>

        <section className="footer-info-column">
            <section className="footer-item">
                    <ul className="footer-links">
                        <li>    
                            <strong>Company</strong>
                        </li>
                            <br></br>
                        <li>
                            <a href="/about">About us</a>
                        </li>
                        <li>
                            <a href="/contact">Contact us</a>
                        </li>
                        <li>
                            <a href="/history">History</a>
                        </li>
                    </ul>
            </section> 
        </section>
        
      </section>
      <hr className="footer-seperator" />

        <div className='bottom-bar'>
            <div className='copyright'> &copy; 2021 Product Club 5</div>
            <div className='social-icon-label'> Follow us</div>
        </div>

      <div className='social-icons'>
        <AiFillGithub />
        <FaFacebookF />
        <TiSocialTwitter />
      </div>

    </section>
    )
}

export default Footer