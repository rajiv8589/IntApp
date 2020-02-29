package com.intapp.contractService.service;

import com.intapp.contractService.dao.entity.UserInfo;
import com.intapp.contractService.dao.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public UserInfo saveUser(UserInfo userinfo){
       return userRepository.save(userinfo);
    }

    public List<UserInfo> getAllUsers(){
        return userRepository.findAll();
    }
}
