package webapp.service.response;

public class DataTravelResult {
	private Integer datatravelNo;
	private String dateTravel;
	private String start;
	private String end;
	private String conveyance;
	private String codeConveyance;
	private Integer distance;
	private Integer expenses;
	private String orther;
	private Integer charges;
	private String bill;
	private String reason;
	private String travelwith;
	private int userId;
	private Integer resultDistance;
	private String resultDistanceString;
	private Integer result;
	
	public String getResultDistanceString() {
		return this.resultDistanceString;
	}

	public void setResultDistanceString(String resultDistanceString) {
		this.resultDistanceString = resultDistanceString;
	}
	
	public Integer getResult() {
		return this.result;
	}

	public void setResult(Integer result) {
		this.result = result;
	}
	
	public Integer getResultDistance() {
		return this.resultDistance;
	}

	public void setResultDistance(Integer resultDistance) {
		this.resultDistance = resultDistance;
	}

	public Integer getDatatravelNo() {
		return this.datatravelNo;
	}

	public void setDatatravelNo(Integer datatravelNo) {
		this.datatravelNo = datatravelNo;
	}

	public String getDateTravel() {
		return this.dateTravel;
	}

	public void setDateTravel(String dateTravel) {
		this.dateTravel = dateTravel;
	}

	public String getStart() {
		return this.start;
	}

	public void setStart(String start) {
		this.start = start;
	}

	public String getEnd() {
		return this.end;
	}

	public void setEnd(String end) {
		this.end = end;
	}

	public String getConveyance() {
		return this.conveyance;
	}

	public void setConveyance(String conveyance) {
		this.conveyance = conveyance;
	}

	public String getCodeConveyance() {
		return this.codeConveyance;
	}

	public void setCodeConveyance(String codeConveyance) {
		this.codeConveyance = codeConveyance;
	}

	public Integer getDistance() {
		return this.distance;
	}

	public void setDistance(Integer distance) {
		this.distance = distance;
	}

	public Integer getExpenses() {
		return this.expenses;
	}

	public void setExpenses(Integer expenses) {
		this.expenses = expenses;
	}

	public String getOrther() {
		return this.orther;
	}

	public void setOrther(String orther) {
		this.orther = orther;
	}

	public Integer getCharges() {
		return this.charges;
	}

	public void setCharges(Integer charges) {
		this.charges = charges;
	}

	public String getBill() {
		return this.bill;
	}

	public void setBill(String bill) {
		this.bill = bill;
	}

	public String getReason() {
		return this.reason;
	}

	public void setReason(String reason) {
		this.reason = reason;
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
