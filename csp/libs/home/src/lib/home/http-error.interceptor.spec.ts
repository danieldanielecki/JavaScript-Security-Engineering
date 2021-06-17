import { TestBed } from '@angular/core/testing';
import { HttpErrorInterceptor } from './http-error.interceptor';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterService } from './register.service';

describe('HttpErrorInterceptor', () => {
  let httpErrorInterceptor: HttpErrorInterceptor;
  let httpTestingController: HttpTestingController;
  let registerService: RegisterService;

  beforeEach(async () =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        RegisterService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpErrorInterceptor,
          multi: true,
        },
      ],
    })
  );

  beforeEach(() => {
    httpErrorInterceptor = new HttpErrorInterceptor();
    httpTestingController = TestBed.inject(HttpTestingController);
    registerService = TestBed.inject(RegisterService);
  });

  // After every test, assert that there are no more pending requests.
  afterEach(() => {
    httpTestingController.verify();
  });

  it('should create HttpErrorInterceptor', () => {
    expect(httpErrorInterceptor).toBeTruthy();
  });

  it('should catch errors when calling fake URL', async () => {
    const fakeURL = 'https://demo-api.now.sh/fake';
    const fakeDataToBeSend = {
      firstName: 'Daniel',
      lastName: 'Danielecki',
      email: 'daniel.danielecki@foo.com',
    };

    jest.spyOn(window, 'alert').mockImplementation(() => {}); // Note: window.alert = jest.fn() works too, but it contaminates other tests, therefore try to avoid it.

    // Make an HTTP POST request
    await registerService.registerUser(fakeDataToBeSend, fakeURL).subscribe();

    httpTestingController
      .expectOne(fakeURL)
      .error(new ErrorEvent('Network error')); //Error type instance can't be passed.

    // This will pass when changing "ErrorEvent" to "Error" in "http-error.interceptor.ts", but will cause the upper one to fail. Depending by scenario, only one of the if/else conditions is covered as explained on Stack Overflow (https://stackoverflow.com/questions/60578944/angular-unit-testing-http-error-interceptors-catcherror-errorevent-error). Might be related to #18345 (// https://github.com/angular/angular/issues/18345).
    // httpTestingController
    //   .expectOne(fakeURL)
    //   .error(new ErrorEvent('Server unavailable.')); //Error type instance can't be passed.
  });
});
