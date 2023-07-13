// document.addEventListener("DOMContentLoaded", function () {
//   const button1 = document.getElementsByClassName("open");
//   button1.addEventListener("click", function () {
//     console.log("tess");
//     document.getElementsByClassName("secondPage").style.visibility = "visible";
//   });
// });

function klikIni() {
  console.log('tess');
  document.getElementById('halaman2').style.visibility = 'visible';
  document.getElementById('fotoNu').style.visibility = 'visible';
  play();
  var typed = new Typed('.typing-text', {
    strings: [
      'Heloww manusia cantikk yang amatt baikk. Cieee ulang taunn, makin tua aja nihh xixiii.</br>Happy birthday yaa sayangkuu, Semoga makin cantik, makin sholehah, makin sayang keluarga, sayang akuw,  panjang umur, bahagia, sehat selalu,  pokoknyaa semoga apa yang kamu inginin bisa segera tercapaii di tahun inii amiinnnn....</br>Tauu ga sii, selama setengah taun inii aku ngerasa bahagiaaa bgttt, senengg bgtt bisa jalanin bareng kamuuu. Terimakasih yaaa cantikk karena selama stgh taun ini udah selalu ada buat akuu, jadi penasehat akuu, makasih udah bisa ngertiin aku, makasihh udah jadi rumah ternyaman aku, makasihh buat semuaaa pokoonyaaa ❤....</br>Aku minta maafff yaa kalo aku belum bisa jadi cowok yg kamu harepin, blum bisa ngasi banyak hal ke kamu :(, tpii aku janjii kalo aku bakal jadi lebih baik lagii :)</br>Btw kamu sukaaa ga sama suprise kecil2 an nyaa? Semoga sukaa yakk, trus hadianya suka gakk yaa? Aku bingun bgtt pas milih hadiah, aku takut kamu gak sukaa, mana aku gk ngerti tas cwe yg kmu suka kyk gmna 🤣🤣, aku beliin ini soalnya aku udah janji sma kamuu, kamu inget kann? Yg di dusun semilir itu lohh, yg bikin kamu jdi badmood hahahaha.</br>Yaudaaa dijagaa yaaa hadiah dari akuu.</br>Aku sayangg lamuu,</br>Love uu',
    ],
    loop: false,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 1000,
  });
  particlesJS(
    'particles-js',

    {
      particles: {
        number: {
          value: 100,
          density: {
            enable: true,
            value_area: 600,
          },
        },
        color: {
          value: '#fff',
        },
        shape: {
          type: 'image',
          stroke: {
            width: 0,
            color: '#000000',
          },
          polygon: {
            nb_sides: 6,
          },
          image: {
            src: 'https://i.ibb.co/fN0DdRF/sakura.png',
            width: 138,
            height: 98,
          },
        },
        opacity: {
          value: 0.5,
          random: true,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 8,
          random: true,
          anim: {
            enable: true,
            speed: 150,
            size_min: 4,
            sync: false,
          },
        },
        line_linked: {
          enable: false,
          distance: 500,
          color: '#ffffff',
          opacity: 0.4,
          width: 2,
        },
        move: {
          enable: true,
          speed: 5,
          direction: 'bottom-left',
          random: true,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 2000,
            rotateY: 3000,
          },
        },
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'repulse',
          },
          onclick: {
            enable: false,
            mode: 'repulse',
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 0.5,
            },
          },
          bubble: {
            distance: 400,
            size: 4,
            duration: 0.3,
            opacity: 1,
            speed: 3,
          },
          repulse: {
            distance: 100,
            duration: 10,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    },
  );
}

// var typed = new Typed(".typing-text", {
//   strings: ["web development"],
//   loop: false,
//   typeSpeed: 50,
//   backSpeed: 25,
//   backDelay: 1000,
// });
/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

// particlesJS(
//   "particles-js",

//   {
//     particles: {
//       number: {
//         value: 100,
//         density: {
//           enable: true,
//           value_area: 600,
//         },
//       },
//       color: {
//         value: "#fff",
//       },
//       shape: {
//         type: "image",
//         stroke: {
//           width: 0,
//           color: "#000000",
//         },
//         polygon: {
//           nb_sides: 6,
//         },
//         image: {
//           src: "https://i.ibb.co/Phd7VVG/mawar.png",
//           width: 138,
//           height: 98,
//         },
//       },
//       opacity: {
//         value: 0.5,
//         random: true,
//         anim: {
//           enable: false,
//           speed: 1,
//           opacity_min: 0.1,
//           sync: false,
//         },
//       },
//       size: {
//         value: 8,
//         random: true,
//         anim: {
//           enable: true,
//           speed: 150,
//           size_min: 4,
//           sync: false,
//         },
//       },
//       line_linked: {
//         enable: false,
//         distance: 500,
//         color: "#ffffff",
//         opacity: 0.4,
//         width: 2,
//       },
//       move: {
//         enable: true,
//         speed: 5,
//         direction: "bottom-left",
//         random: true,
//         straight: false,
//         out_mode: "out",
//         bounce: false,
//         attract: {
//           enable: false,
//           rotateX: 2000,
//           rotateY: 3000,
//         },
//       },
//     },
//     interactivity: {
//       detect_on: "canvas",
//       events: {
//         onhover: {
//           enable: true,
//           mode: "repulse",
//         },
//         onclick: {
//           enable: false,
//           mode: "repulse",
//         },
//         resize: true,
//       },
//       modes: {
//         grab: {
//           distance: 400,
//           line_linked: {
//             opacity: 0.5,
//           },
//         },
//         bubble: {
//           distance: 400,
//           size: 4,
//           duration: 0.3,
//           opacity: 1,
//           speed: 3,
//         },
//         repulse: {
//           distance: 100,
//           duration: 10,
//         },
//         push: {
//           particles_nb: 4,
//         },
//         remove: {
//           particles_nb: 2,
//         },
//       },
//     },
//     retina_detect: true,
//   }
// );
