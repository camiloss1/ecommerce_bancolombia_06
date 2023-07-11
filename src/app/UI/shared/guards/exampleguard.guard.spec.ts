import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { exampleguardGuard } from './exampleguard.guard';

describe('exampleguardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => exampleguardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
