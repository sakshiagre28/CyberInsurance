package com.cyberinsurancerest.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cyberinsurancerest.model.Plan;
import com.cyberinsurancerest.repository.PlanRepository;


@Service
public class PlanService {
	@Autowired
	PlanRepository planRepository;
	
	public List<Plan> getAllPlans(){
		List<Plan> plans = new ArrayList<>();
		planRepository.findAll().forEach(plan -> plans.add(plan));
		return plans;
	}
	
	public Plan getPlanById(int id){
		Plan plan =  planRepository.findById(id).get();
		return plan;
	}
}
