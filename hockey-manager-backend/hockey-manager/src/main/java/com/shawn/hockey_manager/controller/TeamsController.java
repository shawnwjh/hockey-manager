package com.shawn.hockey_manager.controller;

import com.fasterxml.jackson.databind.JsonNode;
import com.shawn.hockey_manager.services.TeamService;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api/teams")
public class TeamsController {
    private final TeamService teamService;

    public TeamsController(TeamService teamService) {
        this.teamService = teamService;
    }

    @GetMapping("/all")
    public JsonNode getAllTeams() {
        return teamService.getAllTeams();
    }

    @GetMapping("/standings")
    public JsonNode getStandings() {
        return teamService.getStandings();
    }

    @GetMapping("/{teamAbbrev}/roster")
    public JsonNode getRoster(@PathVariable String teamAbbrev) {
        return teamService.getRoster(teamAbbrev);
    }
}
