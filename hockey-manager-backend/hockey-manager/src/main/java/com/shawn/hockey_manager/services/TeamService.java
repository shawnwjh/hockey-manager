package com.shawn.hockey_manager.services;

import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class TeamService {
    private final RestTemplate restTemplate;

    public TeamService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public JsonNode getAllTeams() {
        String uri = "https://api.nhle.com/stats/rest/en/team";
        JsonNode jsonNode = restTemplate.getForObject(uri, JsonNode.class);

        assert jsonNode != null;
        System.out.println("Received JsonNode:\n" + jsonNode.toPrettyString());
        return jsonNode;
    }

    public JsonNode getStandings() {
        String uri = "https://api-web.nhle.com/v1/standings/now";
        JsonNode jsonNode = restTemplate.getForObject(uri, JsonNode.class);

        assert jsonNode != null;
        System.out.println("Received JsonNode:\n" + jsonNode.toPrettyString());
        return jsonNode;
    }

    public JsonNode getRoster(String teamAbbrev) {
        String uri = String.format("https://api-web.nhle.com/v1/roster/%s/current", teamAbbrev);
        JsonNode jsonNode = restTemplate.getForObject(uri, JsonNode.class);

        assert jsonNode != null;
        System.out.println("Received JsonNode:\n" + jsonNode.toPrettyString());
        return jsonNode;
    }
}