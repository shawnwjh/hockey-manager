import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ScheduleApiResponse } from '../../models/api-response/schedule-api-response.model';

@Injectable({
    providedIn: 'root'
})
export class ScheduleService {
    private http = inject(HttpClient);

    constructor() { }

    getSchedule(): Observable<ScheduleApiResponse> {
        return this.http.get<ScheduleApiResponse>('http://localhost:8080/api/schedule/current');
    }
}