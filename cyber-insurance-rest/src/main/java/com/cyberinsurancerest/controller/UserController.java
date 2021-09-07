package com.cyberinsurancerest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cyberinsurancerest.model.User;
import com.cyberinsurancerest.service.UserService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserController {
	
	@Autowired
	UserService userService;
	
	@PostMapping("/createNewUser")
	public int createUser(@RequestBody User user) {
		
		return userService.createUser(user);
		
	}

}
