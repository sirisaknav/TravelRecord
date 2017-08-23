package webapp.service;

import java.util.List;

import webapp.entity.DataTravel;
import webapp.restcontroller.param.CreateDataTravelForm;
import webapp.service.response.DataTravelResult;

public interface DataTravelService {

	boolean addDataTravel(CreateDataTravelForm createDataTravelForm);

	List<DataTravel> findByMonth(int month, int year, int userId);

	void deleteDataTravel(int dataTravelNo);

	List<DataTravelResult> calculatorRecord(int month, int year, int userId);

	Integer calculatorResult(List<DataTravelResult> listDataTravelResult);

	String calculatorScheduled(int month, int year);

	String checkCodeConveyanceCar(List<DataTravelResult> listDataTravelResult);

	String checkCodeConveyanceMor(List<DataTravelResult> listDataTravelResult);

}
