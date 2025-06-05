import { Team } from "../team.model";

export interface TeamApiResponse {
    data: Team[];
    total: number;
}