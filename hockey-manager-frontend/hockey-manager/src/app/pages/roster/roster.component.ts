import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Player } from '../../models/player.model';
import { RosterService } from './roster.service';
import { RosterApiResponse } from '../../models/api-response/roster-api-response.model';
import { ActivatedRoute } from '@angular/router';
import { of, switchMap } from 'rxjs';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

@Component({
  selector: 'app-roster',
  imports: [CommonModule, NzCardModule, NzGridModule, NzListModule, NzTabsModule],
  templateUrl: './roster.component.html',
  styleUrl: './roster.component.css'
})
export class RosterComponent implements OnInit {
  roster: {
    forwards: Player[],
    defensemen: Player[],
    goalies: Player[],
  } = {
    forwards: [],
    defensemen: [],
    goalies: [],
  };
  isLoading: boolean = true;
  errorMessage: string | null = null;
  teamAbbrev: string | null = null;

  constructor(
    private rosterService: RosterService,
    private route: ActivatedRoute
) {}

  ngOnInit(): void {
    this.route.paramMap.pipe(
        switchMap(params => {
            this.teamAbbrev = params.get('teamAbbrev');
            if (this.teamAbbrev) {
                this.isLoading = true;
                this.errorMessage = null;
                return this.rosterService.getRoster(this.teamAbbrev);
            } else {
                this.errorMessage = "Team abbreviation not found in URL.";
                this.isLoading = false;
                return of(null);
            }
        })
    ).subscribe({
        next: (response: RosterApiResponse | null) => {
            if (response) {
                this.roster.forwards = response.forwards;
                this.roster.defensemen = response.defensemen;
                this.roster.goalies = response.goalies;
                console.log(this.roster);
            }
            this.isLoading = false;
        },
        error: (error) => {
            console.error('Error fetching roster:', error);
            this.errorMessage = 'Failed to load roster. Please try again later.';
            this.isLoading = false;
        },
        complete: () => {
            console.log('Roster data fetch complete.');
        }
    });
  }
}
