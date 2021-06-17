import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  FormsModule,
  ReactiveFormsModule,
  AbstractControl,
  FormGroupDirective,
  ControlContainer,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpErrorInterceptor } from './http-error.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterService } from './register.service';
describe('AppComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  const formGroupDirective: FormGroupDirective = new FormGroupDirective([], []);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
      ],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpErrorInterceptor,
          multi: true,
        },
        { provide: ControlContainer, useValue: formGroupDirective },
        FormGroupDirective,
        RegisterService,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create AppComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should have form', () => {
    const compiled: any = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('form')).toBeTruthy();
  });

  it('should render first name input element', () => {
    const compiled: any = fixture.debugElement.nativeElement;
    const firstNameInput: any = compiled.querySelector(
      'input[formControlName="formControlFirstName"]'
    );
    expect(firstNameInput).toBeTruthy();
  });

  it('should render last name input element', () => {
    const compiled: any = fixture.debugElement.nativeElement;
    const lastNameInput: any = compiled.querySelector(
      'input[formControlName="formControlLastName"]'
    );
    expect(lastNameInput).toBeTruthy();
  });

  it('should render email input element', () => {
    const compiled: any = fixture.debugElement.nativeElement;
    const emailInput: any = compiled.querySelector(
      'input[formControlName="formControlEmail"]'
    );
    expect(emailInput).toBeTruthy();
  });

  it('should render password input element', () => {
    const compiled: any = fixture.debugElement.nativeElement;
    const passwordInput: any = compiled.querySelector(
      'input[formControlName="formControlPassword"]'
    );
    expect(passwordInput).toBeTruthy();
  });

  it('should render confirm password input element', () => {
    const compiled: any = fixture.debugElement.nativeElement;
    const confirmPasswordInput: any = compiled.querySelector(
      'input[formControlName="formControlConfirmPassword"]'
    );
    expect(confirmPasswordInput).toBeTruthy();
  });

  it('should render button with "Register" text', () => {
    const compiled: any = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain('Register');
  });

  it('should test contactForm validity', () => {
    const contactForm = component.contactForm;
    expect(contactForm.valid).toBeFalsy();

    const firstNameInput: AbstractControl =
      contactForm.controls.formControlFirstName;
    firstNameInput.setValue('Daniel');

    const lastNameInput: AbstractControl =
      contactForm.controls.formControlLastName;
    lastNameInput.setValue('Danielecki');

    const emailInput: AbstractControl = contactForm.controls.formControlEmail;
    emailInput.setValue('daniel.danielecki@foo.com');

    const passwordInput: AbstractControl =
      contactForm.controls.formControlPassword;
    passwordInput.setValue('Password');

    const confirmPasswordInput: AbstractControl =
      contactForm.controls.formControlConfirmPassword;
    confirmPasswordInput.setValue('Password');

    expect(contactForm).toBeTruthy();
  });

  it('should test first name input element', () => {
    const firstNameInput: AbstractControl =
      component.contactForm.controls.formControlFirstName;
    expect(firstNameInput.valid).toBeFalsy();

    firstNameInput.setValue('Daniel');
    expect(firstNameInput.valid).toBeTruthy();

    firstNameInput.setValue('daniel');
    expect(firstNameInput.valid).toBeTruthy();

    firstNameInput.setValue('D');
    expect(firstNameInput.valid).toBeFalsy();

    firstNameInput.setValue('daniel1');
    expect(firstNameInput.valid).toBeFalsy();

    firstNameInput.setValue('Daniel1');
    expect(firstNameInput.valid).toBeFalsy();

    firstNameInput.setValue('daniel1!');
    expect(firstNameInput.valid).toBeFalsy();

    firstNameInput.setValue('Daniel1!');
    expect(firstNameInput.valid).toBeFalsy();

    firstNameInput.setValue(
      'DanielDanielDanielDanielDanielDanielDanielDanielDanielDanielDanielDanielDanielDanielDanielDanielDanielDanielDanielDanielDanielDanielDanielDanielDanielDanielDanielDanielDanielDaniel'
    );
    expect(firstNameInput.valid).toBeFalsy();
  });

  it('should test last name input element', () => {
    const lastNameInput: AbstractControl =
      component.contactForm.controls.formControlLastName;
    expect(lastNameInput.valid).toBeFalsy();

    lastNameInput.setValue('Danielecki');
    expect(lastNameInput.valid).toBeTruthy();

    lastNameInput.setValue('danielecki');
    expect(lastNameInput.valid).toBeTruthy();

    lastNameInput.setValue('D');
    expect(lastNameInput.valid).toBeFalsy();

    lastNameInput.setValue('danielecki1');
    expect(lastNameInput.valid).toBeFalsy();

    lastNameInput.setValue('Danielecki1');
    expect(lastNameInput.valid).toBeFalsy();

    lastNameInput.setValue('danielecki1!');
    expect(lastNameInput.valid).toBeFalsy();

    lastNameInput.setValue('Danielecki1!');
    expect(lastNameInput.valid).toBeFalsy();

    lastNameInput.setValue(
      'DanieleckiDanieleckiDanieleckiDanieleckiDanieleckiDanieleckiDanieleckiDanieleckiDanieleckiDanieleckiDanielecki'
    );
    expect(lastNameInput.valid).toBeFalsy();
  });

  it('should test email input element', () => {
    const emailInput: AbstractControl =
      component.contactForm.controls.formControlEmail;
    expect(emailInput.valid).toBeFalsy();

    emailInput.setValue('daniel.danielecki@foo.com');
    expect(emailInput.valid).toBeTruthy();

    emailInput.setValue('a@a.co');
    expect(emailInput.valid).toBeTruthy();

    emailInput.setValue('daniel.danieleckifoo.com');
    expect(emailInput.valid).toBeFalsy();

    emailInput.setValue('a@a.c');
    expect(emailInput.valid).toBeFalsy();

    emailInput.setValue(
      'daniel.danieleckidanieleckidanieleckidanieleckidanieleckidanielecki@foo.com'
    );
    expect(emailInput.valid).toBeFalsy();
  });

  it('should test password input element', () => {
    const passwordInput: AbstractControl =
      component.contactForm.controls.formControlPassword;
    expect(passwordInput.valid).toBeFalsy();

    passwordInput.setValue('Password');
    expect(passwordInput.valid).toBeTruthy();

    passwordInput.setValue('password');
    expect(passwordInput.valid).toBeFalsy();

    passwordInput.setValue('Pass');
    expect(passwordInput.valid).toBeFalsy();

    passwordInput.setValue('password1');
    expect(passwordInput.valid).toBeFalsy();

    passwordInput.setValue('password!');
    expect(passwordInput.valid).toBeFalsy();

    passwordInput.setValue('password1!');
    expect(passwordInput.valid).toBeFalsy();

    passwordInput.setValue(
      'PasswordPasswordPasswordPasswordPasswordPasswordPasswordPasswordPasswordPassword'
    );
    expect(passwordInput.valid).toBeFalsy();
  });

  it('should test password input element', () => {
    const passwordInput: AbstractControl =
      component.contactForm.controls.formControlPassword;
    const confirmPasswordInput: AbstractControl =
      component.contactForm.controls.formControlConfirmPassword;
    expect(confirmPasswordInput.valid).toBeFalsy();

    confirmPasswordInput.setValue('Password');
    expect(confirmPasswordInput.valid).toBeFalsy();

    confirmPasswordInput.setValue('password');
    expect(confirmPasswordInput.valid).toBeFalsy();

    confirmPasswordInput.setValue('Pass');
    expect(confirmPasswordInput.valid).toBeFalsy();

    confirmPasswordInput.setValue('password1');
    expect(confirmPasswordInput.valid).toBeFalsy();

    confirmPasswordInput.setValue('password!');
    expect(confirmPasswordInput.valid).toBeFalsy();

    confirmPasswordInput.setValue('password1!');
    expect(confirmPasswordInput.valid).toBeFalsy();

    confirmPasswordInput.setValue(
      'PasswordPasswordPasswordPasswordPasswordPasswordPasswordPasswordPasswordPassword'
    );
    expect(confirmPasswordInput.valid).toBeFalsy();

    passwordInput.setValue('Password');
    confirmPasswordInput.setValue('Password');
    expect(confirmPasswordInput.valid).toBeTruthy();
    expect(confirmPasswordInput.valid).toBeTruthy();
  });

  it('should show first name error', () => {
    const firstNameInput: AbstractControl =
      component.contactForm.controls.formControlFirstName;
    expect(firstNameInput.errors!.required).toBeTruthy();

    firstNameInput.setValue('Daniel');
    expect(firstNameInput.errors).toBeNull();

    firstNameInput.setValue('daniel');
    expect(firstNameInput.errors).toBeNull();

    firstNameInput.setValue('D');
    expect(firstNameInput.errors).toBeTruthy();

    firstNameInput.setValue('daniel1');
    expect(firstNameInput.errors).toBeTruthy();

    firstNameInput.setValue('Daniel1');
    expect(firstNameInput.errors).toBeTruthy();

    firstNameInput.setValue('daniel1!');
    expect(firstNameInput.errors).toBeTruthy();

    firstNameInput.setValue('Daniel1!');
    expect(firstNameInput.errors).toBeTruthy();

    firstNameInput.setValue(
      'DanielDanielDanielDanielDanielDanielDanielDanielDanielDanielDanielDanielDanielDanielDanielDanielDanielDanielDanielDanielDanielDanielDanielDanielDanielDanielDanielDanielDanielDaniel'
    );
    expect(firstNameInput.errors).toBeTruthy();
  });

  it('should show last name error', () => {
    const lastNameInput: AbstractControl =
      component.contactForm.controls.formControlLastName;
    expect(lastNameInput.errors!.required).toBeTruthy();

    lastNameInput.setValue('Danielecki');
    expect(lastNameInput.errors).toBeNull();

    lastNameInput.setValue('danielecki');
    expect(lastNameInput.errors).toBeNull();

    lastNameInput.setValue('D');
    expect(lastNameInput.errors).toBeTruthy();

    lastNameInput.setValue('danielecki1');
    expect(lastNameInput.errors).toBeTruthy();

    lastNameInput.setValue('Danielecki1');
    expect(lastNameInput.errors).toBeTruthy();

    lastNameInput.setValue('danielecki1!');
    expect(lastNameInput.errors).toBeTruthy();

    lastNameInput.setValue('Danielecki1!');
    expect(lastNameInput.errors).toBeTruthy();

    lastNameInput.setValue(
      'DanieleckiDanieleckiDanieleckiDanieleckiDanieleckiDanieleckiDanieleckiDanieleckiDanieleckiDanieleckiDanielecki'
    );
    expect(lastNameInput.errors).toBeTruthy();
  });

  it('should show email error', () => {
    const emailInput: AbstractControl =
      component.contactForm.controls.formControlEmail;
    expect(emailInput.errors!.required).toBeTruthy();

    emailInput.setValue('daniel.danielecki@foo.com');
    expect(emailInput.errors).toBeNull();

    emailInput.setValue('a@a.co');
    expect(emailInput.errors).toBeNull();

    emailInput.setValue('daniel.danieleckifoo.com');
    expect(emailInput.errors).toBeTruthy();

    emailInput.setValue('a@a.c');
    expect(emailInput.errors).toBeTruthy();

    emailInput.setValue(
      'daniel.danieleckidanieleckidanieleckidanieleckidanieleckidanielecki@foo.com'
    );
    expect(emailInput.errors).toBeTruthy();
  });

  it('should show password error', () => {
    const passwordInput: AbstractControl =
      component.contactForm.controls.formControlEmail;
    expect(passwordInput.errors!.required).toBeTruthy();

    passwordInput.setValue('password');
    expect(passwordInput.errors).toBeTruthy();

    passwordInput.setValue('Pass');
    expect(passwordInput.errors).toBeTruthy();

    passwordInput.setValue('password1');
    expect(passwordInput.errors).toBeTruthy();

    passwordInput.setValue('password!');
    expect(passwordInput.errors).toBeTruthy();

    passwordInput.setValue('password1!');
    expect(passwordInput.errors).toBeTruthy();

    passwordInput.setValue(
      'PasswordPasswordPasswordPasswordPasswordPasswordPasswordPasswordPasswordPassword'
    );
    expect(passwordInput.errors).toBeTruthy();
  });

  it('should show confirm password error', () => {
    const confirmPasswordInput: AbstractControl =
      component.contactForm.controls.formControlEmail;
    expect(confirmPasswordInput.errors!.required).toBeTruthy();

    confirmPasswordInput.setValue('password');
    expect(confirmPasswordInput.errors).toBeTruthy();

    confirmPasswordInput.setValue('Pass');
    expect(confirmPasswordInput.errors).toBeTruthy();

    confirmPasswordInput.setValue('password1');
    expect(confirmPasswordInput.errors).toBeTruthy();

    confirmPasswordInput.setValue('password!');
    expect(confirmPasswordInput.errors).toBeTruthy();

    confirmPasswordInput.setValue('password1!');
    expect(confirmPasswordInput.errors).toBeTruthy();

    confirmPasswordInput.setValue(
      'PasswordPasswordPasswordPasswordPasswordPasswordPasswordPasswordPasswordPassword'
    );
    expect(confirmPasswordInput.errors).toBeTruthy();
  });

  it('should show error on first name in password', () => {
    const firstNameInput: AbstractControl =
      component.contactForm.controls.formControlFirstName;
    firstNameInput.setValue('Daniel');

    const passwordInput: AbstractControl =
      component.contactForm.controls.formControlPassword;
    passwordInput.setValue('Danielecki');

    expect(passwordInput.errors!.namesInPassword).toBeTruthy();

    firstNameInput.setValue('daniel');
    expect(passwordInput.errors!.namesInPassword).toBeTruthy();
  });

  it('should show error on last name in password', () => {
    const lastNameInput: AbstractControl =
      component.contactForm.controls.formControlLastName;
    lastNameInput.setValue('Danielecki');

    const passwordInput: AbstractControl =
      component.contactForm.controls.formControlPassword;
    passwordInput.setValue('dDanielecki');

    expect(passwordInput.errors!.namesInPassword).toBeTruthy();

    lastNameInput.setValue('daniel');
    expect(passwordInput.errors!.namesInPassword).toBeTruthy();
  });

  it('should test empty inputs to throw required errors', () => {
    const contactForm = component.contactForm;
    expect(contactForm.valid).toBeFalsy();

    const firstNameInput: AbstractControl =
      contactForm.controls.formControlFirstName;
    firstNameInput.setValue('');
    expect(firstNameInput.errors!.required).toBeTruthy();

    const lastNameInput: AbstractControl =
      contactForm.controls.formControlLastName;
    lastNameInput.setValue('');
    expect(lastNameInput.errors!.required).toBeTruthy();

    const emailInput: AbstractControl = contactForm.controls.formControlEmail;
    emailInput.setValue('');
    expect(emailInput.errors!.required).toBeTruthy();

    const passwordInput: AbstractControl =
      contactForm.controls.formControlPassword;
    passwordInput.setValue('');
    expect(passwordInput.errors!.required).toBeTruthy();

    const confirmPasswordInput: AbstractControl =
      contactForm.controls.formControlConfirmPassword;
    confirmPasswordInput.setValue('');
    expect(confirmPasswordInput.errors!.required).toBeTruthy();

    expect(contactForm.valid).toBeFalsy();
  });
});
