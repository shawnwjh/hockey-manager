import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzListModule } from 'ng-zorro-antd/list';
import { StandingsService } from '../standings/standings.service';
import { TeamStanding } from '../../models/team-standing.model';
import { StandingsApiResponse } from '../../models/api-response/standings-api-response.model';
import { RouterLink } from '@angular/router';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

@Component({
  selector: 'app-teams',
  imports: [CommonModule, NzCardModule, NzGridModule, NzListModule, RouterLink, NzTabsModule, NzSkeletonModule],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.css'
})
export class TeamsComponent implements OnInit {
  teams: {
    atlantic: TeamStanding[],
    metropolitan: TeamStanding[],
    central: TeamStanding[],
    pacific: TeamStanding[],
  } = {
    atlantic: [],
    metropolitan: [],
    central: [],
    pacific: [],
  }
  isLoading: boolean = true;
  errorMessage: string | null = null;

  constructor(private standingsService: StandingsService) {}

  ngOnInit(): void {
    this.standingsService.getStandings().subscribe({
      next: (response: StandingsApiResponse) => {
        for (let team of response.standings) {
          if (team.divisionName == "Atlantic") {
            this.teams.atlantic.push(team);
          } else if (team.divisionName == "Metropolitan") {
            this.teams.metropolitan.push(team);
          } else if (team.divisionName == "Central") {
            this.teams.central.push(team);
          } else {
            this.teams.pacific.push(team);
          }
        }
        this.isLoading = false;
        console.log(this.teams);
      },
      error: (error) => {
        console.error('Error fetching teams:', error);
        this.errorMessage = 'Failed to load teams. Please try again later.';
        this.isLoading = false;
      },
      complete: () => {
        console.log('Teams data fetch complete.');
      }
    });
  }
}
