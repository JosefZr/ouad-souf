

    export const slideIn = (i) => ({
        initial: {
          opacity: 0,
          y: 20,
        },
        enter: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            delay: i * 0.1,
            ease: [0.215, 0.61, 0.355, 1],
          }
        },
        exit: {
          opacity: 0,
          transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] }
        }
      });
    
      export const prespective = (i) => ({
        initial: { opacity: 0, rotateX: 90, translateY: 80, translateX: -20 },
        enter: {
          opacity: 1,
          rotateX: 0,
          translateY: 0,
          translateX: 0,
          transition: {
            duration: 0.65,
            opacity: { duration: 0.35 },
            delay: i * 0.1,
            ease: [0.215, 0.61, 0.355, 1]
          },
        },
        exit: {
          opacity: 0,
          rotateX: 90,
          translateY: 80,
          translateX: -20,
          transition: { duration: 0.1, opacity: { duration: 0.1 }, ease: [0.215, 0.61, 0.355, 1] }
        },
      });
      export const slideInButtonsPlay = (i) => ({
        initial: {
          opacity: 0,
          y: 20,
        },
        animate: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 1.5,
            delay: i * 0.3,
            ease: [0.215, 0.61, 0.355, 1],
          }
        },
      });
      
      export const banner = {
        animate: {
          transition: {
            delayChildren: 0.4,
            staggerChildren: 0.1
          }
        }
      };
      export const headerAnimate = {
        offscreen: {
            y: 100,
            opacity: 0
        },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: .5,
                delay: 0.1
            }
        }
    };
   
    // for the services 
    export const imageAnimate = (direction) => ({
      offscreen: {
          x: direction === 'left' ? -50 : 50,
          opacity: 0
      },
      onscreen: {
          x: 0,
          opacity: 1,
          transition: {
              ease:"easeOut",
              duration: 1
          }
      }
  });
  export const textAnimate = (direction) => ({
    offscreen: {
        x: direction === 'left' ? 50 : -50,
        opacity: 0
    },
    onscreen: {
        x: 0,
        opacity: 1,
        transition: {
            ease:"easeOut",
            duration: 0.5,
        }
    }
});

  export const iconAnimate = {
      offscreen: {
          y:10,
          opacity: 0
      },
      onscreen: {
          y: 0,
          opacity: 1,
          rotate: [0, 1, 0],
          transition: {
              type: "spring",
              duration: .5,
              delay: 0.1
          }
      }
  };
  
 
  //for about 
  export const imageAboutAnimate = {
    offscreen: {
        x: -100,
        opacity: 0
    },
    onscreen: {
        x: 0,
        opacity: 1,
        rotate: [0, 10, 0],
        transition: {
            type: "easeOut",
            duration: .3
        }
    }
};

export const textAboutAnimate = {
    offscreen: {
        x: 100,
        opacity: 0
    },
    onscreen: {
        x: 0,
        opacity: 1,
        transition: {
            type: "easeOut",
            duration: 0.3
        }
    }
};