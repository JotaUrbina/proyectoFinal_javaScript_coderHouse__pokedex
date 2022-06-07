const deployInput = (input) => {
  if (getComputedStyle(input).visibility === "visible") {
    gsap.to(input, {
      duration: 0.2,
      visibility: "hidden",
      display: "none",
      height: 0,
    });
  } else {
    gsap.to(input, {
      duration: 0.2,
      visibility: "visible",
      display: "grid",
      height: "auto",
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

const openAnimation = () => {
  let tl = gsap.timeline({
    repeat: 0,
  });
  tl.to(introRed, {
    duration: 1.5,
    y: "-130%",
    ease: "power3.out",
    display: "none",
  });

  tl.to(
    introWhite,
    {
      duration: 2,
      y: "100%",
      ease: "power3.out",
      display: "none",
    },
    "-=1.5"
  );
};

const animationClickHeartAlert = () => {
  let tl = gsap.timeline({
    repeat: 0,
  });
  tl.to(".alertHeart", {
    duration: 0.1,
    delay: 1.5,
    scale: 0.8,
  });

  tl.to(".alertHeart", {
    duration: 0.01,
    opacity: 0,
    visibility: "hidden",
  });
  tl.to(
    ".alertHeartSolid",
    {
      duration: 0.01,
      visibility: "visible",
      opacity: 0.99,
    },
    "-=0.01"
  );
  tl.to(".alertHeartSolid", {
    duration: 0.1,
    scale: 1,
  });
};
