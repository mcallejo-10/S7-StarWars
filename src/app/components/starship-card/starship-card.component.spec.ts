import { ComponentFixture, TestBed } from "@angular/core/testing";
import { StarshipCardComponent } from "./starship-card.component";
import { HomeComponent } from "../home/home.component";
import { HttpTestingController, provideHttpClientTesting } from "@angular/common/http/testing";
import { provideHttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";



describe("StarshipCardComponent", () => {
  let component: StarshipCardComponent;
  let fixture: ComponentFixture<StarshipCardComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarshipCardComponent, HomeComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: ActivatedRoute, useValue: {} }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(StarshipCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  

  // it("show card", () => {
  //   fixture = TestBed.createComponent(StarshipCardComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  //   const ship: Starship = {
  //     MGLT: "10",
  //     cargo_capacity: "1000000000000",
  //     consumables: "3 years",
  //     cost_in_credits: "1000000000000",
  //     created: "2014-12-10T16:36:50.509000Z",
  //     crew: "342,953",
  //     edited: "2014-12-20T21:26:24.783000Z",
  //     films: ["https://swapi.dev/api/films/1/"],
  //     hyperdrive_rating: "4.0",
  //     length: "120000",
  //     manufacturer: "Imperial Department of Military Research, Sienar Fleet Systems",
  //     max_atmosphering_speed: "n/a",
  //     model: "DS-1 Orbital Battle Station",
  //     name: "Death Star",
  //     passengers: "843,342",
  //     pilots: [],
  //     starship_class: "Deep Space Mobile Battlestation",
  //     url: "https://swapi.dev/api/starships/9/",
  //   };

  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector("#shipName")?.textContent).toContain("DEATH STAR");
  // });
});
