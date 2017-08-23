package webapp.dao.implement;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import webapp.dao.UserDao;
import webapp.entity.User;

@Transactional
@Repository
public class ImplUserDao implements UserDao {

	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public boolean checkUsername(String username) {
		String hql = "FROM User as u WHERE u.username = ?";
		int count = entityManager.createQuery(hql).setParameter(1, username).getResultList().size();
		return count > 0 ? true : false;
	}

	@Override
	public void add(User user) {
		entityManager.persist(user);
	}

	@Override
	public User findByUsername(String username) {
		String hql = "FROM User as u WHERE u.username = ?";
		User user = (User) entityManager.createQuery(hql).setParameter(1, username).getResultList().get(0);
		return user;
	}

	@Override
	public boolean checkUsernameAndPassword(String username, String password) {
		String hql = "FROM User as u WHERE u.username = ? and u.password = ?";
		int count = entityManager.createQuery(hql).setParameter(1, username).setParameter(2, password).getResultList().size();
		return count > 0 ? true : false;
	}

}
