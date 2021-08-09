import React from 'react'
import DN from '../DN.png'

const About = () => {
  return (
    <div className='about'>
      <h3>About -</h3>
      <div className='aboutDivTwo'>
        <p>
          &emsp;&emsp;&emsp;Hey I'm Daniel, a FullStack Web Developer with a background in
          wholesale/retail logistics.
          <br />
          <br />
          I am passionate about building software for small bussiness' to
          compete and scale in a digital economy using strong technologies as
          Frameworks, API's, Cloud providers, PaaS, IaaS and Blockchain.
          <br />
          <br />
          I'm a big fan of Machine Learning and Augmented Reality Websites,
          cinema4D, crypto and everything tech. When not coding, I love to
          listening to podcasts, brew some coffee or walk my dog Rubio.
          <br />
          <br />
          On the frontend side: I started with HTML, CSS and JavaScript, now I
          find myselft constantly improving my work using React, Material-UI,
          Three.js and BootStrap.
          <br />
          Backend wise: I deep dive into Express and Postgress.
          <br />
          <br />
          My next goal is implement Data in real time using MongoDB Atlas. For
          deployment my allies are Netlify, Heroku, Jenkins, Docker, K8s, and
          AWS.
        </p>
        <img src={DN} alt='Daniel Naranjo' className="roll-in-left"/>
      </div>
    </div>
  )
}

export default About
