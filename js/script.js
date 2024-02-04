// ----------------------------------- # CARROSSEL INFO

var radio = document.querySelector(".manual-btn");
var cont = 1;

document.getElementById("radio1").checked = true;

setInterval(() => {
  proximaImg();
}, 15000);

function proximaImg() {
  cont++;
  if (cont > 3) {
    cont = 1;
  }
  document.getElementById("radio" + cont).checked = true;
}

// ----------------------------------- # OCULTAR/MOSTRAR RESPOSTAS QUESTIONS

const faqbtn1 = document.getElementById("faq-btn-1");
const faqbtn2 = document.getElementById("faq-btn-2");
const faqbtn3 = document.getElementById("faq-btn-3");
const faqbtn4 = document.getElementById("faq-btn-4");
const faqbtn5 = document.getElementById("faq-btn-5");
const faqbtn6 = document.getElementById("faq-btn-6");

const faqAnswer1 = document.getElementById("faq-answer-1");
const faqAnswer2 = document.getElementById("faq-answer-2");
const faqAnswer3 = document.getElementById("faq-answer-3");
const faqAnswer4 = document.getElementById("faq-answer-4");
const faqAnswer5 = document.getElementById("faq-answer-5");
const faqAnswer6 = document.getElementById("faq-answer-6");

const rotateArrow1 = document.getElementById("rotate-arrow1");
const rotateArrow2 = document.getElementById("rotate-arrow2");
const rotateArrow3 = document.getElementById("rotate-arrow3");
const rotateArrow4 = document.getElementById("rotate-arrow4");
const rotateArrow5 = document.getElementById("rotate-arrow5");
const rotateArrow6 = document.getElementById("rotate-arrow6");

faqbtn1.addEventListener("click", function removeHidden() {
  if (faqAnswer1.classList.contains("hidden")) {
    faqAnswer1.classList.remove("hidden");
    rotateArrow1.classList.add("girar");
  } else {
    faqAnswer1.classList.add("hidden");
    rotateArrow1.classList.remove("girar");
  }
});

faqbtn2.addEventListener("click", function removeHidden() {
  if (faqAnswer2.classList.contains("hidden")) {
    faqAnswer2.classList.remove("hidden");
    rotateArrow2.classList.add("girar");
  } else {
    faqAnswer2.classList.add("hidden");
    rotateArrow2.classList.remove("girar");
  }
});

faqbtn3.addEventListener("click", function removeHidden() {
  if (faqAnswer3.classList.contains("hidden")) {
    faqAnswer3.classList.remove("hidden");
    rotateArrow3.classList.add("girar");
  } else {
    faqAnswer3.classList.add("hidden");
    rotateArrow3.classList.remove("girar");
  }
});

faqbtn4.addEventListener("click", function removeHidden() {
  if (faqAnswer4.classList.contains("hidden")) {
    faqAnswer4.classList.remove("hidden");
    rotateArrow4.classList.add("girar");
  } else {
    faqAnswer4.classList.add("hidden");
    rotateArrow4.classList.remove("girar");
  }
});

faqbtn5.addEventListener("click", function removeHidden() {
  if (faqAnswer5.classList.contains("hidden")) {
    faqAnswer5.classList.remove("hidden");
    rotateArrow5.classList.add("girar");
  } else {
    faqAnswer5.classList.add("hidden");
    rotateArrow5.classList.remove("girar");
  }
});

faqbtn6.addEventListener("click", function removeHidden() {
  if (faqAnswer6.classList.contains("hidden")) {
    faqAnswer6.classList.remove("hidden");
    rotateArrow6.classList.add("girar");
  } else {
    faqAnswer6.classList.add("hidden");
    rotateArrow6.classList.remove("girar");
  }
});

// -----------------------------------
