import curly from './curly.svg'
import shell from './shell.svg'
import js from './js.svg'

const svgs = [shell, curly, js]

const particlesConfig = {
    particles: {
      number: {
        value: 100,
        density: {
          enable: false,
          value_area: 881.8766334760375
        }
      },
      color: {
        value: "#87a2b7"
      },
      shape: {
        type: "square",
        stroke: {
          width: 0,
          color: "#000"
        },
        polygon: {
          nb_sides: 7
        },
        image: {
          src: svgs[Math.floor(Math.random() * svgs.length)],
          width: 20,
          height: 20
        }
      },
      opacity: {
        value: 0.4088700755207083,
        random: true,
        anim: {
          enable: true,
          speed: 0.8932849335314796,
          opacity_min: 0.048724632738080705,
          sync: false
        }
      },
      size: {
        value: 16.03412060865523,
        random: true,
        anim: {
          enable: true,
          speed: 10,
          size_min: 40,
          sync: false
        }
      },
      line_linked: {
        enable: false,
        distance: 609.2965831288986,
        color: "#ffffff",
        opacity: 0.7696377892154509,
        width: 0.4810236182596568
      },
      move: {
        enable: true,
        speed: 1.603412060865523,
        direction: "bottom",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: false
  }

export default particlesConfig
