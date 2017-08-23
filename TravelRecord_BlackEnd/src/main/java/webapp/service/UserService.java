package webapp.service;

import webapp.entity.User;

public interface UserService {

	boolean addUser(String username, String password);

	User findByUsername(String username);

	boolean checkUsernameAndPassword(String username, String password);

}
