import { FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { validatePasswords } from './validator.passwords';

describe('validatePasswords', () => {
  const passwordControlName: string = 'passwordControlName';
  const confirmPasswordControlName: string = 'confirmPasswordControlName';
  let formGroup: FormGroup = new FormGroup({});

  beforeEach(() => {
    formGroup = new FormGroup(
      {
        [passwordControlName]: new FormControl(),
        [confirmPasswordControlName]: new FormControl(),
      },
      validatePasswords(
        passwordControlName,
        confirmPasswordControlName
      ) as ValidatorFn
    );
  });

  it('should match password and confirm password', () => {
    formGroup.patchValue({
      [passwordControlName]: 'Password',
      [confirmPasswordControlName]: 'Password',
    });
    expect(formGroup.get(confirmPasswordControlName)!.valid).toBe(true);
  });

  it('should has "passwordMismatch" error if passwords do not match', () => {
    formGroup.patchValue({
      [passwordControlName]: 'Password',
      [confirmPasswordControlName]: 'Nodsassword',
    });

    expect(
      formGroup.get(confirmPasswordControlName)!.hasError('passwordMismatch')
    ).toBe(true);
  });
});
