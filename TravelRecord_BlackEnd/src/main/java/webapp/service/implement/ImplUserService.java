package webapp.service.implement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import webapp.dao.UserDao;
import webapp.entity.User;
import webapp.service.UserService;

@Service
public class ImplUserService implements UserService{
	
	@Autowired
	private UserDao userDao;

	@Override
	public boolean addUser(String username, String password) {
		User user=new User();
		user.setUsername(username);
		user.setPassword(password);
		user.setRole("client");
		if (userDao.checkUsername(username)) {
            return false;
        } else {
        	userDao.add(user);
            return true;
        }
	}

	@Override
	public User findByUsername(String username) {
		User user=userDao.findByUsername(username);
		return user;
	}

	@Override
	public boolean checkUsernameAndPassword(String username, String password) {
		if (userDao.checkUsernameAndPassword(username,password)) {
            return true;
        }
		return false;
	}

}
