package com.shawn.hockey_manager.services;

import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class PlayerService {
    private final RestTemplate restTemplate;

    public PlayerService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public JsonNode getPlayer(int playerId) {
        String uri = String.format("https://api-web.nhle.com/v1/player/%d/landing", playerId);
        JsonNode jsonNode = restTemplate.getForObject(uri, JsonNode.class);

        assert jsonNode != null;
        System.out.println("Received JsonNode:\n" + jsonNode.toPrettyString());
        return jsonNode;
    }
}
