package com.cyberinsurancerest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.cyberinsurancerest.model.Plan;
import com.cyberinsurancerest.service.PlanService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class PlanController {
	@Autowired
	PlanService planService;
	
	@GetMapping("/getAllPlans")
	public List<Plan> getAllPlans(){
		return planService.getAllPlans();
	}
	
	@GetMapping("/getPlan/{id}")
	public Plan getPlanById(@PathVariable("id")int id) {
		return planService.getPlanById(id);
	}
}
