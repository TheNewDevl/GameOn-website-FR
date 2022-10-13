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
export const removeError = (input) => {
  const error = input.closest(".formData").querySelector(".input-error");
  if (error) error.remove();
};
