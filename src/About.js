import React from 'react';
import NavBar from "./NavBar";

function About() {
    
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <h2 className='some-padding'>About Us</h2>
      <p className='about-container'>
        Welcome to our humble abode, where we boast of having a whopping total of 35+ hours of combined experience in the mock web page industry. That's right, we've spent more time than we care to admit tweaking pixels, battling with CSS, and debating the merits of using Comic Sans (<strong>spoiler alert!:</strong> <span style={{ color: 'red' }}>there are none</span>).
      </p>
      <p className='about-container'>
        Here at The No name Dealership we're on a mission to broadcast the coolest vehicles on the market today. From expensive cars to very expensive cars (still waiting for those to become a thing), we've got you covered. Our team of highly caffeinated developers, designers, and coffee enthusiasts work tirelessly to bring you the most outrageous and jaw-dropping mockups this side of the interwebs.
      </p>
      <p className='about-container'>
        So buckle up, hold onto your hats (unless they're not cool hats, in which case, please leave them at the door), and prepare to embark on a journey through the wild and wacky world of mock web pages. Trust us, it's going to be one heck of a ride!
      </p>
    </div>
  );
}

export default About;