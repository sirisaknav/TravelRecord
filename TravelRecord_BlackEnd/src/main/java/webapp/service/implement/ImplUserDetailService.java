package webapp.service.implement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import webapp.dao.UserDetailDao;
import webapp.entity.UserDetail;
import webapp.service.UserDetailService;

@Service
public class ImplUserDetailService implements UserDetailService{
	
	@Autowired
	UserDetailDao userDetailDao;

	@Override
	public void addUserDetail(int userId, String firstname, String lastname, String position) {
		UserDetail userDetail=new UserDetail();
		userDetail.setUserId(userId);
		userDetail.setFirstname(firstname);
		userDetail.setLastname(lastname);
		userDetail.setPosition(position);
		userDetailDao.add(userDetail);
	}

	@Override
	public UserDetail findById(int userId) {
		UserDetail userDetail=userDetailDao.findById(userId);
		return userDetail;
	}

	@Override
	public UserDetail getEdit(UserDetail userDetail) {
		return userDetailDao.update(userDetail);
	}

}
