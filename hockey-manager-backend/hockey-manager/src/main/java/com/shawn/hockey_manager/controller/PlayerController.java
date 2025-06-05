package com.shawn.hockey_manager.controller;

import com.fasterxml.jackson.databind.JsonNode;
import com.shawn.hockey_manager.services.PlayerService;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api/player")
public class PlayerController {
    private final PlayerService playerService;

    public PlayerController(PlayerService playerService) {
        this.playerService = playerService;
    }

    @GetMapping("/{playerId}")
    public JsonNode getPlayer(@PathVariable String playerId) {
        int playerIdInt = Integer.parseInt(playerId);
        return playerService.getPlayer(playerIdInt);
    }
}
