package webapp.dao;

import webapp.entity.User;

public interface UserDao {

	boolean checkUsername(String username);

	void add(User user);

	User findByUsername(String username);

	boolean checkUsernameAndPassword(String username, String password);
}
