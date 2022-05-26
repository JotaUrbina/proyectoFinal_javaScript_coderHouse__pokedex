let isActive = false;

const deployInput = (input) => {
  if (isActive) {
    gsap.to(input, {
      duration: 0.2,
      opacity: 1,
      visibility: "visible",
      height: "auto",
      y: 0,
    });
  } else {
    gsap.to(input, {
      duration: 0.2,
      opacity: 0,
      visibility: "hidden",
      height: 0,
      y: -30,
    });
  }
};

const deployCardStat = (card) => {
  if (isActive) {
    gsap.to(card, {
      duration: 0.2,
      opacity: 1,
      visibility: "visible",
      height: 182,
      y: 0,
    });
  } else {
    gsap.to(card, {
      duration: 0.2,
      opacity: 0,
      visibility: "hidden",
      height: 0,
      y: -30,
    });
  }
};

const mouseOver = (card) => {
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
};
