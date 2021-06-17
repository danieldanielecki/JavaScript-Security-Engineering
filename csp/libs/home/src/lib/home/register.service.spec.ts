import { TestBed } from '@angular/core/testing';
import { RegisterService } from './register.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

describe('RegisterService', () => {
  let httpTestingController: HttpTestingController;
  let registerService: any;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RegisterService]
    });
  });

  beforeEach(() => {
    httpTestingController = TestBed.inject(HttpTestingController);
    registerService = TestBed.inject(RegisterService);
  });

  // After every test, assert that there are no more pending requests.
  afterEach(() => {
    httpTestingController.verify();
  });

  it('should create RegisterService', () => {
    expect(registerService).toBeTruthy();
  });

  it('should call HTTP POST request to https://demo-api.now.sh/users', async () => {
    const baseURL = 'https://demo-api.now.sh/users';
    const fakeDataToBeSend = {
      firstName: 'Daniel',
      lastName: 'Danielecki',
      email: 'daniel.danielecki@foo.com'
    };

    await registerService.registerUser(fakeDataToBeSend, baseURL).subscribe();

    httpTestingController.expectOne({
      method: 'POST',
      url: baseURL
    });
  });
});
