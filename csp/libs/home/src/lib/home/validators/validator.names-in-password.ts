import { FormGroup } from '@angular/forms';

/**
 * @description Validate if first or last name are included in password or password confirmation.
 * @function validateNamesInPasswords
 * @param {string} firstNameControName - reference to formControlFirstName of the contactForm.
 * @param {string} lastNameControName - reference to formControlLastName of the contactForm.
 * @param {string} passwordControlName - reference to formControlPassword of the contactForm.
 * @returns {(formGroup: FormGroup) => void | any}
 */
export function validateNamesInPasswords(
  firstNameControName: string,
  lastNameControName: string,
  passwordControlName: string
): (formGroup: FormGroup) => void | any {
  {
    return (formGroup: FormGroup) => {
      // Get values of desired controls of the form.
      const firstNameControl = formGroup.controls[firstNameControName];
      const lastNameControl = formGroup.controls[lastNameControName];
      const passwordControl = formGroup.controls[passwordControlName];

      if (
        // Don't show the error if any different error occured in password.
        passwordControl.errors &&
        !passwordControl.errors.namesInPassword
      ) {
        return; // Different validator shown an error, therefore return.
      }

      // Cases with catching empty first and/or last name and comparing it to password are below in the if/else blocks.
      if (firstNameControl.value === '' && lastNameControl.value === '') {
        passwordControl.setErrors(null); // For empty values of first and last name don't show any error.
      }
      // Only first name has a value.
      else if (firstNameControl.value !== '' && lastNameControl.value === '') {
        // Check if first name contains password.
        if (
          passwordControl.value
            .toLowerCase()
            .includes(firstNameControl.value.toLowerCase())
        ) {
          passwordControl.setErrors({ namesInPassword: true }); // First name contains password, therefore show namesInPassword error.
        }
        // All other cases when only first name has a value.
        else {
          passwordControl.setErrors(null); // First name doesn't contains password, therefore don't show any error.
        }
      }
      // Only last name has a value.
      else if (firstNameControl.value === '' && lastNameControl.value !== '') {
        // Check if last name contains password.
        if (
          passwordControl.value
            .toLowerCase()
            .includes(lastNameControl.value.toLowerCase())
        ) {
          passwordControl.setErrors({ namesInPassword: true }); // Last name contains password, therefore show namesInPassword error.
        }
        // All other cases when only last name has a value.
        else {
          passwordControl.setErrors(null); // Last name doesn't contains password, therefore don't show any error.
        }
      }
      // First and last name have values.
      else if (firstNameControl.value !== '' && lastNameControl.value !== '') {
        // Check if first or last name contains password.
        if (
          passwordControl.value
            .toLowerCase()
            .includes(firstNameControl.value.toLowerCase()) ||
          passwordControl.value
            .toLowerCase()
            .includes(lastNameControl.value.toLowerCase())
        ) {
          passwordControl.setErrors({ namesInPassword: true }); // First or last name contains password, therefore show namesInPassword error.
        }
        // All other cases when first and last name have values.
        else {
          passwordControl.setErrors(null); // First or last name don't contain password, therefore don't show any error.
        }
      }
      // All other cases.
      else {
        passwordControl.setErrors(null); // By default don't show any error.
      }
    };
  }
}
