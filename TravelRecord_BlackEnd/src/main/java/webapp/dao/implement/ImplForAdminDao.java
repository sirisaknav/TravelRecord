package webapp.dao.implement;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import webapp.dao.ForAdminDao;
import webapp.entity.ForAdmin;

@Transactional
@Repository
public class ImplForAdminDao implements ForAdminDao{
	
	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public ForAdmin getRateByAdmin() {
		String hql = "FROM ForAdmin";
		return (ForAdmin) entityManager.createQuery(hql).getResultList().get(0);
	}
	

}
