package com.intapp.contractService.model;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;


public class UserInfo {

	private String username;
	private String password;
	private String firstName;
	private String lastName;
	private String middleName;
	private String email;
	private Date dOB;
	private String confirmPassword;
	private Address address;
	private Long phoneNo;
	private UserType userType;
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public Date getdOB() {
		return dOB;
	}
	public void setdOB(Date dOB) {
		this.dOB = dOB;
	}
	public String getConfirmPassword() {
		return confirmPassword;
	}
	public void setConfirmPassword(String confirmPassword) {
		this.confirmPassword = confirmPassword;
	}
	public Address getAddress() {
		return address;
	}
	public void setAddress(Address address) {
		this.address = address;
	}
	public Long getPhoneNo() {
		return phoneNo;
	}
	public void setPhoneNo(Long phoneNo) {
		this.phoneNo = phoneNo;
	}
	public UserType getUserType() {
		return userType;
	}
	public void setUserType(UserType userType) {
		this.userType = userType;
	}
	@Override
	public String toString() {
		return "UserInfo [username=" + username + ", password=" + password + ", email=" + email + ", dOB=" + dOB
				+ ", confirmPassword=" + confirmPassword + ", address=" + address + ", phoneNo=" + phoneNo
				+ ", userType=" + userType + "]";
	}
	
	
	
	
	
}
