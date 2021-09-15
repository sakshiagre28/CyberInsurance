package com.cyberinsurancerest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cyberinsurancerest.model.User;
import com.cyberinsurancerest.service.UserService;

@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
@RestController
public class UserController {
	
	@Autowired
	UserService userService;
	
	@PostMapping("/createNewUser")
	public int createUser(@RequestBody User user) {
		
		return userService.createUser(user);
		
	}
	
	@GetMapping("/getUser/{quoteNum}")
	public User getUser(@PathVariable("quoteNum") long quoteNum) {
		return userService.getUserByQuotationNumber(quoteNum);
	}
	
	@GetMapping("/retrieveQuoteLogin/quoteNum/{quoteNum}/mobile/{mobile}")
	public User retrieveQuoteLogin(@PathVariable(value ="quoteNum") long quoteNum, @PathVariable(value="mobile") String mobile) {
		return userService.retrieveQuoteLogin(quoteNum,mobile);
	}
	/*
	@PatchMapping("/patch")
	public int patchTest(String firstName, String lastName ) {
		return userService.patchTest(firstName,lastName);
	}*/
	

}
