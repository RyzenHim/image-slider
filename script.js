let rightBtn = document.getElementById("rightBtn");
let leftBtn = document.getElementById("leftBtn");
let leftRightBtn = document.querySelectorAll(".arrow_btn");
let mainContainer = document.getElementById("main_container");
let mode = document.querySelector(".color_mode");
let modeimg = document.getElementById("mode_light");
let allImg = document.querySelectorAll("#imgone");

mode.addEventListener("click", function changeColor() {
  if (mainContainer.classList.contains("main_container_dark")) {
    mainContainer.classList.add("main_container");
    mainContainer.classList.remove("main_container_dark");
    leftRightBtn.forEach(function color(c) {
      c.style.background = "#284C4C";
    });
    modeimg.src =
      "assets/icons/dark_mode_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
  } else {
    mainContainer.classList.remove("main_container");
    mainContainer.classList.add("main_container_dark");

    modeimg.src =
      "assets/icons/light_mode_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
  }
});

allImg.forEach((e) => {
  e.addEventListener("click", function changebg() {
    console.log("background changed");
    // mainContainer.style.backgroundImage = `url(${e.src})`;
    let coverImg = document.querySelector(".bg_img");
    coverImg.setAttribute("src", `${e.src}`);
  });
});

let slider = document.querySelector(".img_container");
let rightbtn = document.querySelector("#rightBtn");
let leftbtn = document.querySelector("#leftBtn");

rightBtn.addEventListener("click", function slide() {
  slider.style.transform = `translateX(-500px)`;
});
leftbtn.addEventListener("click", function slide() {
  slider.style.transform = `translateX(500px)`;
});
