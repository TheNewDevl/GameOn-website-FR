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

const form = document.querySelector("form");

const validators = {
  firstName(input) {
    return /^([a-zA-Z'éèàçêï\+-][\s]{0,1}){2,30}$/.test(input.value);
  },
  lastName(input) {
    return /^([a-zA-Z'éèàçêï\+-][\s]{0,1}){2,30}$/.test(input.value);
  },
  email(input) {
    return /^([a-z0-9]+(?:[._-][a-z0-9]+)*)@([a-z0-9]+(?:[.-][a-z0-9]+)*\.[a-z]{2,})$/i.test(
      input.value
    );
  },
  birthdate(input) {
    const inputDate = new Date(input.value);
    if (!inputDate.getDate()) return false;
    const diff = Date.now() - inputDate;
    const age = Math.abs(new Date(diff).getUTCFullYear() - 1970);
    return age >= 18;
  },
  quantity(input) {
    return +input.value > 0 && +input.value < 100;
  },
};

/** Check all inputs validity */
const checkFormValidity = (e) => {
  let formValidity = true;

  const inputs = document.querySelectorAll(
    "#firstName,#lastName,#email,#birthdate,#quantity"
  );
  const requiredCheckbox = document.querySelector("#checkbox1");
  const checkedLocation = document.querySelectorAll("[name=location]:checked");

  inputs.forEach((input) => {
    if (!validators[input.id](input)) {
      formValidity = false;
    }
  });
  if (!requiredCheckbox.checked) formValidity = false;
  if (checkedLocation.length !== 1) formValidity = false;

  if (!formValidity) {
    e.preventDefault();
  } else {
    console.log("Il y a une erreur dans le formulaire");
  }
  return formValidity;
};

form.addEventListener("submit", checkFormValidity);
