package webapp.service.implement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import webapp.dao.ForAdminDao;
import webapp.entity.ForAdmin;
import webapp.service.ForAdminService;

@Service
public class ImpleForAdminService implements ForAdminService{
	
	@Autowired
	ForAdminDao forAdminDao;

	@Override
	public ForAdmin getRateByAdmin() {
		return forAdminDao.getRateByAdmin();
	}

}
