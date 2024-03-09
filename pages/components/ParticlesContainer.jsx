import React, { useEffect } from "react";
import Form from "./Form";
const ParticlesContainer = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("particles.js").then(({ default: particles }) => {
        particlesJS(
          "particles-js",
          {
            particles: {
              number: {
                value: 80,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: "#ffffff",
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#000000",
                },
                polygon: {
                  nb_sides: 5,
                },
                image: {
                  src: "img/github.svg",
                  width: 100,
                  height: 100,
                },
              },
              opacity: {
                value: 0.5,
                random: false,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 5,
                random: true,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false,
                },
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 6,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
                onclick: {
                  enable: true,
                  mode: "push",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3,
                },
                repulse: {
                  distance: 200,
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
            config_demo: {
              hide_card: false,
              background_color: "#b61924",
              background_image: "",
              background_position: "50% 50%",
              background_repeat: "no-repeat",
              background_size: "cover",
            },
          }
          //  {
          //   particles: {
          //     number: {
          //       value: 80,
          //       density: {
          //         enable: true,
          //         value_area: 800,
          //       },
          //     },
          //     color: {
          //       value: "#ffffff",
          //     },
          //     shape: {
          //       type: "star",
          //       stroke: {
          //         width: 0,
          //         color: "#000000",
          //       },
          //       polygon: {
          //         nb_sides: 5,
          //       },
          //       image: {
          //         src: "img/github.svg",
          //         width: 100,
          //         height: 100,
          //       },
          //     },
          //     opacity: {
          //       value: 0.31565905665290905,
          //       random: true,
          //       anim: {
          //         enable: false,
          //         speed: 1,
          //         opacity_min: 0.1,
          //         sync: false,
          //       },
          //     },
          //     size: {
          //       value: 39.45738208161363,
          //       random: true,
          //       anim: {
          //         enable: true,
          //         speed: 45.55444555444555,
          //         size_min: 7.992007992007992,
          //         sync: false,
          //       },
          //     },
          //     line_linked: {
          //       enable: true,
          //       distance: 142.0465754938091,
          //       color: "#b68f8f",
          //       opacity: 0.8917368350444681,
          //       width: 1.736124811591,
          //     },
          //     move: {
          //       enable: true,
          //       speed: 9.620472365193136,
          //       direction: "none",
          //       random: false,
          //       straight: false,
          //       out_mode: "out",
          //       bounce: false,
          //       attract: {
          //         enable: true,
          //         rotateX: 721.5354273894853,
          //         rotateY: 1362.9002517356944,
          //       },
          //     },
          //   },
          //   interactivity: {
          //     detect_on: "window",
          //     events: {
          //       onhover: {
          //         enable: true,
          //         mode: "repulse",
          //       },
          //       onclick: {
          //         enable: true,
          //         mode: "push",
          //       },
          //       resize: true,
          //     },
          //     modes: {
          //       grab: {
          //         distance: 146.17389821424212,
          //         line_linked: {
          //           opacity: 0.9871505898224783,
          //         },
          //       },
          //       bubble: {
          //         distance: 133.99274002972194,
          //         size: 32.48308849205381,
          //         duration: 2.842270243054708,
          //         opacity: 1,
          //         speed: 3,
          //       },
          //       repulse: {
          //         distance: 211.14007519834973,
          //         duration: 0.4,
          //       },
          //       push: {
          //         particles_nb: 4,
          //       },
          //       remove: {
          //         particles_nb: 2,
          //       },
          //     },
          //   },
          //   retina_detect: false,
          // }
        );
      });
    }
  }, []);

  return (
    <div
      id="particles-js"
      className="w-[100%] h-[100vh]  flex justify-center items-center"
    >
      <div className="w-[400px] absolute">
        <Form />
      </div>
    </div>
  );
};

export default ParticlesContainer;
