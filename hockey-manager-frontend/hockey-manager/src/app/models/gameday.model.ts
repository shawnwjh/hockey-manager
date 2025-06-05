import { Game } from "./game.model";

export interface Gameday {
    date: string;
    dayAbbrev: string;
    numberOfGames: number;
    datePromo: [];
    games: Game[];
}