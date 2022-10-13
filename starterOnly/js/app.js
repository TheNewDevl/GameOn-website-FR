import { launchModal, closeModal } from "./utils/modal.mjs";
import { editNav } from "./utils/domFuncs.mjs";
import { handleSubmit } from "./handleForm.mjs";

// DOM Elements
const modalBtn = document.querySelectorAll(".modal-btn");
const closeModalBtn = document.querySelector(".close");
const form = document.querySelector("form");
const modalbg = document.querySelector(".bground");
const formData = document.querySelectorAll(".formData");
const responsiveIcon = document.querySelector(".icon");

// events
responsiveIcon.addEventListener("click", editNav);
modalBtn.forEach((btn) =>
  btn.addEventListener("click", () => launchModal(modalbg))
);
closeModalBtn.addEventListener("click", () => closeModal(modalbg));
form.addEventListener("submit", (e) => handleSubmit(e, modalbg, formData));
