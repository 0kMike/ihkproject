package care.timelog.backend.location;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class LocationService {

    @Autowired
    private LocationRepository locationRepository;

    public Iterable<Location> findAll() {

        List<Location> locationList = new ArrayList<>();

        for (LocationEntity locationEntity : locationRepository.findAll()) {
            locationList.add(mapLocationEntityToLocation(locationEntity));
        }

        return locationList;
    }

    private Location mapLocationEntityToLocation(LocationEntity entity) {

        Location location = new Location();
        location.setZip(entity.getZip());
        location.setCity(entity.getCity());
        location.setLongitude(entity.getLongitude());
        location.setLatitude(entity.getLatitude());

        return location;
    }

}