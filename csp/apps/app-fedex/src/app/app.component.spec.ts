import { AppComponent } from './app.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from '@fedex-test/home';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from '@fedex-test/shared';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        BrowserAnimationsModule,
        HomeModule,
        HttpClientTestingModule,
        SharedModule,
      ],
    }).compileComponents();
  }));

  // Required by Jest to pass the test.
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      value: jest.fn(() => {
        return {
          matches: true,
        };
      }),
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create AppComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should have app root component', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('fedex-test-home')).not.toBeNull();
  });

  it('should have header component', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('fedex-test-header')).not.toBeNull();
  });

  it('should have footer component', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('fedex-test-footer')).not.toBeNull();
  });
});
