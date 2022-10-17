/**
 * @param modalbg {HTMLDivElement} modal container
 * launch modal form */
export function launchModal(modalbg) {
  modalbg.style.display = "flex";
}

/**
 * @param modalbg {HTMLDivElement} modal container
 * close modal setting fade out animation and modalbg display none */
export const closeModal = (modalbg) => {
  const content = modalbg.firstElementChild;
  //will run a fade out animation
  content.classList.add("modal-close");
  //timeout to wait for the animation before set display none
  setTimeout(() => {
    content.classList.remove("modal-close");
    modalbg.style.display = "none";
  }, 500);
};
