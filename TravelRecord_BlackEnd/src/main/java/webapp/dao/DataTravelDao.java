package webapp.dao;

import java.util.List;

import webapp.entity.DataTravel;

public interface DataTravelDao {

	boolean add(DataTravel dataTravel);

	List<DataTravel> findByMonth(int userId, String startDate, String endDate);

	void deleteBydataTravelNo(int dataTravelNo);
	
	DataTravel getDataTravelById(int dataTravelNo);

}
