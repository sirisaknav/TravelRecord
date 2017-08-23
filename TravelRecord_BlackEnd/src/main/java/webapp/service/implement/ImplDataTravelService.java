package webapp.service.implement;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import webapp.dao.DataTravelDao;
import webapp.dao.ForAdminDao;
import webapp.entity.DataTravel;
import webapp.entity.ForAdmin;
import webapp.restcontroller.param.CreateDataTravelForm;
import webapp.service.DataTravelService;
import webapp.service.response.DataTravelResult;

@Service
public class ImplDataTravelService implements DataTravelService {

	@Autowired
	DataTravelDao dataTravelDao;
	@Autowired
	ForAdminDao forAdminDao;

	@Override
	public boolean addDataTravel(CreateDataTravelForm createDataTravelForm) {
		DataTravel dataTravel = new DataTravel();
		String checkConveyance = createDataTravelForm.getConveyance();
		if (checkConveyance.equals("ขนส่งสาธารณะ") || checkConveyance.equals("MRT")) {
			dataTravel.setUserId(createDataTravelForm.getUserId());
			dataTravel.setDateTravel(createDataTravelForm.getDateTravel());
			dataTravel.setReason(createDataTravelForm.getReason());
			dataTravel.setTravelwith(createDataTravelForm.getTravelwith());
			dataTravel.setConveyance(createDataTravelForm.getConveyance());
			dataTravel.setExpenses(createDataTravelForm.getExpenses());
			dataTravel.setOrther(createDataTravelForm.getOrther());
			if (dataTravel.getOrther() == null) {
				System.out.println("eiei");
			} else {
				System.out.println("eiei2");
				dataTravel.setCharges(createDataTravelForm.getCharges());
			}
			dataTravel.setBill(createDataTravelForm.getBill());
			dataTravel.setStart(createDataTravelForm.getStart());
			dataTravel.setEnd(createDataTravelForm.getEnd());
		}
		if (checkConveyance.equals("รถยนต์ส่วนตัว") || checkConveyance.equals("จักรยานยนต์ส่วนตัว")) {
			dataTravel.setUserId(createDataTravelForm.getUserId());
			dataTravel.setDateTravel(createDataTravelForm.getDateTravel());
			dataTravel.setReason(createDataTravelForm.getReason());
			dataTravel.setTravelwith(createDataTravelForm.getTravelwith());
			dataTravel.setConveyance(createDataTravelForm.getConveyance());
			dataTravel.setOrther(createDataTravelForm.getOrther());
			if (dataTravel.getOrther() == null) {
				System.out.println("eiei");
			} else {
				System.out.println("eiei2");
				dataTravel.setCharges(createDataTravelForm.getCharges());
			}
			dataTravel.setCodeConveyance(createDataTravelForm.getCodeConveyance());
			dataTravel.setBill(createDataTravelForm.getBill());
			dataTravel.setStart(createDataTravelForm.getStart());
			dataTravel.setEnd(createDataTravelForm.getEnd());
			dataTravel.setDistance(createDataTravelForm.getDistance());
		}
		System.out.println(dataTravel.getCharges());
		if (dataTravelDao.add(dataTravel)) {
			return true;
		} else {
			return false;
		}
	}

	@SuppressWarnings("deprecation")
	@Override
	public List<DataTravel> findByMonth(int month, int year, int userId) {
		ForAdmin forAdmin = forAdminDao.getRateByAdmin();
		int dayDate = forAdmin.getScheduled().getDate();
		month = month - 1;
		String startdate = year + "-" + month + "-" + dayDate;
		month = month + 1;
		String enddate = year + "-" + month + "-" + dayDate;
		List<DataTravel> list = dataTravelDao.findByMonth(userId, startdate, enddate);
		return list;
	}

	@Override
	public void deleteDataTravel(int dataTravelNo) {
		dataTravelDao.deleteBydataTravelNo(dataTravelNo);
	}

	@Override
	public List<DataTravelResult> calculatorRecord(int month, int year, int userId) {
		ForAdmin forAdmin = forAdminDao.getRateByAdmin();
		List<DataTravel> listDataTravel = findByMonth(month, year, userId);
		List<DataTravelResult> listDataTravelResult = new ArrayList<DataTravelResult>();
		for (DataTravel recordDataTravel : listDataTravel) {
			DataTravelResult dataTravelResult = new DataTravelResult();
			dataTravelResult.setDatatravelNo(recordDataTravel.getDatatravelNo());
			Date recordDataTravelDate = recordDataTravel.getDateTravel();
			DateFormat df = new SimpleDateFormat("yyyy-M-dd");
			String dateToString = df.format(recordDataTravelDate);
			String date = dateToString.substring(dateToString.lastIndexOf("-") + 1);
			String months = dateToString.substring(dateToString.indexOf("-") + 1, dateToString.lastIndexOf("-"));
			if (months.equals("1")) {
				months = "ม.ค.";
			} else if (months.equals("2")) {
				months = "ก.พ.";
			} else if (months.equals("3")) {
				months = "มี.ค.";
			} else if (months.equals("4")) {
				months = "เม.ย.";
			} else if (months.equals("5")) {
				months = "พ.ค.";
			} else if (months.equals("6")) {
				months = "มิ.ย.";
			} else if (months.equals("7")) {
				months = "ก.ค.";
			} else if (months.equals("8")) {
				months = "ส.ค.";
			} else if (months.equals("9")) {
				months = "ก.ย.";
			} else if (months.equals("10")) {
				months = "ต.ค.";
			} else if (months.equals("11")) {
				months = "พ.ย.";
			} else if (months.equals("12")) {
				months = "ธ.ค.";
			}
			int years = (Integer.parseInt(dateToString.substring(2, 4))) + 43;
			String dateString = date + " " + months + " " + years;
			dataTravelResult.setDateTravel(dateString);
			dataTravelResult.setStart(recordDataTravel.getStart());
			dataTravelResult.setEnd(recordDataTravel.getEnd());
			dataTravelResult.setConveyance(recordDataTravel.getConveyance());
			dataTravelResult.setCodeConveyance(recordDataTravel.getCodeConveyance());
			dataTravelResult.setDistance(recordDataTravel.getDistance());
			dataTravelResult.setExpenses(recordDataTravel.getExpenses());
			dataTravelResult.setOrther(recordDataTravel.getOrther());
			dataTravelResult.setCharges(recordDataTravel.getCharges());
			dataTravelResult.setBill(recordDataTravel.getBill());
			dataTravelResult.setReason(recordDataTravel.getReason());
			dataTravelResult.setTravelwith(recordDataTravel.getTravelwith());
			dataTravelResult.setUserId(recordDataTravel.getUserId());
			if (dataTravelResult.getConveyance().equals("จักรยานยนต์ส่วนตัว")) {
				if (dataTravelResult.getDistance() != null) {
					dataTravelResult.setResultDistanceString(
							dataTravelResult.getDistance() + "x" + forAdmin.getRateMotorcycle());
				}
				dataTravelResult.setResultDistance(forAdmin.getRateMotorcycle() * recordDataTravel.getDistance());
			} else if (dataTravelResult.getConveyance().equals("รถยนต์ส่วนตัว")) {
				if (dataTravelResult.getDistance() != null) {
					dataTravelResult
							.setResultDistanceString(dataTravelResult.getDistance() + "x" + forAdmin.getRateCar());
				}
				dataTravelResult.setResultDistance(forAdmin.getRateCar() * recordDataTravel.getDistance());
			}
			Integer expenses = dataTravelResult.getExpenses();
			Integer charges = dataTravelResult.getCharges();
			Integer resultDistance = dataTravelResult.getResultDistance();
			if (dataTravelResult.getExpenses() == null) {
				expenses = 0;
				System.out.println("1");
			}
			if (dataTravelResult.getCharges() == null) {
				charges = 0;
				System.out.println("2");
			}
			if (dataTravelResult.getResultDistance() == null) {
				resultDistance = 0;
				System.out.println("3");
			}
			System.out.println(expenses);
			System.out.println(charges);
			System.out.println(resultDistance);
			dataTravelResult.setResult(expenses + charges + resultDistance);
			listDataTravelResult.add(dataTravelResult);
		}
		return listDataTravelResult;
	}

	@Override
	public Integer calculatorResult(List<DataTravelResult> listDataTravelResult) {
		Integer result = 0;
		for (DataTravelResult recordDataTravelResult : listDataTravelResult) {
			result = result + recordDataTravelResult.getResult();
		}
		return result;
	}

	@Override
	public String calculatorScheduled(int month, int year) {
		ForAdmin forAdmin = forAdminDao.getRateByAdmin();
		@SuppressWarnings("deprecation")
		int dayDate = forAdmin.getScheduled().getDate();
		String monthString = "";
		if (month == 1) {
			monthString = "มกราคม";
		} else if (month == 2) {
			monthString = "กุมภาพันธ์";
		} else if (month == 3) {
			monthString = "มีนาคม";
		} else if (month == 4) {
			monthString = "เมษายน";
		} else if (month == 5) {
			monthString = "พฤษภาคม";
		} else if (month == 6) {
			monthString = "มิถุยน";
		} else if (month == 7) {
			monthString = "กรกฏาคม";
		} else if (month == 8) {
			monthString = "สิงหาคม";
		} else if (month == 9) {
			monthString = "กันยายน";
		} else if (month == 10) {
			monthString = "ตุลาคม";
		} else if (month == 11) {
			monthString = "พฤศจิกายน";
		} else if (month == 12) {
			monthString = "ธันวาคม";
		}
		year = year + 543;
		return dayDate + " " + monthString + " " + year;
	}

	@Override
	public String checkCodeConveyanceCar(List<DataTravelResult> listDataTravelResult) {
		String codeConveyanceCar = "";
		for (DataTravelResult recordDataTravelResult : listDataTravelResult) {
			if (recordDataTravelResult.getConveyance().equals("รถยนต์ส่วนตัว")) {
				codeConveyanceCar=recordDataTravelResult.getCodeConveyance();
			}
		}
		return codeConveyanceCar;
	}

	@Override
	public String checkCodeConveyanceMor(List<DataTravelResult> listDataTravelResult) {
		String codeConveyanceMor = "";
		for (DataTravelResult recordDataTravelResult : listDataTravelResult) {
			if (recordDataTravelResult.getConveyance().equals("จักรยานยนต์ส่วนตัว")) {
				codeConveyanceMor=recordDataTravelResult.getCodeConveyance();
			}
		}
		return codeConveyanceMor;
	}

}
