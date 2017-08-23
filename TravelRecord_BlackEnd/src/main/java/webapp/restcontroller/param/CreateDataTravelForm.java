package webapp.restcontroller.param;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class CreateDataTravelForm {
	private String bill;
	private int charges;
	private String codeConveyance;
	private String conveyance;
	private String dateTravel;
	private int distance;
	private String end;
	private int expenses;
	private String orther;
	private String reason;
	private String start;
	private String travelwith;
	private int userId;

	public String getBill() {
		return this.bill;
	}

	public void setBill(String bill) {
		this.bill = bill;
	}

	public int getCharges() {
		return this.charges;
	}

	public void setCharges(int charges) {
		this.charges = charges;
	}

	public String getCodeConveyance() {
		return this.codeConveyance;
	}

	public void setCodeConveyance(String codeConveyance) {
		this.codeConveyance = codeConveyance;
	}

	public String getConveyance() {
		return this.conveyance;
	}

	public void setConveyance(String conveyance) {
		this.conveyance = conveyance;
	}

	public Date getDateTravel() {
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-M-dd");
		String dateInString = this.dateTravel;
		Date date;
		try {
			date = sdf.parse(dateInString);
			return date;
		} catch (ParseException e) {
			e.printStackTrace();
			return null;
		}
	}

	public void setDateTravel(String dateTravel) {
		this.dateTravel = dateTravel;
	}

	public int getDistance() {
		return this.distance;
	}

	public void setDistance(int distance) {
		this.distance = distance;
	}

	public String getEnd() {
		return this.end;
	}

	public void setEnd(String end) {
		this.end = end;
	}

	public int getExpenses() {
		return this.expenses;
	}

	public void setExpenses(int expenses) {
		this.expenses = expenses;
	}

	public String getOrther() {
		return this.orther;
	}

	public void setOrther(String orther) {
		this.orther = orther;
	}

	public String getReason() {
		return this.reason;
	}

	public void setReason(String reason) {
		this.reason = reason;
	}

	public String getStart() {
		return this.start;
	}

	public void setStart(String start) {
		this.start = start;
	}

	public String getTravelwith() {
		return this.travelwith;
	}

	public void setTravelwith(String travelwith) {
		this.travelwith = travelwith;
	}

	public int getUserId() {
		return this.userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}
}
