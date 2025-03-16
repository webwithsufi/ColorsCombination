function timelineOne() {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#home",
      start: "top top",
      scrub: 1,
      // markers: true,
      pin: true,
      end: "bottom -220%",
    },
  });

  tl.to(
    "#circle #btm img",
    {
      scale: 1,
      rotate: "-180deg",
      duration: 2,
      stagger: 0.03,
      ease: Power1,
    },
    "same"
  )
    .to(
      "#circle #top img",
      {
        scale: 1,
        duration: 2,
        stagger: 0.05,
        ease: Power1,
      },
      "same"
    )
    .to(
      "#cimage img",
      {
        scale: 0,
        duration: 1,
        stagger: 0.05,
        ease: Power1,
      },
      "same"
    )
    .to(
      "#centerimg h5",
      {
        opacity: 0,
        duration: 1,
        stagger: 0.05,
        ease: Power1,
      },
      "same"
    )
    .to(
      "#circle",
      {
        scale: 0.6,
        ease: Power1,
      },
      "same"
    )
    .to(
      "#overlay #gellery",
      {
        bottom: "-150%",
        ease: Power1,
      },
      "same"
    )
    .to(
      "#animcircle",
      {
        top: "50%",
        scale: 2.5,
        ease: Power1,
      },
      "same"
    )
    .to(
      "#smcircle",
      {
        scale: 0,
        duration: 2,
        ease: Power1,
      },
      "same2"
    )
    .to(
      "#circle",
      {
        scale: 0,
        ease: Power1,
      },
      "same2"
    )
    .to(
      "#animcircle",
      {
        opacity: 0,
        duration: 3,
        ease: Power1,
      },
      "same2"
    )
    .to(
      "#pinkflare",
      {
        rotate: 0,
        bottom: "2%",
        duration: 1,
        ease: Power1,
      },
      "same2"
    )
    .to(
      "#pinkpart",
      {
        top: "0",
        delay: 1,
        duration: 2,
        ease: Power1,
      },
      "same2"
    )
    .to("#pinkpart", {
      top: "-50%",
      delay: 0.5,
      ease: Power1,
    });
}

function timelineTwo() {
  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#page2",
      scrub: 1,
      start: "top top",
      // markers: true,
      pin: true,
      end: "bottom -250%",
    },
  });

  tl2
    .to(".circle", {
      delay: 1,
      top: " 50%",
      stagger: 0.1,
      ease: Power1,
    })
    .to(".circle", {
      left: "50%",
      stagger: 0.1,
      ease: Power1,
    })
    .to(".pink", {
      scale: 10,
      stagger: 0.1,
      ease: Power1,
    })
    .to(".pink", {
      background: "linear-gradient(to right, #d5a7b4, #b4aad5)",
      ease: Power1,
    })
    .to(
      "#ptop h1",
      {
        left: "-150%",
        duration: 5,
        ease: Power1,
      },
      "a"
    )
    .to(".parts", {
      top: 0,
      duration: 3,
      stagger: 0.3,
      opacity: 1,
      ease: Power1,
    })
    .to(".circle", {
      delay: -1,
      opacity: 0,
      ease: Power1,
    })
    .to(".pink", {
      delay: -2,
      opacity: 0,
      ease: Power1,
    })
    .to(
      "#pbtm #One",
      {
        opacity: 0,
        duration: 1,
        ease: Power1,
      },
      "a"
    )
    .to(
      "#pbtm #Two",
      {
        opacity: 1,
        duration: 1,
        delay: 1,
        ease: Power1,
      },
      "a"
    );
}
timelineOne();
timelineTwo();

let smNright = document.querySelector("#sm-nright");
let navRight = document.querySelector("#navright");
let fullScrNav = document.querySelector("#full-scr-nav");

let flag = 0;

smNright.addEventListener("click", function () {
  fullScrNav.style.top = 0;
});

navRight.addEventListener("click", function () {
  fullScrNav.style.top = "-100%";
});
