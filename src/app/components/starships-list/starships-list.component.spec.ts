import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { StarshipsListComponent } from './starships-list.component';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ApiResult, Starship } from '../../interfaces/starships';
import { StarshipsService } from '../../services/starships.service';

describe('StarshipsListComponent', () => {
  let component: StarshipsListComponent;
  let fixture: ComponentFixture<StarshipsListComponent>;
  let httpMock: HttpTestingController;
  let starshipsService: StarshipsService;

  const mockStarships: ApiResult = {
    count: 2,
    next: "https://swapi.dev/api/starships/?page=2",
    previous: null,
    results: [
      {
        name: "X-wing",
        model: "T-65 X-wing",
        url: "https://swapi.dev/api/starships/12/"
      },
      {
        name: "TIE Fighter",
        model: "Twin Ion Engine/Ln Starfighter",
        url: "https://swapi.dev/api/starships/13/"
      }
    ] as Starship[]
  };

  const mockNextPageStarships: ApiResult = {
    count: 2,
    next: null,
    previous: "https://swapi.dev/api/starships/?page=1",
    results: [
      {
        name: "Millennium Falcon",
        model: "YT-1300 light freighter",
        url: "https://swapi.dev/api/starships/10/"
      }
    ] as Starship[]
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarshipsListComponent],
      providers: [
        StarshipsService,
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: ActivatedRoute, useValue: {} }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(StarshipsListComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    starshipsService = TestBed.inject(StarshipsService);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should load more starships when showMore is called', fakeAsync(() => {
    // Arrange - Configurar el estado inicial
    fixture.detectChanges();
    const initialReq = httpMock.expectOne('https://swapi.dev/api/starships/');
    initialReq.flush(mockStarships);
    tick();

    // Act - Llamar a showMore
    component.showMore();
    const req = httpMock.expectOne('https://swapi.dev/api/starships/?page=2');
    req.flush(mockNextPageStarships);
    tick();

    // Assert
    expect(component.arrayShips.length).toBe(3);
    expect(component.arrayShips[2].name).toBe('Millennium Falcon');
    expect(component.nextUrl).toBeNull();
  }));


  it('should not load more starships when nextUrl is null', fakeAsync(() => {

    component.nextUrl = null;

    component.showMore();
    tick();

    httpMock.expectNone('https://swapi.dev/api/starships/?page=2');
  }));

  it('should update ship URL when getUrlShip is called', () => {
    const shipUrl = 'https://swapi.dev/api/starships/12/';
    const serviceSpy = spyOn(starshipsService, 'updateUrlShip');

    component.getUrlShip(shipUrl);

    expect(serviceSpy).toHaveBeenCalledWith(shipUrl);
  });


});
