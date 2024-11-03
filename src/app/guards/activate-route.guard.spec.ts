import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { activateRouteGuard } from './activate-route.guard';

describe('activateRouteGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => activateRouteGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
