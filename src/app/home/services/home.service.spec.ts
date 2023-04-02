import {HomeService} from "./home.service";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {TestBed} from "@angular/core/testing";
import {mockDataPopular, mockDataTheatre, mockDataTrending} from "./mock-data";

describe(HomeService.name, () =>{
    let homeService: HomeService;
    let httpController: HttpTestingController;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [HomeService]
        });

        homeService = TestBed.inject(HomeService);
        httpController = TestBed.inject(HttpTestingController);
    });

    afterAll(() => httpController.verify());

    it(`${HomeService.prototype.getTrendingMovies.name} should return trending movies`, done => {
        homeService.getTrendingMovies()
            .subscribe({
                next: (movies) => {
                    expect(movies)
                        .withContext("Trending Movies returned")
                        .toEqual(mockDataTrending.data)

                    done();
                }
            });

        httpController
            .expectOne(mockDataTrending.api)
            .flush(mockDataTrending.data);
    });

    it(`${HomeService.prototype.getTheatreMovies.name} should return theatre movies`, done => {
        homeService.getTheatreMovies()
            .subscribe({
                next: (movies) => {
                    expect(movies)
                        .withContext("Theatre Movies returned")
                        .toEqual(mockDataTheatre.data);
                    done();
                }
            });

        httpController
            .expectOne(mockDataTheatre.api)
            .flush(mockDataTheatre.data);
    });

    it(`${HomeService.prototype.getPopularMovies.name} should return popular movies`, done => {
        homeService.getPopularMovies()
            .subscribe({
                next: (movies) => {
                    expect(movies)
                        .withContext("Popular movies returned")
                        .toEqual(mockDataPopular.data);
                    done();
                }
            });

        httpController
            .expectOne(mockDataPopular.api)
            .flush(mockDataPopular.data);
    });
});
