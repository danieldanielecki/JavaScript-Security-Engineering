import { FormGroup } from '@angular/forms';

/**
 * @description Validate if passwords are different.
 * @function validatePasswords
 * @param {string} passwordControlName - reference to formControlPassword of the contactForm.
 * @param {string} confirmPasswordControlName - reference to formControlConfirmPassword of the contactForm.
 * @returns {(formGroup: FormGroup) => void | any}
 */
export function validatePasswords(
  passwordControlName: string,
  confirmPasswordControlName: string
): (formGroup: FormGroup) => void | any {
  return (formGroup: FormGroup) => {
    // Get values of desired controls of the form.
    const passwordControl = formGroup.controls[passwordControlName];
    const confirmPasswordControl =
      formGroup.controls[confirmPasswordControlName];

    if (
      // Don't show the error if any different error occured in password confirmation.
      confirmPasswordControl.errors &&
      !confirmPasswordControl.errors.passwordMismatch
    ) {
      return; // Different validator shown an error, therefore return.
    }

    // Check if password and password confirmation are different.
    if (passwordControl.value !== confirmPasswordControl.value) {
      confirmPasswordControl.setErrors({ passwordMismatch: true }); // Password and confirm password are different, therefore show passwordMismatch error.
    } else {
      confirmPasswordControl.setErrors(null); // Password and confirm password are the same, therefore don't display any error.
    }
  };
}
