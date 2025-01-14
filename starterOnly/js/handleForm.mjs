import { validator } from "./utils/validator.mjs";
import { createError, removeError } from "./utils/domFuncs.mjs";
import { closeModal } from "./utils/modal.mjs";

/** Check all inputs validity
 * @return {boolean} false if one or more inputs are invalid */
export const checkFormValidity = (
  inputs = document.querySelectorAll(
    "#firstName,#lastName,#email,#birthdate,#quantity, #checkbox1, #location1"
  )
) => {
  let formValidity = true;

  inputs.forEach((input) => {
    const validation = validator[input.id](input);
    if (!validation.validity) {
      createError(validation.error, input);
      formValidity = false;
    } else {
      removeError(input);
    }
  });
  return formValidity;
};

/**
 * @param {SubmitEvent} e
 * @param {HTMLDivElement} modalbg
 * @param {NodeListOf<.HTMLDivElement>} formData
 * */
export const handleSubmit = (e, modalbg, formData) => {
  const submitBtn = document.querySelector("[type=submit]");
  e.preventDefault();

  switch (submitBtn.value) {
    case "C'est parti":
      if (checkFormValidity()) {
        let types = ["text", "number", "email", "date"];
        //reset input values
        document.querySelectorAll("input").forEach((i) => {
          types.includes(i.type) && (i.value = "");
          i.checked && (i.checked = false);
        });
        //hide inputs and display thanks message
        formData.forEach((f) => (f.style.display = "none"));
        document.querySelector(".thks-msg").style.display = "flex";
        submitBtn.value = "Fermer";
      }
      break;
    case "Fermer":
      //hide thanks message and display inputs again
      setTimeout(() => {
        formData.forEach((f) => (f.style.display = "block"));
        document.querySelector(".thks-msg").style.display = "none";
        submitBtn.value = "C'est parti";
      }, 1000);
      closeModal(modalbg);
      break;
  }
};
