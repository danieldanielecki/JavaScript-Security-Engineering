import { Component, OnInit } from '@angular/core';
import { Data } from './data.model';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormGroupDirective,
} from '@angular/forms';
import { RegisterService } from './register.service';
import Swal from 'sweetalert2';
import { validatePasswords } from './validators/validator.passwords';
import { validateNamesInPasswords } from './validators/validator.names-in-password';

@Component({
  selector: 'fedex-test-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

/**
 * @class
 */
export class HomeComponent implements OnInit {
  /**
   * @constructs
   * @description Creates a new instance of this component.
   * @param {FormBuilder} formBuilder - an abstraction class object to create a form group control for the contact form.
   * @param {RegisterService} registerService - service to perform HTTP POST request.
   */
  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService
  ) {}

  public contactForm: FormGroup = new FormGroup({}); // Declare variable to handle the form elements with required validators.

  ngOnInit() {
    // Create contact form with all required validators.
    this.contactForm = this.formBuilder.group(
      {
        formControlFirstName: [
          '',
          Validators.compose([
            Validators.maxLength(64),
            Validators.minLength(2),
            Validators.pattern('^[a-zA-Z ]*$'),
            Validators.required,
          ]),
        ],
        formControlLastName: [
          '',
          Validators.compose([
            Validators.maxLength(64),
            Validators.minLength(2),
            Validators.pattern('^[a-zA-Z ]*$'),
            Validators.required,
          ]),
        ],
        formControlEmail: [
          '',
          Validators.compose([
            Validators.email,
            Validators.maxLength(64),
            Validators.minLength(6),
            Validators.required,
          ]),
        ],
        formControlPassword: [
          '',
          Validators.compose([
            Validators.maxLength(64),
            Validators.minLength(8),
            Validators.pattern('^(?=.*[a-z])(?=.*?[A-Z]).*$'),
            Validators.required,
          ]),
        ],
        formControlConfirmPassword: [
          '',
          Validators.compose([
            Validators.maxLength(64),
            Validators.minLength(8),
            Validators.pattern('^(?=.*[a-z])(?=.*?[A-Z]).*$'),
            Validators.required,
          ]),
        ],
      },
      {
        validator: [
          validatePasswords(
            'formControlPassword',
            'formControlConfirmPassword'
          ),
          validateNamesInPasswords(
            'formControlFirstName',
            'formControlLastName',
            'formControlPassword'
          ),
        ],
      }
    );
  }

  /**
   * @access public
   * @async
   * @description Perform certain actions on button submit of the contact form.
   * @function onSubmit
   * @param {FormGroupDirective} formDirective - object used to reset validators.
   * @returns {void}
   */
  public onSubmit(formDirective: FormGroupDirective): void {
    const baseURL = 'https://demo-api.vercel.app/users';
    const dataToBeSend: Data = {
      firstName: this.contactForm.get('formControlFirstName')!.value,
      lastName: this.contactForm.get('formControlLastName')!.value,
      email: this.contactForm.get('formControlEmail')!.value,
    };
    // Give a call to registerService to register user.
    this.registerService.registerUser(dataToBeSend, baseURL).subscribe(() => {
      Swal.fire('Success', 'You have successfuly registered!', 'success');
      formDirective.resetForm(); // Reset validators, i.e. to workaround #4190 (https://github.com/angular/components/issues/4190).
      this.contactForm.reset(); // Reset form once user will click "Register".
    });
  }
}
