import React from 'react'
import Particles from 'react-particles-js'

import ParticlesConfig from '../config/particle-config'
import Creator from '../components/Creator'
import Developer from '../components/Developer.js'

const Nav = () => {
  return (
    <>
      <div className='topThree'>
        <Particles params={ParticlesConfig} />
        <Developer />
        <div className='portraitContainer'>
          <Creator className='title' />
        </div>
      </div>
    </>
  )
}

export default Nav
