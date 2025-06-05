import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StandingsApiResponse } from '../../models/api-response/standings-api-response.model';

@Injectable({
    providedIn: 'root'
})
export class StandingsService {
    private http = inject(HttpClient);

    constructor() { }

    getStandings(): Observable<StandingsApiResponse> {
        return this.http.get<StandingsApiResponse>('http://localhost:8080/api/teams/standings');
    }
}