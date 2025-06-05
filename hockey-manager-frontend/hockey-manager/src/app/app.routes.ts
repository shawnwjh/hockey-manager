import { Routes } from '@angular/router';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { StandingsComponent } from './pages/standings/standings.component';
import { RosterComponent } from './pages/roster/roster.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/schedule' },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'standings', component: StandingsComponent },
  { path: ':teamAbbrev/roster', component: RosterComponent },
];
