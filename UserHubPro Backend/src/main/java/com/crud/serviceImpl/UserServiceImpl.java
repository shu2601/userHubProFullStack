package com.crud.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.crud.dao.UserDao;
import com.crud.model.User;
import com.crud.service.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDao userDao;
	
	 
	@Override
	public User addUser(User user) {
		
		userDao.save(user);
		System.out.println(user);
		return user;
				
	}

	@Override
	public List<User> getUsers() {
	
		return userDao.findAll();
	}

	@Override
	public User getUser(long userId) {
		
		return userDao.findById(userId).get();
		
	}

	@Override
	public User editUser(User user) {
		
		 userDao.save(user);
		 System.out.println(user);
		 return user;
		
	}

	@Override
	public User deleteUser(long userId) {
		
		try {
	        User user = userDao.findById(userId).orElse(null);

	        if (user != null) {
	            userDao.delete(user);
	        }

	        return user;
	    } catch (Exception e) {
	        
	        e.printStackTrace();
	        
	       
	        return null;
	    }
		
		
		
	}

	

}
