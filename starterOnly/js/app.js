import { launchModal, closeModal } from "./utils/modal.mjs";
import { editNav } from "./utils/domFuncs.mjs";
import { checkFormValidity, handleSubmit } from "./handleForm.mjs";

// DOM Elements
const modalBtn = document.querySelectorAll(".modal-btn");
const closeModalBtn = document.querySelector(".close");
const form = document.querySelector("form");
const modalbg = document.querySelector(".bground");
const formData = document.querySelectorAll(".formData");
const responsiveIcon = document.querySelector(".icon");
const changeInputs = document.querySelectorAll("input:not([type=radio])");
const modalBody = document.querySelector(".modal-body");
// events
responsiveIcon.addEventListener("click", editNav);
modalBtn.forEach((btn) =>
  btn.addEventListener("click", () => launchModal(modalbg))
);
closeModalBtn.addEventListener("click", () => closeModal(modalbg));
changeInputs.forEach((input) => {
  if (input.id !== "checkbox2") {
    input.addEventListener("change", (e) => {
      checkFormValidity([e.currentTarget]);
    });
  }
});
form.addEventListener("submit", (e) => handleSubmit(e, modalbg, formData));

//click outside of the modal with close the modal
modalbg.addEventListener("click", () => closeModal(modalBody));
modalBody.addEventListener("click", (e) => e.stopPropagation());
