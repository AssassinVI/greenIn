$(document).ready(function () {
  
  let bg_tl=gsap.timeline({
      scrollTrigger: {
          trigger: '.contact_us_div',
          start: "top center",
        end: `+=1px`,
          scrub: 1,
      }
  });

  bg_tl.to('#case_div', 1, {'backgroundColor' : '#ffffff'});
  

  //-- 表單樣板 --
  form_template ("form.html?3");

  //-- 表單送出 --
  $('#call_form').on('click', '#sub_btn1', function (event) {
  let err_arr=[
      {DOM_id:'#ca_name', txt:'貴賓姓名，'},
      {DOM_id:'#ca_phone', txt:'聯繫電話，'},
      {DOM_id:'#ca_time', txt:'方便聯繫時間'},

  ];
  let ajax_data={
                      name: $('#ca_name').val(),
                      phone: $('#ca_phone').val(),
                      mail: '',
                      msg:  `方便聯繫時間：${$('#ca_time').val()}｜留言：${$('#ca_msg').val()}`,
                      case_name: document.title,
                      case_id: $('#case_id').val(),
                      case_aes_id: $('#case_aes_id').val(),
                      //'g-recaptcha-response': grecaptcha.getResponse(g_grecaptcha),
                      test: $('#test').val(),
                      send_list: $('#send_list').val()
  };

  form_submit(err_arr, ajax_data);
  });
  
  
  
  
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
        filter: "blur(10px)",
        opacity: 0,
      },
      {
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.7,
      },
      ">-0.6"
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
});
