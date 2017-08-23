package webapp.dao.implement;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import webapp.dao.DataTravelDao;
import webapp.entity.DataTravel;

@Transactional
@Repository
public class ImplDataTravelDao implements DataTravelDao {

	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public boolean add(DataTravel dataTravel) {
		entityManager.persist(dataTravel);
		return true;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<DataTravel> findByMonth(int userId, String startDate, String endDate) {
		String hql = "FROM DataTravel WHERE user_id = "+userId+" AND date_travel BETWEEN '"+startDate+"' AND '"+endDate+"' ORDER BY date_travel ASC ";
		return (List<DataTravel>) entityManager.createQuery(hql).getResultList();
	}

	@Override
	public void deleteBydataTravelNo(int dataTravelNo) {
		entityManager.remove(getDataTravelById(dataTravelNo));
	}

	@Override
	public DataTravel getDataTravelById(int dataTravelNo) {
		return entityManager.find(DataTravel.class, dataTravelNo);
	}

}
