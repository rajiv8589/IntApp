package com.intapp.contractService.controller;

import java.util.Date;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.intapp.contractService.dao.entity.UserInfo;
import com.intapp.contractService.dao.repository.UserRepository;
import com.intapp.contractService.model.UserSearchCriteria;
import com.intapp.contractService.model.UserType;


@RestController("/api/users")
public class UserController {
	
	private static final Logger logger = LogManager.getLogger(UserController.class);
	@Autowired
	private UserRepository userRepository;
	
	@GetMapping("/register")
	public ResponseEntity<UserInfo> registerUser() {
		UserInfo userInfo1 = new UserInfo();
		userInfo1.setId("234");
		userInfo1.setUsername("avi");
		userInfo1.setPassword("avi123");
		userInfo1.setFirstName("avinash");
		userInfo1.setLastName("sinha");
		userInfo1.setMiddleName("kumar");
		userInfo1.setEmail("avi@gmail.com");
		Date dOB = new Date();
		userInfo1.setdOB(dOB);
		userInfo1.setConfirmPassword("avi123");
		userInfo1.setAddress(null);
		userInfo1.setPhoneNo(12L);
		userInfo1.setUserType(UserType.IND);
		
		logger.debug("userInfo", userInfo1.toString());
		UserInfo usrInfo = userRepository.save(userInfo1);
		logger.debug("return usrInfo", usrInfo);
		return ResponseEntity.ok().body(usrInfo);
	}
	
	@GetMapping("/users")
	public ResponseEntity<List<UserInfo>> getUsers() {
		List<UserInfo>  userInfo = userRepository.findAll();
		logger.debug("return usrInfo", userInfo);
		return ResponseEntity.ok().body(userInfo);
	}
	
	@PostMapping("/login")
	public void loginUser() {
		
	}
	
	@PostMapping("/user")
	public void getUserInfo(@RequestBody UserSearchCriteria userSearchCriteria) {
		
	}
}
