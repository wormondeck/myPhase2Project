import React from 'react';
import NavBar from "./NavBar";

function Contact() {
    return (
        <div>
          <header>
            <NavBar />
          </header>
          <h2 className='some-padding'>Contact Us</h2>
          <p className='about-container'>
           Need to reach out to us? Shoot us an email at <span style={{ color: 'green', fontWeight: 'bold' }}>doNotShootUsAtThisEmailWeAreNotLegit@NotAnExample.com</span> and do not prepare for a rollercoaster of emotions. Our inbox is not like a black hole, and has no memes or physics equations. 
          </p>
          <p className='about-container'>
           Warning: Emailing us may cause uncontrollable bursts of errors, sudden urges to file a complaint, and occasional existential crises. But don't worry, our team of highly trained pigeons won't be standing by to deliver your unarrived messages with care (and a dash of sarcasm).
          </p>
          <p className='about-container'>
           So go ahead, don't be shy! Send us your questions, feedback, or just a picture of your pet hedgehog wearing a top hat. We promise you we won't receive them because the email does not exist, seriously.
          </p>
        </div>
    )
}

export default Contact;