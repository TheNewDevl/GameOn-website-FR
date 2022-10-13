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
const closeModalBtn = document.querySelector(".close");
const form = document.querySelector("form");
const content = document.querySelector(".content");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

/** close modal setting fade out animation and modalbg display none */
const closeModal = () => {
  content.classList.add("modal-close");
  setTimeout(() => {
    content.classList.remove("modal-close");
    modalbg.style.display = "none";
  }, 500);
};

const validators = {
  /** @param input {HTMLInputElement}
   * @return boolean */
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
    if (!input.value) return false;
    return +input.value >= 0 && +input.value < 100;
  },
  checkbox1(input) {
    return input.checked;
  },
  location1(input) {
    const checkedLocation = document.querySelectorAll(
      "[name=location]:checked"
    );
    return checkedLocation.length === 1;
  },
};

const inputErrors = {
  firstName: "Veuillez entrer 2 lettres ou plus pour le champ du prénom.",
  lastName: "Veuillez entrer 2 lettres ou plus pour le champ du nom.",
  email: "Veuillez saisir une adresse email valide.",
  birthdate: "Vous devez entrer votre date de naissance et être majeur.",
  quantity: "Vous devez saisir un chiffre compris entre 0 et 100.",
  checkbox1: "Vous devez vérifier que vous acceptez les termes et conditions.",
  location1: "Vous devez choisir une option.",
};

/** Check all inputs validity
 * @return {boolean} false if one or more inputs are invalid */
const checkFormValidity = () => {
  let formValidity = true;

  const inputs = document.querySelectorAll(
    "#firstName,#lastName,#email,#birthdate,#quantity, #checkbox1, #location1"
  );

  inputs.forEach((input) => {
    if (!validators[input.id](input)) {
      createError(inputErrors[input.id], input);
      formValidity = false;
    } else {
      removeError(input);
    }
  });
  return formValidity;
};

/**
 * if no existing error, create a p element and append it to the closest form-data container
 * @param {string} error
 * @param {HTMLInputElement} input
 * */
const createError = (error, input) => {
  const hasError = input.closest(".formData").querySelector(".input-error");
  if (!hasError) {
    const p = document.createElement("p");
    p.className = "input-error";
    p.textContent = error;
    input.closest(".formData").appendChild(p);
  }
};

/**
 * if exists , remove the closest form-data error
 * @param {HTMLInputElement} input
 * */
const removeError = (input) => {
  const error = input.closest(".formData").querySelector(".input-error");
  if (error) error.remove();
};

const handleSubmit = (e) => {
  const submitBtn = document.querySelector("[type=submit]");
  e.preventDefault();

  switch (submitBtn.value) {
    case "C'est parti":
      if (checkFormValidity()) {
        document.querySelectorAll("input").forEach((i) => {
          i.type === "text" && (i.value = "");
          i.type === "number" && (i.value = "");
          i.type === "email" && (i.value = "");
          i.type === "date" && (i.value = "");
          i.checked && (i.checked = false);
        });
        document.querySelector(".thks-msg").style.display = "block";
        formData.forEach((f) => (f.style.display = "none"));
        submitBtn.value = "Fermer";
      }
      break;
    case "Fermer":
      setTimeout(() => {
        formData.forEach((f) => (f.style.display = "block"));
        document.querySelector(".thks-msg").style.display = "none";
      }, 1000);
      closeModal();
      submitBtn.value = "C'est parti";
      break;
  }
};

closeModalBtn.addEventListener("click", closeModal);
form.addEventListener("submit", handleSubmit);
