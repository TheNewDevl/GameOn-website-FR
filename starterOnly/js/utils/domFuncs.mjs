/** handle the navigation classname */
export function editNav() {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/**
 * if no existing error, create a p element and append it to the closest form-data container
 * @param {string} error
 * @param {HTMLInputElement} input
 * */
export const createError = (error, input) => {
  const closestFormData = input.closest(".formData");
  const hasError = closestFormData.querySelector(".input-error");
  if (!hasError) {
    const p = document.createElement("p");
    p.className = "input-error";
    p.textContent = error;
    closestFormData.appendChild(p);
    input.style.border = "2px solid red";
  }
};

/**
 * if exists , remove the closest form-data error
 * @param {HTMLInputElement} input
 * */
export const removeError = (input) => {
  const error = input.closest(".formData").querySelector(".input-error");
  if (error) {
    input.style.border = "";
    error.remove();
  }
};
