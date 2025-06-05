import { Odds } from "./odds.model";
import { TVBroadcast } from "./tv-broadcast.model";

export interface Game {
    id: number;
    season: number;
    gameType: number;
    venue: {default: string};
    neutralSite: boolean;
    startTimeUTC: string;
    easternUTCOffset: string;
    venueUTCOffset: string;
    venueTimezone: string;
    gameState: string;
    gameScheduleState: string;
    tvBroadcasts: TVBroadcast[];
    awayTeam: {
        id: number;
        commonName: {default: string};
        placeName: {
            default: string;
            fr: string;
        };
        placeNameWithPreposition: {
            default: string;
            fr: string;
        };
        abbrev: string;
        logo: string;
        darkLogo: string;
        awaySplitSquad: boolean;
        radioLink: string;
        odds: Odds[];
    };
    homeTeam: {
        id: number;
        commonName: {default: string};
        placeName: {
            default: string;
            fr: string;
        };
        placeNameWithPreposition: {
            default: string;
            fr: string;
        };
        abbrev: string;
        logo: string;
        darkLogo: string;
        awaySplitSquad: boolean;
        radioLink: string;
        odds: Odds[];
    };
    periodDescriptor: {
        number: number;
        periodType: string;
        maxRegulationPeriods: number;
    };
    seriesStatus: {
        round: number;
        seriesAbbrev: string;
        seriesTitle: string;
        seriesLetter: string;
        neededToWin: number;
        topSeedTeamAbbrev: string;
        topSeedWins: number;
        bottomSeedTeamAbbrev: string;
        bottomSeedWins: number;
        gameNumberOfSeries: number;
    };
    seriesUrl: string;
    ticketsLink: string;
    ticketsLinkFr: string;
    gameCenterLink: string;
}