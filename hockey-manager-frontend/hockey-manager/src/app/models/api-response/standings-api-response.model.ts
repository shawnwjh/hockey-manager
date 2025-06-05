import { TeamStanding } from "../team-standing.model";

export interface StandingsApiResponse {
    wildCardIndicator: boolean;
    standingsDateTimeUtc: string;
    standings: TeamStanding[];
}