package com.cyberinsurancerest.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class Plan {
	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int planId;
	@Column
	private long sumAssured;
	@Column
	private long planCost;
	
	public Plan() {}
	public Plan(int planId, long sumAssured, long planCost) {
		super();
		this.planId = planId;
		this.sumAssured = sumAssured;
		this.planCost = planCost;
	}
	public int getPlanId() {
		return planId;
	}
	public void setPlanId(int planId) {
		this.planId = planId;
	}
	public long getSumAssured() {
		return sumAssured;
	}
	public void setSumAssured(long sumAssured) {
		this.sumAssured = sumAssured;
	}
	public long getPlanCost() {
		return planCost;
	}
	public void setPlanCost(long planCost) {
		this.planCost = planCost;
	}
}
