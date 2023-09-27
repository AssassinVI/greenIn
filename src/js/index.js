window.onload = function () {
  let tl = gsap.timeline({
    delay: 0.3,
  });

  tl.to(".container", {
    opacity: 1,
  })
    .fromTo(
      ".middle-img-mask",
      {
        maskSize: "30%",
      },
      {
        maskSize: "1000%",
        ease: Power0.easeNone,
        duration: 7,
        lineParallax: () => {
          $(".middle-img").attr("data-depth", "0.03");
          let scene = document.querySelector("#scene");
          let parallaxInstance = new Parallax(scene, {
            relativeInput: true,
          });

          parallaxInstance.friction(0.2, 0.2);
        },
      }
    )
    .fromTo(
      ".left-img",
      {
        x: -400,
        y: -400,
        rotate: "-40deg",
        filter: "blur(40px)",
      },
      {
        rotate: "0deg",
        x: 0,
        y: 0,
        filter: "blur(0px)",
        duration: 1,
      },
      "<-0.2"
    ).to(
      ".left-img",
      {
        grassParallax: () => {
          $(".left-img").attr("data-depth", "0.1");
          let grass = document.querySelector("#left-grass");
          let parallaxLeftGrass = new Parallax(grass, {
            relativeInput: true,
          });

          parallaxLeftGrass.friction(0.3, 0.3);
        },
      },
      ">+0.3"
    )
    .fromTo(
      ".right-img",
      {
        x: 580,
        y: 150,
        transform: "rotate(20deg)",
        filter: "blur(20px)",
      },
      {
        x: 0,
        y: 0,
        filter: "blur(0px)",
        transform: "rotate(0deg)",
        duration: 1,
      },
      ">-1.1"
    )
    .to(
      ".right-img",
      {
        grassRightParallax: () => {
          $(".right-img").attr("data-depth", "0.1");
          let grass = document.querySelector("#right-grass");
          let parallaxRightGrass = new Parallax(grass, {
            relativeInput: true,
          });

          parallaxRightGrass.friction(0.3, 0.3);
        },
      },
      ">+0.3"
    )
    .fromTo(
      "#front-line-bg-svg",
      {
        filter: "blur(5px)",
        opacity: 0,
      },
      {
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
      },
      ">-1"
    )
    .fromTo(
      "#back-line-bg-svg",
      {
        filter: "blur(5px)",
        opacity: 0,
      },
      {
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.7,
      },
      ">-0.1"
    )
    .fromTo(
      ".green",
      {
        autoAlpha: 0,
        x: -30,
        filter: "blur(5px)",
      },
      {
        filter: "drop-shadow(0px 0px 5px #0b7b56) drop-shadow(2px 2px 2px #0b7b56) drop-shadow(2px 2px 2px #0b7b56)",
        autoAlpha: 1,
        x: 0,
        stagger: 0.1,
        duration: 1.5,
      },
      ">-0.5"
    )
    .fromTo(
      ".in",
      {
        autoAlpha: 0,
        x: 30,
        filter: "blur(5px)",
      },
      {
        filter: "drop-shadow(0px 0px 5px #0b7b56) drop-shadow(2px 2px 2px #0b7b56) drop-shadow(2px 2px 2px #0b7b56)",
        autoAlpha: 1,
        x: 0,
        stagger: -0.2,
        duration: 1.5,
      },
      ">-2"
    )
    .fromTo(
      ".logo-feng-yi",
      {
        opacity: 0,
        filter: "blur(5px)",
      },
      {
        opacity: 1,
        filter: "drop-shadow(0px 0px 5px #0b7b56) drop-shadow(2px 2px 2px #0b7b56) drop-shadow(2px 2px 2px #0b7b56)",
        duration: 0.5,
      },
      ">-1"
    )
    .fromTo(
      ".middle-slogan-box",
      {
        opacity: 0,
        y: 5,
      },
      {
        opacity: 1,
        y: 0,
      },
      ">"
    )
    .fromTo(
      ".single-leaf",
      {
        opacity: 0,

        transform: "rotate(30deg)",
      },
      {
        opacity: 1,

        transform: "rotate(0deg)",
        duration: 0.6,
      },
      ">"
    );
};
