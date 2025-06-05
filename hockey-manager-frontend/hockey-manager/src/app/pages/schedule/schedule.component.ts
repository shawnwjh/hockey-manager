import { Component, inject, Injectable, OnInit } from '@angular/core';
import { Gameday } from '../../models/gameday.model';
import { ScheduleService } from './schedule.service';
import { ScheduleApiResponse } from '../../models/api-response/schedule-api-response.model';
import { CommonModule } from '@angular/common';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { RouterLink } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@Component({
  selector: 'app-schedule',
  imports: [CommonModule, NzListModule, NzTypographyModule, NzIconModule, NzSkeletonModule, RouterLink, NzButtonModule, NzDividerModule],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css'
})
@Injectable({providedIn: 'root'})
export class ScheduleComponent implements OnInit {
  games: Gameday[] = [];
  isLoading: boolean = true;
  errorMessage: string | null = null;

  constructor(private scheduleService: ScheduleService) {}

  ngOnInit(): void {
      this.scheduleService.getSchedule().subscribe({
        next: (response: ScheduleApiResponse) => {
          this.games = response.gameWeek;
          this.isLoading = false;
          console.log(this.games);
        },
        error: (error) => {
          console.error('Error fetching schedule:', error);
          this.errorMessage = 'Failed to load schedule. Please try again later.';
          this.isLoading = false;
        },
        complete: () => {
          console.log('Schedule data fetch complete.');
        }
      });
    }
}
