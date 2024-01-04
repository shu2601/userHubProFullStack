package com.crud.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.crud.model.User;
import com.crud.service.UserService;

@RestController
@CrossOrigin
public class UserController {

	@Autowired
	private UserService userService;
	
	
	@PostMapping("/user")
	public User creatUser(@RequestBody User user) {
		
	return this.userService.addUser(user);
		
		
	}
	
	@GetMapping("/users/")
	public List<User> getUsers() {
		
		return this.userService.getUsers();
	}
	
	@GetMapping("/users/{userId}")
	public User getUser(@PathVariable String userId) {
		
		return this.userService.getUser(Long.parseLong(userId));
	}
	
	@PutMapping("/user")
	public User editUser(@RequestBody User user) {
		
		return this.userService.editUser(user);
	}
	
	
	@DeleteMapping("/user/{userId}")
	public User deleteUser(@PathVariable String userId) {
		
		return this.userService.deleteUser(Long.parseLong(userId));
	}
	
	
	
	
	
	
	
	
	
	
	
}
