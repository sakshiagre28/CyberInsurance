package com.cyberinsurancerest.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.cyberinsurancerest.model.User;

public interface UserRepository extends CrudRepository<User, Integer> {
	public User findByQuotationNumber(long quotationNumber);
	//public User findByQuotationNumberInAndPhoneIn(long quotationNumber, String mobile);
}
