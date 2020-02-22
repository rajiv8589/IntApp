package com.intapp.contractService.dao.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.intapp.contractService.dao.entity.UserInfo;


public interface UserRepository extends JpaRepository<UserInfo, String>{
	
	

}
