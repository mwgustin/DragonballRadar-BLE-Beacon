import React, {Component} from 'react';
import Dragonballs from './components/dragonball';
// import Particles from 'react-particles-js';
import './App.css'


// const particleParams = {
//   "particles": {
//     "number": {
//       "value": 175,
//       "density": {
//         "enable": true,
//         "value_area": 1104.8066982851817
//       }
//     },
//     "color": {
//       "value": "#ffffff"
//     },
//     "shape": {
//       "type": "circle",
//       "stroke": {
//         "width": 0,
//         "color": "#000000"
//       },
//       "polygon": {
//         "nb_sides": 5
//       },
//       "image": {
//         "src": "img/github.svg",
//         "width": 100,
//         "height": 100
//       }
//     },
//     "opacity": {
//       "value": 0.5,
//       "random": false,
//       "anim": {
//         "enable": false,
//         "speed": 0,
//         "opacity_min": 0.1,
//         "sync": false
//       }
//     },
//     "size": {
//       "value": 2.1,
//       "random": true,
//       "anim": {
//         "enable": false,
//         "speed": 7.192807192807192,
//         "size_min": 0.1,
//         "sync": false
//       }
//     },
//     "line_linked": {
//       "enable": true,
//       "distance": 189.39543399174545,
//       "color": "#a2a2a2",
//       "opacity": 0.2367442924896818,
//       "width": 0.9469771699587272
//     },
//     "move": {
//       "enable": true,
//       "speed": 0.9,
//       "direction": "top",
//       "random": true,
//       "straight": false,
//       "out_mode": "out",
//       "bounce": false,
//       "attract": false,
//     }
//   },
//   "interactivity": {
//     "detect_on": "canvas",
//     "events": {
//       "onhover": {
//         "enable": false,
//         "mode": "repulse"
//       },
//       "onclick": {
//         "enable": true,
//         "mode": "push"
//       },
//       "resize": true
//     },
//     "modes": {
//       "grab": {
//         "distance": 400,
//         "line_linked": {
//           "opacity": 1
//         }
//       },
//       "bubble": {
//         "distance": 400,
//         "size": 40,
//         "duration": 2,
//         "opacity": 8,
//         "speed": 3
//       },
//       "repulse": {
//         "distance": 200,
//         "duration": 0.4
//       },
//       "push": {
//         "particles_nb": 4
//       },
//       "remove": {
//         "particles_nb": 2
//       }
//     }
//   },
//   "retina_detect": true
// }

class App extends Component {

  state = {
    dragonBalls: []
  }


  componentDidMount() {
    this.intervalId = setInterval(() => this.fetchData(), 3000)
    this.fetchData();
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  fetchData() {
    // fetch('http://localhost:3000/dragon-radar')
    fetch('http://dragonradar.gustend.local:3000/dragon-radar')
    .then(res => res.json())
    .then((data) => {
      this.setState({ dragonBalls: data})
    })
    .catch(console.log)
  }

  

  render() {
    return (
      
      <div className="main-app">
        <div 
          style= {{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}>
          <Dragonballs dragonballs={this.state.dragonBalls} />
        </div>
      </div>
    );
  }
}

export default App;
