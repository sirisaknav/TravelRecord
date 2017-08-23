package webapp.service.implement;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import webapp.dao.LocationDao;
import webapp.entity.Location;
import webapp.service.LocationService;

@Service
public class ImplLocationService implements LocationService{

	@Autowired
	LocationDao locationDao;
	
	@Override
	public List<Location> addLocation(Location location) {
		return locationDao.add(location);
	}

	@Override
	public List<Location> getAll() {
		return locationDao.getAll();
	}

}
