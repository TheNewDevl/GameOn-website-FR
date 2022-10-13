/**
 * @param modalbg {HTMLDivElement} modal container
 * launch modal form */
export function launchModal(modalbg) {
  modalbg.style.display = "block";
}

/**
 * @param modalbg {HTMLDivElement} modal container
 * close modal setting fade out animation and modalbg display none */
export const closeModal = (modalbg) => {
  const content = modalbg.firstElementChild;
  content.classList.add("modal-close");
  setTimeout(() => {
    content.classList.remove("modal-close");
    modalbg.style.display = "none";
  }, 500);
};
