package webapp.dao.implement;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import webapp.dao.LocationDao;
import webapp.entity.Location;

@Transactional
@Repository
public class ImplLocationDao implements LocationDao{

	@PersistenceContext
	private EntityManager entityManager;
	
	@Override
	public List<Location> add(Location location) {
		entityManager.persist(location);
		return getAll();
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Location> getAll() {
		String hql = "FROM Location";
		return entityManager.createQuery(hql).getResultList();
	}
}
