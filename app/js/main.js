// Start burger menu
let menuBtn = document.querySelector("#menu-btn");
let menu = document.querySelector(".header .menu-top__list");

menuBtn.onclick = () => {
  menuBtn.classList.toggle("fa-times");
  menu.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("active");
  menuBtn.classList.remove("fa-times");
};
// End burger menu

// В секции Top переключение картинок.
function imgSlider(anything) {
  document.querySelector(".top__img").src = anything;
}

// Добавление фона фиксированной шапки сайта прри скроле.
$(window).scroll(function () {
  let topHeader = $(".header").offset().top;
  if (topHeader > 50) {
    $(".header").addClass("active");
  } else {
    $(".header").removeClass("active");
  }
});

// Функция JQUERY
$(function () {
  // Слайдер Акции
  $(".stock__inner").slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 841,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  // Слайдер отзывы
  $(".reviews__inner").slick({
    arrows: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img class="slick-prev-btn" src="images/icons/arrow-left.svg" alt=""></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img class="slick-prev-btn" src="images/icons/arrow-right.svg" alt=""></button>',
    dots: false,
    slidesToShow: 3,
    
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          adaptiveHeight: true,
          arrows: false,
        },
      },
    ],
  });

  // Плавный скролл
  $(".menu-top a").on("click", function (event) {
    event.preventDefault();
    let id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1000);
  });

  // Фильтр
  let mixer = mixitup(".menu__inner");
});
