
// nav barrrrr
let header = document.getElementById("header")

window.onscroll = function () {
  if (scrollY >= 400) {
    header.classList.add("header_2")

  }
  else {
    header.classList.remove("header_2")
  }
}
// end nav barrrrr




$(document).ready(function () {
  $('.mhmd').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    autoplay: true,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
});




let colorItems = $(".color-item");
colorItems.eq(0).css("backgroundColor", "orange");
colorItems.eq(1).css("backgroundColor", "#09c");
colorItems.eq(2).css("backgroundColor", "teal");
colorItems.eq(3).css("backgroundColor", "tomato");
colorItems.eq(4).css("backgroundColor", "#333");
colorItems.click(function () {
  let myColor = $(this).css("backgroundColor");
  $("p,h1,h2").css("color", myColor);
})  


$("#sidebarToggle").click(function () {
  let colorBoxWidth = $(".color-box").outerWidth(true); ///240

  if ($(".sideBar").css("left") == "0px") {                                    ///240
    $(".sideBar").animate({ left: `-${colorBoxWidth}` }, 1000)
  }
  else {
    $(".sideBar").animate({ left: `0px` }, 1000)
  }
})

$("#myOption").click(function () {
  $(".option").animate({ left: "-240px" }, 2000)
})