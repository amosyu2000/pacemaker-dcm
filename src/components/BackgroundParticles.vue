<template>
  <div class="h-100 w-100 position-relative">
    <div id="tsparticles"></div>
    <div class="position-relative">
      <slot/>
    </div>
  </div>
</template>

<script>
import { tsParticles } from 'tsparticles'

export default {
  mounted: function() {
    tsParticles.load('tsparticles', 
      {
        "particles": {
          "number": {
            "value": 60,
            // "density": {
            //   "enable": true,
            //   "value_area": 400
            // }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "circle",
            // "polygon": {
            //   "nb_sides": 8
            // },
            // "image": {
            //   "src": "img/github.svg",
            //   "width": 100,
            //   "height": 100
            // }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            // "anim": {
            //   "enable": false,
            //   "speed": 1,
            //   "opacity_min": 0.1,
            //   "sync": false
            // }
          },
          "size": {
            "value": 3,
            "random": true,
            // "anim": {
            //   "enable": false,
            //   "speed": 80,
            //   "size_min": 0.1,
            //   "sync": false
            // }
          },
          "line_linked": {
            "enable": true,
            "distance": 120,
            "color": "#ffffff",
            "opacity": 0.25,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 1,
            "direction": "top",
            "random": false,
            "straight": true,
            "out_mode": "out",
            "bounce": false,
            // "attract": {
            //   "enable": false,
            //   "rotateX": 600,
            //   "rotateY": 1200
            // }
          }
        },
        // "interactivity": {
        //   "detect_on": "canvas",
        //   "events": {
        //     "onhover": {
        //       "enable": false,
        //       "mode": "repulse"
        //     },
        //     "onclick": {
        //       "enable": true,
        //       "mode": "push"
        //     },
        //     "resize": true
        //   },
        //   "modes": {
        //     "grab": {
        //       "distance": 800,
        //       "line_linked": {
        //         "opacity": 1
        //       }
        //     },
        //     "bubble": {
        //       "distance": 800,
        //       "size": 80,
        //       "duration": 2,
        //       "opacity": 0.8,
        //       "speed": 3
        //     },
        //     "repulse": {
        //       "distance": 400,
        //       "duration": 0.4
        //     },
        //     "push": {
        //       "particles_nb": 4
        //     },
        //     "remove": {
        //       "particles_nb": 2
        //     }
        //   }
        // },
        "retina_detect": true
      })
  }
}
</script>

<style lang="sass" scoped>
#tsparticles
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%
  mix-blend-mode: hard-light
  &::after
    position: absolute
    content: ""
    left: 0px
    top: 0px
    height: 100%
    width: 100%
    background: linear-gradient(gray 0%, transparent 10%, transparent 90%, gray 100%)
    pointer-events: none
</style>