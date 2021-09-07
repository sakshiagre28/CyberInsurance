package com.cyberinsurancerest.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cyberinsurancerest.model.User;
import com.cyberinsurancerest.repository.UserRepository;

@Service
public class UserService {
	@Autowired
	UserRepository userRepository;
	
	public int createUser(User newUser) {
		userRepository.save(newUser);
		User checkUser= userRepository.findByQuotationNumber(newUser.getQuotationNumber());
		if(checkUser!=null) {
			return checkUser.getUserId();
		}
		else {
			return 0;
		}
		
	}
}
