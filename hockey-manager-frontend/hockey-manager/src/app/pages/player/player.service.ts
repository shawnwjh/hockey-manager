import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RosterApiResponse } from '../../models/api-response/roster-api-response.model';

@Injectable({
    providedIn: 'root'
})
export class RosterService {
    private http = inject(HttpClient);

    constructor() { }

    getRoster(teamAbbrev: string): Observable<RosterApiResponse> {
        return this.http.get<RosterApiResponse>(`http://localhost:8080/api/teams/${teamAbbrev}/roster`);
    }
}