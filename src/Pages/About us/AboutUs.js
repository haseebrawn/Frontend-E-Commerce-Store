import React from 'react';
import  './AboutUs.css';

const AboutUs = () => {
  return (
   <section className="aboutus-section">
    <div className="about-page">
        <header className="about-header">
          <h1 className="aboutheader-title">About us</h1>
        </header>
        <div className="about-paragraph">
           <p>We believe that fashion should be fun, spontaneous, daring and shared with friends and so we built a new kind of store that Pakistan has never seen before. Rad is not only unique in its product offering but is also revolutionary in terms of operations. Our extraordinary and creative design team is constantly producing new collections. We launch collections on a weekly basis and last but not least, everything we sell is hand-produced once your order is being placed. All of our clothing line is being manufactured in our own factories located in Lahore & Faisalabad. We ship all over Pakistan using cash on delivery method.</p>
           <p><strong>Stay in Touch</strong></p>
           <p>New products will be added on a regular basis so please be sure to like our&nbsp; 
           <a href="#">facebook page&nbsp;</a>
            to get notified.</p>
        </div>
    </div>
   </section>
  )
}

export default AboutUs
