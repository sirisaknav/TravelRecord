package webapp.service;

import webapp.entity.UserDetail;

public interface UserDetailService {

	void addUserDetail(int userId, String firstname, String lastname, String position);

	UserDetail findById(int userId);

	UserDetail getEdit(UserDetail userDetail);

}
