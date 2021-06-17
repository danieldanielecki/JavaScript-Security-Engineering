import { async, TestBed } from '@angular/core/testing';
import { SharedModule } from './shared.module';

describe('SharedModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule]
    }).compileComponents();
  }));

  it('should create shared module', () => {
    expect(SharedModule).toBeDefined();
  });
});
