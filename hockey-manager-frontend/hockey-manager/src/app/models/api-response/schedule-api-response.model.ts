import { Gameday } from "../gameday.model";
import { OddsPartner } from "../odds-partner.model";

export interface ScheduleApiResponse {
    nextStartDate: string;
    previousStartDate: string;
    gameWeek: Gameday[];
    oddsPartners: OddsPartner[];
    preSeasonStartDate: string;
    regularSeasonStartDate: string;
    regularSeasonEndDate: string;
    playoffEndDate: string;
    numberOfGames: number;
}