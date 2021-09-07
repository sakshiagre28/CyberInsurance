package com.cyberinsurancerest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@EnableAutoConfiguration
@ComponentScan
@SpringBootApplication
public class CyberInsuranceRestApplication {

	public static void main(String[] args) {
		SpringApplication.run(CyberInsuranceRestApplication.class, args);
	}

}
