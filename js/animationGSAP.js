let isVisible = true;

const deployInput = (input) => {
  if (getComputedStyle(input).visibility === "visible") {
    gsap.to(input, {
      duration: 0.2,
      visibility: "hidden",
      height: 0,
      y: -30,
    });
  } else {
    gsap.to(input, {
      duration: 0.2,
      visibility: "visible",
      height: "auto",
      y: 0,
    });
  }
};

const deployCardStat = (card, arrow) => {
  if (getComputedStyle(card).visibility === "hidden") {
    gsap.to(card, {
      duration: 0.2,

      visibility: "visible",
      height: 210,
      y: 0,
    });
    gsap.to(
      arrow,
      {
        duration: 0.2,
        rotate: 180,
        translateY: 210,
      },
      "-=0.2"
    );
  } else {
    gsap.to(card, {
      duration: 0.2,

      visibility: "hidden",
      height: 0,
    });
    gsap.to(
      arrow,
      {
        duration: 0.2,
        rotate: 0,
        translateY: 0,
      },
      "-=0.2"
    );
  }
};

/* const mouseOver = (card) => {
  let tl = gsap.timeline({
    repeat: 5,
    yoyo: true,
  });
  tl.to(card, {
    duration: 0.3,
    scale: 1.5,
  });
  tl.to(card, {
    duration: 0.3,
    scale: 1,
  });
}; */

introRed = document.querySelector(".intro-red");
introWhite = document.querySelector(".intro-white");

let tl = gsap.timeline({
  repeat: 0,
  yoyo: true,
});
tl.to(introRed, {
  duration: 1.5,
  y: "-130%",
  delay: 1.5, //1.5 para el final
  ease: "power3.out",
});

tl.to(
  introWhite,
  {
    duration: 5,
    y: "100%",
    ease: "power3.out",
  },
  "-=1.5"
);

tl.to(introWhite, {
  duration: 0,
  display: "none",
});

tl.to(introRed, {
  display: "none",
});
