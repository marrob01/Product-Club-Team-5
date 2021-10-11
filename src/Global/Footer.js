import React from 'react'
import '../style/Footer.css'

function Footer () {

    return (
        <section className="footer">
      <hr className="footer-seperator" />
      <section className="footer-info">

        <section className="footer-info-column">
          <section className="footer-item">
              logo goes here
          </section>      
        </section>

        <section className="footer-info-column">
            <section className="footer-item">
            </section>    
        </section>

        <section className="footer-info-column">
            <section className="footer-item">
                <strong>Mobile app</strong>
            </section>
            <section className="footer-item">
                Features
                <br />
                Live share
                <br />
                Video record
            </section>        
        </section>

        <section className="footer-info-column">
            <section className="footer-item">
                <strong>Community</strong>
            </section>
            <section className="footer-item">
                Featured artists
                <br />
                The Portal
                <br />
                Live events
            </section> 
        </section>

        <section className="footer-info-column">
            <section className="footer-item">
                <strong>Company</strong>
            </section>
            <section className="footer-item">
                About us
                <br />
                Contact us
                <br />
                History
            </section> 
        </section>
        
      </section>
      <hr className="footer-seperator" />
    </section>
    )
}

export default Footer