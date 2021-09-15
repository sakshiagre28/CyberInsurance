package com.cyberinsurancerest.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class User {
	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int userId;
	@Column
	private String salutation;
	@Column
	private String firstName;
	@Column
	private String lastName;
	@Column
	private String birthDate;
	@Column
	private String email;
	@Column
	private String sendQuoteAt;
	@Column
	private String aadhar;
	@Column
	private String income;
	//@Column
	//private int policyId;
	@Column
	private String policyStartDate;
	@Column
	private String policyEndDate;
	@Column
	private String zipcode;
	@Column 
	private boolean isMalwareSelected;
	@Column
	private long quotationNumber; 
	
	private int plan;
	public int getPlan() {
		return plan;
	}
	public void setPlan(int plan) {
		this.plan = plan;
	}
	public User() {}
	public User(int userId, String salutation, String firstName, String lastName, String birthDate, 
			String email,String sendQuoteAt, String aadhar, String income, String policyStartDate, 
			String policyEndDate, String zipcode, boolean isMalwareSelected, long quotationNumber,int plan) {
		super();
		this.userId = userId;
		this.salutation = salutation;
		this.firstName = firstName;
		this.lastName = lastName;
		this.birthDate = birthDate;
		this.email = email;
		this.sendQuoteAt = sendQuoteAt;
		this.aadhar = aadhar;
		this.income = income;
		this.plan =plan;
		this.policyStartDate = policyStartDate;
		this.policyEndDate = policyEndDate;
		this.zipcode = zipcode;
		this.isMalwareSelected = isMalwareSelected;
		this.quotationNumber = quotationNumber;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getSalutation() {
		return salutation;
	}
	public void setSalutation(String salutation) {
		this.salutation = salutation;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getBirthDate() {
		return birthDate;
	}
	public void setBirthDate(String birthDate) {
		this.birthDate = birthDate;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getSendQuoteAt() {
		return sendQuoteAt;
	}
	public void setSendQuoteAt(String sendQuoteAt) {
		this.sendQuoteAt = sendQuoteAt;
	}
	public String getAadhar() {
		return aadhar;
	}
	public void setAadhar(String aadhar) {
		this.aadhar = aadhar;
	}
	public String getIncome() {
		return income;
	}
	public void setIncome(String income) {
		this.income = income;
	}
	
	public String getPolicyStartDate() {
		return policyStartDate;
	}
	public void setPolicyStartDate(String policyStartDate) {
		this.policyStartDate = policyStartDate;
	}
	public String getPolicyEndDate() {
		return policyEndDate;
	}
	public void setPolicyEndDate(String policyEndDate) {
		this.policyEndDate = policyEndDate;
	}
	public String getZipcode() {
		return zipcode;
	}
	public void setZipcode(String zipcode) {
		this.zipcode = zipcode;
	}
	public boolean getIsMalwareSelected() {
		return isMalwareSelected;
	}
	public void setIsMalwareSelected(boolean isMalwareSelected) {
		this.isMalwareSelected = isMalwareSelected;
	}
	public long getQuotationNumber() {
		return quotationNumber;
	}
	public void setQuotationNumber(long quotationNumber) {
		this.quotationNumber = quotationNumber;
	}

	
}
