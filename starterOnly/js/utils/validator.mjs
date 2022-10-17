import { minAge } from "../app.js";

export const validator = {
  /** @param {HTMLInputElement} input text input
   *  @return {{validity: boolean, error: string}}
   * Checks if the input value contains 2 to 30 alphabetic characters  */
  firstName(input) {
    const validity = /^([a-zA-Z'éèàçêï\+-][\s]{0,1}){2,30}$/.test(input.value);
    const error = "Veuillez entrer 2 lettres ou plus pour le champ du prénom.";
    return { validity, error };
  },

  /** @param {HTMLInputElement} input text input
   *  @return {{validity: boolean, error: string}}
   * Checks if the input value contains 2 to 30 alphabetic characters  */
  lastName(input) {
    return this.firstName(input);
  },

  /** @param {HTMLInputElement} input email input
   *  @return {{validity: boolean, error: string}}
   * Checks if the input value is a valid email address  */
  email(input) {
    const error = "Veuillez saisir une adresse email valide.";
    const validity =
      /^([a-z0-9]+(?:[._-][a-z0-9]+)*)@([a-z0-9]+(?:[.-][a-z0-9]+)*\.[a-z]{2,})$/i.test(
        input.value
      );
    return { validity, error };
  },

  /** @param {HTMLInputElement} input date input
   *  @return {{validity: boolean, error: string}}
   *  Calculate the user age using input value, check if age is > thant min age  */
  birthdate(input) {
    const error = "Vous devez entrer votre date de naissance et être majeur.";

    const inputDate = new Date(input.value);
    if (!inputDate.getDate()) return { validity: false, error };

    const diff = Date.now() - inputDate;
    const age = Math.abs(new Date(diff).getUTCFullYear() - 1970);

    const validity = age >= minAge;
    return { validity, error };
  },

  /** @param {HTMLInputElement} input number input
   *  @return {{validity: boolean, error: string}}
   *  Check that input value is between 0 and 99  */
  quantity(input) {
    const error = "Vous devez saisir un chiffre compris entre 0 et 100.";
    if (!input.value) return { validity: false, error };

    const validity = +input.value >= 0 && +input.value < 100;

    return { validity, error };
  },

  /** @param {HTMLInputElement} input checkbox input
   *  @return {{validity: boolean, error: string}}
   *  Check that checkbox is checked  */
  checkbox1(input) {
    const error =
      "Vous devez vérifier que vous acceptez les termes et conditions.";
    const validity = input.checked;
    return { validity, error };
  },

  /** @param {HTMLInputElement} input radio input
   *  @return {{validity: boolean, error: string}}
   *  Check that an input radio is selected  */
  location1(input) {
    const error = "Vous devez choisir une option.";

    const checkedLocation = document.querySelectorAll(
      "[name=location]:checked"
    );

    const validity = checkedLocation.length === 1;
    return { validity, error };
  },
};
