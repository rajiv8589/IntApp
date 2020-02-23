package com.intapp.contractService.controller;

import java.util.Date;
import java.util.List;

import com.intapp.contractService.dao.entity.UserInfo;
import com.intapp.contractService.service.UserService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.intapp.contractService.model.UserSearchCriteria;



@RestController
@RequestMapping("/api/user")
public class UserController {
	
	private static final Logger logger = LogManager.getLogger(UserController.class);
	@Autowired
	private UserService userService;
	
	@PostMapping("/register")
	public ResponseEntity<UserInfo> registerUser(@RequestBody UserInfo userInfo) {

		UserInfo usrInfo = userService.saveUser(userInfo);
		return ResponseEntity.ok().body(usrInfo);
	}
	
	@GetMapping("/users")
	public ResponseEntity<List<UserInfo>> getUsers() {
		List<UserInfo>  userInfo = userService.getAllUsers();
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
