const trainingData = {
  sesion1: {
    day: "SESIÓN 1",
    title: "Empuje (Pecho/Hombros/Tríceps)",
    duration: "55 min",
    exercises: [
      {
        name: "Press de banca con mancuernas",
        sets: "3x10-12",
        image: "press de banca con mancuernas.webp",
        videoUrl: "https://www.youtube.com/shorts/48L0oQApm_0",
        alternatives: [
          {
            name: "Press de banca máquina Smith",
            sets: "3x10-12",
            image: "press de banca maquina smith.webp",
            videoUrl: "https://www.youtube.com/shorts/ReuWQou1ZcM"
          },
          {
            name: "Press inclinado con mancuernas",
            sets: "3x10-12",
            image: "press inclinado con mancuernas.webp",
            videoUrl: "https://www.youtube.com/shorts/LDEHmb9DpO8"
          },
          {
            name: "Flexiones declinadas",
            sets: "3x10-12",
            image: "flexiones declinadas.jpeg",
            videoUrl: "https://www.youtube.com/shorts/qTHVaAVUSBw"
          }
        ]
      },
      {
        name: "Aperturas en máquina",
        sets: "3x12",
        image: "aperturas en maquina.webp",
        videoUrl: "https://www.youtube.com/shorts/GTZ0aQ7GMZo",
        alternatives: [
          {
            name: "Cruces en polea alta",
            sets: "3x12",
            image: "cruces en polea alta.jpg",
            videoUrl: "https://www.youtube.com/shorts/B_5amA7vPbA"
          },
          {
            name: "Aperturas en banco plano",
            sets: "3x12",
            image: "aperturas en banco plano.jpg",
            videoUrl: "https://www.youtube.com/shorts/_cRGbQxgwn8"
          },
          {
            name: "Aperturas con bandas elásticas",
            sets: "3x12",
            image: "aperturas con bandas elasticas.jpg",
            videoUrl: "https://www.youtube.com/shorts/sHre9aCixG0"
          }
        ]
      },
      {
        name: "Press militar sentado",
        sets: "3x10",
        image: "press militar sentado con mancuernas.webp",
        videoUrl: "https://www.youtube.com/shorts/UEzs_TIAOnk",
        alternatives: [
          {
            name: "Press hombros máquina",
            sets: "3x10",
            image: "press hombros maquina.jpg",
            videoUrl: "https://www.youtube.com/shorts/hzyx3HAMRgc"
          },
          {
            name: "Press Arnold",
            sets: "3x10",
            image: "press arnold.jpeg",
            videoUrl: "https://www.youtube.com/shorts/XQVMPPaj_W4"
          },
          {
            name: "Elevaciones frontales con bandas",
            sets: "3x10",
            image: "elevaciones frontales con bandas elasticas.jpg",
            videoUrl: "https://www.youtube.com/shorts/UufaN3_97Kg"
          }
        ]
      },
      {
        name: "Extensiones de tríceps en polea alta",
        sets: "3x12",
        image: "extension de triceps en polea alta.webp",
        videoUrl: "https://www.youtube.com/shorts/23qUSrn8lIU",
        alternatives: [
          {
            name: "Extensiones tríceps con mancuernas",
            sets: "3x12",
            image: "extensiones triceps con mancuernas.jpg",
            videoUrl: "https://www.youtube.com/shorts/8FNGBJUHfsA"
          },
          {
            name: "Press francés mancuernas",
            sets: "3x12",
            image: "press frances mancuernas.jpg",
            videoUrl: "https://www.youtube.com/shorts/ynAFAKhiuSs"
          },
          {
            name: "Fondos en banco",
            sets: "3x12",
            image: "fondos en banco.webp",
            videoUrl: "https://www.youtube.com/shorts/hVwojhhQhj4"
          }
        ]
      },
      {
        name: "Plancha",
        sets: "3x30 seg",
        image: "plancha.webp",
        videoUrl: "https://www.youtube.com/shorts/S9_mGViO2cc",
        alternatives: [
          {
            name: "Plancha con elevación de pies",
            sets: "3x30 seg",
            image: "plancha con elevacion de pies.jpg",
            videoUrl: "https://www.youtube.com/shorts/jTn-tIwyXvw"
          },
          {
            name: "Plancha con peso en espalda",
            sets: "3x30 seg",
            image: "plancha con peso en espalda.jpg",
            videoUrl: "https://www.youtube.com/shorts/8tGo4goopno"
          },
          {
            name: "Plancha lateral con rotación",
            sets: "3x30 seg",
            image: "plancha lateral con rotacion.jpg",
            videoUrl: "https://www.youtube.com/shorts/QbnebzabKy0"
          }
        ]
      }
    ]
  },
  sesion2: {
    day: "SESIÓN 2",
    title: "Tirón (Espalda/Bíceps) + Core",
    duration: "55 min",
    exercises: [
      {
        name: "Remo en polea alta",
        sets: "3x12",
        image: "remo en polea alta.webp",
        videoUrl: "https://www.youtube.com/shorts/k9AlSh94cEk",
        alternatives: [
          {
            name: "Remo en máquina sentado",
            sets: "3x12",
            image: "remo en maquina sentado.webp",
            videoUrl: "https://www.youtube.com/shorts/own3uEE4wP8"
          },
          {
            name: "Remo con mancuerna",
            sets: "3x12",
            image: "remo con mancuerna.webp",
            videoUrl: "https://www.youtube.com/shorts/-RngKKzbEnI"
          },
          {
            name: "Remo con bandas elásticas",
            sets: "3x12",
            image: "remo con bandas elasticas.png",
            videoUrl: "https://www.youtube.com/shorts/2WmemCXXpRw"
          }
        ]
      },
      {
        name: "Jalones al pecho en polea",
        sets: "3x10-12",
        image: "jalones al pecho en polea.jpg",
        videoUrl: "https://www.youtube.com/shorts/2bAmCiv8HgA",
        alternatives: [
          {
            name: "Remo vertical con polea",
            sets: "3x10-12",
            image: "remo vertical con polea.jpg",
            videoUrl: "https://www.youtube.com/shorts/UvfkQLrYlUg"
          },
          {
            name: "Dominadas asistidas",
            sets: "3x10-12",
            image: "dominadas asistidas.webp",
            videoUrl: "https://www.youtube.com/shorts/-lXsnZd1iLE"
          }
        ]
      },
      {
        name: "Curl de bíceps con barra Z",
        sets: "3x10",
        image: "curl de biceps con barra z.jpg",
        videoUrl: "https://www.youtube.com/shorts/vTS_jOPZRnQ",
        alternatives: [
          {
            name: "Curl bíceps en banco scott",
            sets: "3x10",
            image: "curl biceps en banco scott.webp",
            videoUrl: "https://www.youtube.com/shorts/REKWkEEWWiQ"
          },
          {
            name: "Curl martillo con mancuernas",
            sets: "3x10",
            image: "curl martillo con mancuernas.webp",
            videoUrl: "https://www.youtube.com/shorts/1pTUHKXGaSs"
          },
          {
            name: "Curl bíceps con bandas",
            sets: "3x10",
            image: "curl biceps con bandas.png",
            videoUrl: "https://www.youtube.com/shorts/20xtfGZ37nw"
          }
        ]
      },
      {
        name: "Face pulls",
        sets: "3x15",
        image: "face pulls.jpg",
        videoUrl: "https://www.youtube.com/shorts/Dl16Lwh3MiA",
        alternatives: [
          {
            name: "Remo alto en polea agarre prono",
            sets: "3x15",
            image: "remo alto en polea agarre prono.webp",
            videoUrl: "https://www.youtube.com/shorts/D60ffOR_klw"
          },
          {
            name: "Face pulls con mancuerna ligera",
            sets: "3x15",
            image: "face pulls con mancuerna ligera.webp",
            videoUrl: "https://www.youtube.com/shorts/kKf0Xrekhgw"
          },
          {
            name: "Face pulls con bandas",
            sets: "3x15",
            image: "face pulls con bandas.jpg",
            videoUrl: "https://www.youtube.com/shorts/lnb4wZ16BME"
          }
        ]
      },
      {
        name: "Bird-dog",
        sets: "3x10 por lado",
        image: "bird dog.jpg",
        videoUrl: "https://www.youtube.com/shorts/hqc4Om4j3Cg",
        alternatives: [
          {
            name: "Plancha con toque de hombro",
            sets: "3x10 por lado",
            image: "plancha con toque de hombro.jpg",
            videoUrl: "https://www.youtube.com/shorts/3LVCye35Wpw"
          },
          {
            name: "Superman con extensión",
            sets: "3x10 por lado",
            image: "superman con extension.jpg",
            videoUrl: "https://www.youtube.com/shorts/0tYGURqAs48"
          },
          {
            name: "Bird dog con bandas en pies",
            sets: "3x10 por lado",
            image: "bird dog con bandas en pies.png",
            videoUrl: "https://www.youtube.com/shorts/PZcET_feXpA"
          }
        ]
      }
    ]
  },
  sesion3: {
    day: "SESIÓN 3",
    title: "Piernas (Fuerza + Cardio)",
    duration: "55 min",
    exercises: [
      {
        name: "Sentadillas goblet",
        sets: "3x10",
        image: "sentadilla goblet.webp",
        videoUrl: "https://www.youtube.com/shorts/t_ObGqgzqmw",
        alternatives: [
          {
            name: "Prensa de piernas",
            sets: "3x10",
            image: "prensa de piernas.jpg",
            videoUrl: "https://www.youtube.com/shorts/BIw8iJgEqVc"
          },
          {
            name: "Sentadilla búlgara (1 pierna)",
            sets: "3x10",
            image: "sentadilla bulgara 1 pierna.jpg",
            videoUrl: "https://www.youtube.com/shorts/t4-_udCqwqI"
          },
          {
            name: "Sentadilla con bandas",
            sets: "3x10",
            image: "sentadilla con bandas.jpg",
            videoUrl: "https://www.youtube.com/watch?v=UaaKLQ7GaHY"
          }
        ]
      },
      {
        name: "Peso muerto rumano",
        sets: "3x10",
        image: "peso muerto rumano.webp",
        videoUrl: "https://www.youtube.com/shorts/SAdzug-v7D0",
        alternatives: [
          {
            name: "Peso muerto en máquina Smith",
            sets: "3x10",
            image: "peso muerto en maquina smith.webp",
            videoUrl: "https://www.youtube.com/shorts/aov0lKnSW_Q"
          },
          {
            name: "Peso muerto a 1 pierna",
            sets: "3x10",
            image: "peso muerto a 1 pierna.webp",
            videoUrl: "https://www.youtube.com/shorts/flSBJdyD_8c"
          },
          {
            name: "Hip thrust con bandas",
            sets: "3x10",
            image: "hip thrust con bandas.png",
            videoUrl: "https://www.youtube.com/watch?v=Is4d9t0VE7Q"
          }
        ]
      },
      {
        name: "Zancadas con mancuernas",
        sets: "3x8 por pierna",
        image: "zancadas con mancuernas.webp",
        videoUrl: "https://www.youtube.com/shorts/8h4nhwC-tHU",
        alternatives: [
          {
            name: "Zancada estática (sin desplazarse)",
            sets: "3x8 por pierna",
            image: "zancada estatica sin desplazarse.webp",
            videoUrl: "https://www.youtube.com/shorts/hRMd_YG-Opw"
          },
          {
            name: "Zancadas con bandas",
            sets: "3x8 por pierna",
            image: "zancadas con bandas.avif",
            videoUrl: "https://www.youtube.com/shorts/I-1tFSF7QXQ"
          }
        ]
      },
      {
        name: "Bicicleta estática",
        sets: "25 min resistencia moderada",
        image: "bicicleta estatica.webp",
        videoUrl: "",
        alternatives: []
      }
    ]
  },
  sesion4: {
    day: "SESIÓN 4",
    title: "Full Body Ligero + Cardio",
    duration: "60 min",
    exercises: [
      {
        name: "Press inclinado con mancuernas",
        sets: "3x10",
        image: "press inclinado con mancuernas.webp",
        videoUrl: "https://www.youtube.com/shorts/LDEHmb9DpO8",
        alternatives: [
          {
            name: "Press declinado mancuernas",
            sets: "3x10",
            image: "press declinado mancuernas.jpeg",
            videoUrl: "https://www.youtube.com/shorts/yvp6aGRMQoA"
          },
          {
            name: "Flexiones con agarre cerrado",
            sets: "3x10",
            image: "flexiones con agarre cerrado.webp",
            videoUrl: "https://www.youtube.com/shorts/c6OAhYzl06Q"
          }
        ]
      },
      {
        name: "Remo con mancuerna",
        sets: "3x10 por brazo",
        image: "remo con mancuerna.webp",
        videoUrl: "https://www.youtube.com/shorts/-RngKKzbEnI",
        alternatives: [
          {
            name: "Remo en T invertido (peso corporal)",
            sets: "3x10 por brazo",
            image: "remo en t invertido peso corporal.jpg",
            videoUrl: "https://www.youtube.com/shorts/TMCAdemQICk"
          },
          {
            name: "Remo con bandas elásticas",
            sets: "3x10 por brazo",
            image: "remo con bandas elasticas.png",
            videoUrl: "https://www.youtube.com/shorts/2WmemCXXpRw"
          }
        ]
      },
      {
        name: "Hip thrust",
        sets: "3x12",
        image: "hip thrust.jpg",
        videoUrl: "https://www.youtube.com/shorts/ee-YBNeKknU",
        alternatives: [
          {
            name: "Hip thrust con mancuerna en abdomen",
            sets: "3x12",
            image: "hip thrust con mancuerna en abdomen.jpg",
            videoUrl: "https://www.youtube.com/shorts/pr-aDN2Jtt4"
          },
          {
            name: "Hip thrust con bandas",
            sets: "3x12",
            image: "hip thrust con bandas.png",
            videoUrl: "https://www.youtube.com/watch?v=Is4d9t0VE7Q"
          }
        ]
      },
      {
        name: "Elevaciones laterales",
        sets: "3x15",
        image: "elevaciones laterales.webp",
        videoUrl: "https://www.youtube.com/shorts/DCS8eFTiddM",
        alternatives: [
          {
            name: "Elevaciones en cruz frontales",
            sets: "3x15",
            image: "elevaciones en cruz frontales.jpg",
            videoUrl: "https://www.youtube.com/shorts/LOPzulBf9g0"
          },
          {
            name: "Elevaciones en cruz laterales",
            sets: "3x15",
            image: "elevaciones en cruz laterales.jpg",
            videoUrl: "https://www.youtube.com/shorts/edPYWL8Jr3E"
          },
          {
            name: "Elevaciones con bandas laterales",
            sets: "3x15",
            image: "elevaciones con bandas laterales.webp",
            videoUrl: "https://www.youtube.com/watch?v=F_VNJ0busKc"
          }
        ]
      },
      {
        name: "Caminata rápida",
        sets: "30 min",
        image: "caminata rapida.jpg",
        videoUrl: "",
        alternatives: []
      }
    ]
  },
  sesion5: {
    day: "SESIÓN 5",
    title: "Piernas (Potencia) + Core",
    duration: "50 min",
    exercises: [
      {
        name: "Prensa de piernas",
        sets: "3x12",
        image: "prensa de piernas.jpg",
        videoUrl: "https://www.youtube.com/shorts/BIw8iJgEqVc",
        alternatives: [
          {
            name: "Sentadilla sumo con mancuernas",
            sets: "3x12",
            image: "sentadilla sumo con mancuernas.jpg",
            videoUrl: "https://www.youtube.com/shorts/iQVIUv1s4K4"
          },
          {
            name: "Sentadilla isométrica",
            sets: "3x12 (3-5 seg abajo)",
            image: "sentadilla isometrica.webp",
            videoUrl: "https://www.youtube.com/shorts/75-_PLinT88"
          }
        ]
      },
      {
        name: "Curl femoral tumbado",
        sets: "3x10",
        image: "curl femoral tumbado.jpg",
        videoUrl: "https://www.youtube.com/shorts/OYoW4IzWdrw",
        alternatives: [
          {
            name: "Curl femoral con mancuerna de pie",
            sets: "3x10",
            image: "curl femoral con mancuerna de pie.jpg",
            videoUrl: "https://www.youtube.com/shorts/7RWczx8JoZQ"
          },
          {
            name: "Curl femoral con banda",
            sets: "3x10",
            image: "curl femoral con banda.jpeg",
            videoUrl: "https://www.youtube.com/watch?v=yz_WC_4DZUM"
          }
        ]
      },
      {
        name: "Extensiones de cuádriceps",
        sets: "3x12",
        image: "extensiones de cuadriceps.webp",
        videoUrl: "https://www.youtube.com/shorts/sRTzQMPzqnk",
        alternatives: [
          {
            name: "Patada de glúteo con mancuerna",
            sets: "3x12",
            image: "patada de gluteo con mancuerna.jpg",
            videoUrl: "https://www.youtube.com/shorts/KdJ4o4NarCc"
          }
        ]
      },
      {
        name: "Elevación de talones",
        sets: "3x15",
        image: "elevacion de talones.jpg",
        videoUrl: "https://www.youtube.com/shorts/H3Iii8hPzlc",
        alternatives: [
          {
            name: "Elevación talones máquina",
            sets: "3x15",
            image: "elevacion talones maquina.jpg",
            videoUrl: "https://www.youtube.com/shorts/g-YzDXmVokI"
          },
          {
            name: "Elevación talones en escalón",
            sets: "3x15",
            image: "elevacion talones en escalon.jpg",
            videoUrl: "https://www.youtube.com/shorts/SReLcda9UBw"
          }
        ]
      },
      {
        name: "Plancha lateral",
        sets: "3x20 seg por lado",
        image: "plancha lateral.webp",
        videoUrl: "https://www.youtube.com/shorts/xyaLDfd9ZfI",
        alternatives: [
          {
            name: "Plancha lateral con elevación",
            sets: "3x20 seg por lado",
            image: "plancha lateral con elevacion.jpg",
            videoUrl: "https://www.youtube.com/shorts/r_0SbtmTre8"
          },
          {
            name: "Plancha lateral con rotación",
            sets: "3x20 seg por lado",
            image: "plancha lateral con rotacion.jpg",
            videoUrl: "https://www.youtube.com/shorts/OHXsgurvLn0"
          },
          {
            name: "Side plank con bandas",
            sets: "3x20 seg por lado",
            image: "side plank con bandas.png",
            videoUrl: "https://www.youtube.com/shorts/h8mXjn7xNPs"
          }
        ]
      }
    ]
  }
};
