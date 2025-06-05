import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamStanding } from '../../models/team-standing.model';
import { StandingsService } from './standings.service';
import { StandingsApiResponse } from '../../models/api-response/standings-api-response.model';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';

interface TeamData {
    team: string;
    gamesPlayed: number;
    wins: number;
    losses: number;
    overtimeLosses: number;
    goalsFor: number;
    goalsAgainst: number;
    goalDifferential: number;
    l10: string;
    points: number;
}

@Component({
  selector: 'app-standings',
  imports: [CommonModule, NzButtonModule, NzTableModule],
  templateUrl: './standings.component.html',
  styleUrl: './standings.component.css'
})
export class StandingsComponent implements OnInit {
  standings: TeamStanding[] = [];
  isLoading: boolean = true;
  errorMessage: string | null = null;

  constructor(private standingsService: StandingsService) {}

  ngOnInit(): void {
    this.standingsService.getStandings().subscribe({
      next: (response: StandingsApiResponse) => {
        this.standings = response.standings;
        this.isLoading = false;
        console.log(this.standings);
      },
      error: (error) => {
        console.error('Error fetching standings:', error);
        this.errorMessage = 'Failed to load standings. Please try again later.';
        this.isLoading = false;
      },
      complete: () => {
        console.log('Standings data fetch complete.');
      }
    });
  }

  columns = [
    {
        title: "Team",
        compare: (a: TeamData, b: TeamData) => a.team.localeCompare(b.team),
        priority: false
    },
    {
        title: "Games Played",
        compare: (a: TeamData, b: TeamData) => a.gamesPlayed - b.gamesPlayed,
        priority: false
    },
    {
        title: "Wins",
        compare: (a: TeamData, b: TeamData) => a.wins - b.wins,
        priority: 5
    },
    {
        title: "Losses",
        compare: (a: TeamData, b: TeamData) => a.losses - b.losses,
        priority: 6
    },
    {
        title: "Overtime Losses",
        compare: (a: TeamData, b: TeamData) => a.overtimeLosses - b.overtimeLosses,
        priority: 7
    },
    {
        title: "Goals For",
        compare: (a: TeamData, b: TeamData) => a.goalsFor - b.goalsFor,
        priority: 3
    },
    {
        title: "Goals Against",
        compare: (a: TeamData, b: TeamData) => a.goalsAgainst - b.goalsAgainst,
        priority: 4
    },
    {
        title: "Goal Differential",
        compare: (a: TeamData, b: TeamData) => a.goalDifferential - b.goalDifferential,
        priority: 2
    },
    {
        title: "Last 10",
        compare: (a: TeamData, b: TeamData) => a.l10.localeCompare(b.l10),
        priority: false
    },
    {
        title: "Points",
        compare: (a: TeamData, b: TeamData) => a.points - b.points,
        priority: 1
    },
  ]
}
