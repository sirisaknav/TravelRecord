package webapp.restcontroller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import webapp.entity.ForAdmin;
import webapp.restcontroller.param.CreateDataTravelForm;
import webapp.service.DataTravelService;
import webapp.service.ForAdminService;
import webapp.service.response.DataTravelResult;

@RestController
@CrossOrigin
@RequestMapping("{userid}/datatravel")
public class RestDataTravel {
	
	@Autowired
	private DataTravelService dataTravelService;
	@Autowired
	private ForAdminService forAdminService;
	
	@PostMapping("create")
	public ResponseEntity<Void> addDataTravel(@RequestBody CreateDataTravelForm createDataTravelForm){
		boolean createCheck=dataTravelService.addDataTravel(createDataTravelForm);
		if (createCheck == false) {
			return new ResponseEntity<Void>(HttpStatus.CONFLICT);
		}
		return new ResponseEntity<Void>(HttpStatus.CREATED);
	}
	
	@GetMapping("rateByAdmin")
	public ResponseEntity<ForAdmin> getRateByAdmin(){
		ForAdmin forAdmin=forAdminService.getRateByAdmin();
		return new ResponseEntity<ForAdmin>(forAdmin, HttpStatus.OK);
	}
	
	@DeleteMapping("{datatravelNo}/delete")
	public ResponseEntity<Void> getDelete(@PathVariable("datatravelNo") int dataTravelNo) {
		dataTravelService.deleteDataTravel(dataTravelNo);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
	
	@GetMapping("listByMonth/{month}/{year}")
	public Map<String,Object> test(@PathVariable("userid") int userId,@PathVariable("month") int month,@PathVariable("year") int year){
		Map<String,Object> map=new HashMap<String,Object>();
		List<DataTravelResult> listDataTravelResult=dataTravelService.calculatorRecord(month,year,userId);
		ForAdmin forAdmin=forAdminService.getRateByAdmin();
		Integer calculatorResult=dataTravelService.calculatorResult(listDataTravelResult);
		String scheduled=dataTravelService.calculatorScheduled(month,year);
		String codeConveyanceMor=dataTravelService.checkCodeConveyanceMor(listDataTravelResult);
		String codeConveyanceCar=dataTravelService.checkCodeConveyanceCar(listDataTravelResult);
		map.put("data", listDataTravelResult);
		map.put("resultValue", calculatorResult);
		map.put("scheduled", scheduled);
		map.put("codeConveyanceMor", codeConveyanceMor);
		map.put("codeConveyanceCar", codeConveyanceCar);
		map.put("forAdmin", forAdmin);
		return map;
	}
}
