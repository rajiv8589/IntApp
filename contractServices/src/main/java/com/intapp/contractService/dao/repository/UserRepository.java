package com.intapp.contractService.dao.repository;



import com.intapp.contractService.dao.entity.UserInfo;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<UserInfo, String> {
	
	

}
