import { TestBed } from '@angular/core/testing';

import { StarshipsService } from './starships.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AuthService } from './auth.service';

describe('StarshipsService', () => {
  let service: StarshipsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      
      providers: [AuthService,
        provideHttpClient(withInterceptorsFromDi())
      ]
    });
    service = TestBed.inject(StarshipsService);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
