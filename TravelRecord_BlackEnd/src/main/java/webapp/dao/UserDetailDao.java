package webapp.dao;

import webapp.entity.UserDetail;

public interface UserDetailDao {

	void add(UserDetail userDetail);

	UserDetail findById(int userId);

	UserDetail update(UserDetail userDetail);

}
