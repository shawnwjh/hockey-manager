import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TeamApiResponse } from '../../models/api-response/teams-api-response.model';

@Injectable({
    providedIn: 'root'
})
export class TeamsService {
    private http = inject(HttpClient);

    constructor() { }

    getTeams(): Observable<TeamApiResponse> {
        return this.http.get<TeamApiResponse>('http://localhost:8080/api/teams/standings');
    }
}