// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const headerBg = document.querySelector(".header-bg");
const headeingText = document.querySelectorAll(".header p");
const spans = document.querySelectorAll(".header h1 span");
gsap
  .timeline()
  .from(headerBg, {
    duration: 2,
    ease: "power2",
    scale: 1.08,
  })
  //     // .from(spans[0], {
  //     //     duration: .4,
  //     //     opacity: 0,
  //     //     y: 100,
  //     //     skewY: 9
  //     // })
  //     .from(spans[1], {
  //         duration: .2,
  //         opacity: 0,
  //         y: 50,
  //         skewY: 9
  //     })
  //     .from(spans[2], {
  //         duration: .2,
  //         opacity: 0,
  //         y: 50,
  //         skewY: 9
  //     }).from(spans[3], {
  //         duration: .2,
  //         opacity: 0,
  //         y: 50,
  //         skewY: 9
  //     })
  //     .from(spans[4], {
  //         duration: .2,
  //         opacity: 0,
  //         y: 50,
  //         skewY: 9
  //     })
  //     // .to(sp
  //     .from(spans[5], {
  //         duration: .2,
  //         opacity: 0,
  //         y: 50,
  //         skewY: 9
  //     })
  //     .from(spans[6], {
  //         duration: .2,
  //         opacity: 0,
  //         y: 50,
  //         skewY: 9
  //     })
  //     .from(spans[7], {
  //         duration: .2,
  //         opacity: 0,
  //         y: 50,
  //         skewY: 9
  //     })
  //     .from(spans[8], {
  //         duration: .2,
  //         opacity: 0,
  //         y: 50,
  //         skewY: 9
  //     })
  //     .from(spans[9], {
  //         duration: .2,
  //         opacity: 0,
  //         y: 50,
  //         skewY: 9
  //     })
  //     .from(spans[10], {
  //         duration: .2,
  //         opacity: 0,
  //         y: 50,
  //         skewY: 9
  //     })
  .from(headeingText, {
    delay: 2,
    duration: 1,
    opacity: 0,
    y: 50,
  });
gsap.from(".mother", {
  scrollTrigger: document.querySelector(".mother"),
  duration: 1,
  y: 100,
});

gsap.from(".testimony h3", {
  scrollTrigger: document.querySelector(".testimony h3"),
  duration: 1,
  y: 50,
});
gsap.from(".testimony p", {
  scrollTrigger: document.querySelector(".testimony p"),
  duration: 1,
  y: 100,
});
gsap.from(".testimony a", {
  scrollTrigger: document.querySelector(".testimony a"),
  duration: 1,
  y: 150,
});
gsap.to(".mother span", {
  scrollTrigger: document.querySelector(".mother span"),
  duration: 1,
  width: 0,
});
// .svg-cover

setTimeout(() => {
  document.querySelector(".header h1").style.visibility = "visible";
}, 2100);
setTimeout(() => {
  spans.forEach((span, index) => {
    gsap.from(span, {
      delay: (index + 1) * 0.15,
      duration: 0.3,
      opacity: 0,
      y: 50,
      z: 50,
      skewY: 9,
    });
  });
}, 2000);
