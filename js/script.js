/*nav bar internal links*/

const text = document.querySelector(".js-about-me-class");
const text2 = document.querySelector(".js-projects-class");
const text3 = document.querySelector(".js-contacts-class");
const changeColor = document.querySelector(".js-change-color");

/*text.style.color = "red";*/
/*text.classList.add("changeColor");*/
/*text.classList.remove("changeColor");*/
text.addEventListener("mouseenter", function() {
  /*you don't use on with the event using addEventListener*/
  text.classList.add("js-change-color");
  /*let x, i;
  x = document.querySelectorAll(".aboutMeClass");
  for (i = 0; i < x.length; i++) {
    x[i].classList.add("changeColor");
  }*/
});

text.addEventListener("mouseleave", function() {
  text.classList.remove("js-change-color");
  /*let x, i;
  x = document.querySelectorAll(".aboutMeClass");
  for (i = 0; i < x.length; i++) {
    x[i].classList.remove("changeColor");
  }*/
});

text2.addEventListener("mouseenter", function() {
  text2.classList.add("js-change-color");
});

text2.addEventListener("mouseleave", function() {
  text2.classList.remove("js-change-color");
});

text3.addEventListener("mouseenter", function() {
  text3.classList.add("js-change-color");
});

text3.addEventListener("mouseleave", function() {
  text3.classList.remove("js-change-color");
});

/*burger menu mobile*/

const burgerMenuAction = function() {
  const jsBurgerMenu = document.querySelector(".burger-menu");
  const jsNav = document.querySelector(".nav-ul-class");

  jsBurgerMenu.addEventListener("click", function() {
    jsNav.classList.toggle("js-burger-menu");
    /*toggle between two states, so two classes*/
  });
};

burgerMenuAction();

window.addEventListener("click", function(event) {
  const jsNav = document.querySelector(".nav-ul-class");
  const jsBurgerMenu = document.querySelector(".burger-menu");
  if (event.target !== jsBurgerMenu) {
    jsNav.classList.add("js-burger-menu");
  }
}); //close nav menu when clicking outside of nav

/*icons mouse effect*/

const jsIcon1 = document.querySelector(".icon-1");
const jsIcon2 = document.querySelector(".icon-2");
const jsIcon3 = document.querySelector(".icon-3");
const jsIcon4 = document.querySelector(".icon-4");

jsIcon1.addEventListener("mouseenter", function() {
  jsIcon1.classList.add("js-icon-float-shadow");
});

jsIcon1.addEventListener("mouseleave", function() {
  jsIcon1.classList.remove("js-icon-float-shadow");
});
/*icon-2*/
jsIcon2.addEventListener("mouseenter", function() {
  jsIcon2.classList.add("js-icon-float-shadow-2");
});

jsIcon2.addEventListener("mouseleave", function() {
  jsIcon2.classList.remove("js-icon-float-shadow-2");
});
/*icon-3*/
jsIcon3.addEventListener("mouseenter", function() {
  jsIcon3.classList.add("js-icon-float-shadow-3");
});

jsIcon3.addEventListener("mouseleave", function() {
  jsIcon3.classList.remove("js-icon-float-shadow-3");
});
/*icon-4*/
jsIcon4.addEventListener("mouseenter", function() {
  jsIcon4.classList.add("js-icon-float-shadow-4");
});

jsIcon4.addEventListener("mouseleave", function() {
  jsIcon4.classList.remove("js-icon-float-shadow-4");
});

/*modal on projects*/

const modalProj = document.getElementById("modal-id");
const btnModal = document.getElementById("btn-modal");
const btnClose = document.getElementById("close-btn1");
/*const btnClose = document.getElementsByClassName("btn-close")[0];*/

btnModal.addEventListener("click", function() {
  modalProj.style.display = "block";
});

btnClose.addEventListener("click", function() {
  modalProj.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target === modalProj) {
    modalProj.style.display = "none";
  }
});

const modalProj2 = document.getElementById("modal-id2");
const btnModal2 = document.getElementById("btn-modal2");
const btnClose2 = document.getElementById("close-btn2");
/*const btnClose = document.getElementsByClassName("btn-close")[0];*/

btnModal2.addEventListener("click", function() {
  modalProj2.style.display = "block";
});

btnClose2.addEventListener("click", function() {
  modalProj2.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target === modalProj2) {
    modalProj2.style.display = "none";
  }
});

const modalProj3 = document.getElementById("modal-id3");
const btnModal3 = document.getElementById("btn-modal3");
const btnClose3 = document.getElementById("close-btn3");
/*const btnClose = document.getElementsByClassName("btn-close")[0];*/

btnModal3.addEventListener("click", function() {
  modalProj3.style.display = "block";
});

btnClose3.addEventListener("click", function() {
  modalProj3.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target === modalProj3) {
    modalProj3.style.display = "none";
  }
});

const modalProj4 = document.getElementById("modal-id4");
const btnModal4 = document.getElementById("btn-modal4");
const btnClose4 = document.getElementById("close-btn4");
/*const btnClose = document.getElementsByClassName("btn-close")[0];*/

btnModal4.addEventListener("click", function() {
  modalProj4.style.display = "block";
});

btnClose4.addEventListener("click", function() {
  modalProj4.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target === modalProj4) {
    modalProj4.style.display = "none";
  }
});

/*effect as you mouse over a project*/

/*document.querySelectorAll(".zoom-pic").forEach(item => {
  item.addEventListener("mouseenter", event => {
    item.classList.add("js-zoom-pic");
  });
});

document.querySelectorAll(".zoom-pic").forEach(item => {
  item.addEventListener("mouseleave", event => {
    item.classList.remove("js-zoom-pic");
  });
});*/

/*for (const zoom-pic of zoomPicEffect) {
  zoom-pic.addEventListener("mouseenter", function(event) {
    item.classList.add("js-zoom-pic");
  });
};

zoomPicEffect.addEventListener("mouseleave", function() {
  zoomPicEffect.classList.remove("js-zoom-pic");
});*/
