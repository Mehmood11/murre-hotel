let addBtn = document.querySelector("#add");
let addBtn1 = document.querySelector("#add1");
let subBtn = document.querySelector("#sub");
let subBtn1 = document.querySelector("#sub1");
let qty = document.querySelector("#qtyBox");
let qty1 = document.querySelector("#qtyBox1");

addBtn.addEventListener("click", () => {
  function hi() {
    if (qty.value < 0 || qty.value > 5) {
      return;
    } else {
      qty.value = parseInt(qty.value) + 1;
    }
  }
  hi();
});

subBtn.addEventListener("click", () => {
  if (qty.value <= 0) {
    qty.value = 0;
  } else {
    qty.value = parseInt(qty.value) - 1;
  }
});
addBtn1.addEventListener("click", () => {
  function hi() {
    if (qty1.value < 0 || qty1.value > 5) {
      return;
    } else {
      qty1.value = parseInt(qty1.value) + 1;
    }
  }
  hi();
});

subBtn1.addEventListener("click", () => {
  if (qty1.value <= 0) {
    qty1.value = 0;
  } else {
    qty1.value = parseInt(qty1.value) - 1;
  }
});

function myFunction() {
  let menutoggle = document.querySelector(".toggle");
  menutoggle.classList.toggle("active");
}

// Slider
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  loop: true,
  nav: true,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    550: {
      slidesPerView: 1,
    },
    800: {
      slidesPerView: 1,
    },
    1000: {
      slidesPerView: 1,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

$(document).ready(function () {
  $(".counter").counterUp({
    delay: 20,
    time: 1200,
  });
  $("#toggle").click(function () {
    $(".main-home .header ul").toggleClass("active");
    // $("#toggle").toggleClass("active");
  });

  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".main-home .header").addClass("sticky");
    } else {
      $(".main-home .header").removeClass("sticky");
    }
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });
});
