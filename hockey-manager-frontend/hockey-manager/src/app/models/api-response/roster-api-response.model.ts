import { Player } from "../player.model";

export interface RosterApiResponse {
    forwards: Player[];
    defensemen: Player[];
    goalies: Player[];
}