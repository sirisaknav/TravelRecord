package webapp.dao;

import java.util.List;

import webapp.entity.Location;

public interface LocationDao {

	List<Location> add(Location location);

	List<Location> getAll();

}
