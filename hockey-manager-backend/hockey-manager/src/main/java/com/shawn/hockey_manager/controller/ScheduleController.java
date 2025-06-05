package com.shawn.hockey_manager.controller;

import com.fasterxml.jackson.databind.JsonNode;
import com.shawn.hockey_manager.services.ScheduleService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/api/schedule")
public class ScheduleController {
    private final ScheduleService scheduleService;

    public ScheduleController(ScheduleService scheduleService) {
        this.scheduleService = scheduleService;
    }

    @GetMapping("/current")
    public JsonNode getCurrentSchedule() {
        return scheduleService.getCurrentSchedule();
    }

    @GetMapping("/streams")
    public JsonNode getStreams() {
        return scheduleService.getStreams();
    }
}
