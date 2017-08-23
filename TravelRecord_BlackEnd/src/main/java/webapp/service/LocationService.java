package webapp.service;

import java.util.List;

import webapp.entity.Location;

public interface LocationService {

	List<Location> addLocation(Location location);

	List<Location> getAll();

}
