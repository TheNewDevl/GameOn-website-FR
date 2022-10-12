function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

/** close modal setting fade out animation and modalbg display none */
const closeModal = () => {
  const content = document.querySelector(".content");
  const btn = document.querySelector(".close");

  btn.addEventListener("click", () => {
    content.classList.add("modal-close");
    setTimeout(() => {
      content.classList.remove("modal-close");
      modalbg.style.display = "none";
    }, 500);
  });
};

closeModal();
