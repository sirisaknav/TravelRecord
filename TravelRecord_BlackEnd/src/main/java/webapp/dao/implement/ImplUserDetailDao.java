package webapp.dao.implement;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import webapp.dao.UserDetailDao;
import webapp.entity.UserDetail;

@Transactional
@Repository
public class ImplUserDetailDao implements UserDetailDao{

	@PersistenceContext
	private EntityManager entityManager;
	
	@Override
	public void add(UserDetail userDetail) {
		entityManager.persist(userDetail);
	}

	@Override
	public UserDetail findById(int userId) {
		String hql = "FROM UserDetail as ud WHERE ud.userId = ?";
		UserDetail userDetail = (UserDetail) entityManager.createQuery(hql).setParameter(1, userId).getResultList().get(0);
		return userDetail;
	}

	@Override
	public UserDetail update(UserDetail userDetail) {
		entityManager.merge(userDetail);
		return findById(userDetail.getUserId());
	}

}
