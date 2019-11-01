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

const burgurMenuAction = function() {
  const jsBurgerMenu = document.querySelector(".burger-menu");
  const jsNav = document.querySelector(".nav-ul-class");
  
  jsBurgerMenu.addEventListener("click", function() {
    jsNav.classList.toggle("js-burger-menu");
    /*toggle between two states, so two classes*/
  });
}

burgurMenuAction();

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