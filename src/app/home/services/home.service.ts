import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
    providedIn: "root"
})
export class HomeService{
    private _baseUrl = "http://localhost:3000";
    constructor(private _http: HttpClient){ }

    public getTrendingMovies(): Observable<any>{
        return this._http.get(`${this._baseUrl}/trending`);
    }

    public getTheatreMovies(): Observable<any>{
        return this._http.get(`${this._baseUrl}/theatre`);
    }

    public getPopularMovies(): Observable<any>{
        return this._http.get(`${this._baseUrl}/popular`);
    }
}
