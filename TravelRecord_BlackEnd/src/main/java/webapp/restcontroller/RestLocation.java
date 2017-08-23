package webapp.restcontroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import webapp.entity.Location;
import webapp.service.LocationService;

@RestController
@CrossOrigin
@RequestMapping("{userid}/location")
public class RestLocation {
	
	@Autowired
	private LocationService locationService;
	
	@PostMapping
	public List<Location> addLocation(@RequestBody Location location){
		return locationService.addLocation(location);
	}
	
	@GetMapping
	public List<Location> addLocation(){
		return locationService.getAll();
	}
}
