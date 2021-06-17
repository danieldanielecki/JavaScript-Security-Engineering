import { FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { validateNamesInPasswords } from './validator.names-in-password';

describe('validateNamesInPasswords', () => {
  const firstNameControName: string = 'firstNameControName';
  const lastNameControName: string = 'lastNameControName';
  const passwordControlName: string = 'passwordControlName';
  let formGroup: FormGroup = new FormGroup({});

  beforeEach(() => {
    formGroup = new FormGroup(
      {
        [firstNameControName]: new FormControl(''),
        [lastNameControName]: new FormControl(''),
        [passwordControlName]: new FormControl(''),
      },
      validateNamesInPasswords(
        firstNameControName,
        lastNameControName,
        passwordControlName
      ) as ValidatorFn
    );
  });

  it('should has local formValue equal to global formGroup', () => {
    const formValue = {
      [firstNameControName]: 'Daniel',
      [lastNameControName]: 'Danielecki',
      [passwordControlName]: 'Danielecki',
    };
    formGroup.patchValue(formValue);
  });

  it('should has "namesInPassword" error on first name in password', () => {
    const formValue = {
      [firstNameControName]: 'Daniel',
      [lastNameControName]: 'qweqweqwe',
      [passwordControlName]: 'Danielecki',
    };
    formGroup.patchValue(formValue);

    expect(
      formGroup.get(passwordControlName)!.hasError('namesInPassword')
    ).toBe(true);
  });

  it('should has "namesInPassword" error on last name in password', () => {
    const formValue = {
      [firstNameControName]: 'foo',
      [lastNameControName]: 'Danielecki',
      [passwordControlName]: 'dDanielecki',
    };
    formGroup.patchValue(formValue);

    expect(
      formGroup.get(passwordControlName)!.hasError('namesInPassword')
    ).toBe(true);
  });
});
