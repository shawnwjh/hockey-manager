package com.shawn.hockey_manager.services;

import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class ScheduleService {
    private final RestTemplate restTemplate;

    public ScheduleService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public JsonNode getCurrentSchedule() {
        String uri = "https://api-web.nhle.com/v1/schedule/now";
        JsonNode jsonNode = restTemplate.getForObject(uri, JsonNode.class);

        assert jsonNode != null;
        System.out.println("Received JsonNode:\n" + jsonNode.toPrettyString());
        return jsonNode;
    }

    public JsonNode getStreams() {
        String uri = "https://api-web.nhle.com/v1/where-to-watch";
        JsonNode jsonNode = restTemplate.getForObject(uri, JsonNode.class);

        assert jsonNode != null;
        System.out.println("Received JsonNode:\n" + jsonNode.toPrettyString());
        return jsonNode;
    }
}
