package care.timelog.backend.job;

import care.timelog.backend.exception.ZipCodeNotFoundException;
import care.timelog.backend.location.Location;
import care.timelog.backend.location.LocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class JobService {

    @Autowired
    private JobRepository jobRepository;
    @Autowired
    private LocationService locationService;

    public Iterable<Job> findAll() {

        List<Job> jobList = new ArrayList<>();

        for (JobEntity jobEntity : jobRepository.findAll()) {
            jobList.add(mapJobEntityToJob(jobEntity));
        }

        return jobList;
    }

    public Iterable<Job> findByLocation(String zip, ArrayList<String> jobTitleList, int searchRadius) throws ZipCodeNotFoundException {
        List<Job> jobList = new ArrayList<>();

        Location zipLocation = locationService.getLocationFromZip(zip);
        Coordinate searchLocation = new Coordinate(zipLocation.getLongitude(), zipLocation.getLatitude());

        for (JobEntity jobEntity : jobRepository.findAllByJobTitleIn(jobTitleList)) {

            Coordinate jobCoordinate = new Coordinate(jobEntity.getLongitude(), jobEntity.getLatitude());
            double distance = calculateLinearDistanceInKm(searchLocation, jobCoordinate);

            if (isWithinSearchRadius(searchRadius, distance)) {
                jobList.add(mapJobEntityToJob(jobEntity));
            }
        }

        return jobList;
    }

    private boolean isWithinSearchRadius(int searchRadius, double distance) {
        return distance <= searchRadius;
    }

    private double calculateLinearDistanceInKm(Coordinate searchLocation, Coordinate jobLocation) {
        double longitudeDif = searchLocation.getLongitude() - jobLocation.getLongitude();
        double latitudeDif = searchLocation.getLatitude() - jobLocation.getLatitude();

        return getLinearDistanceInKm(longitudeDif, latitudeDif);
    }

    private double getLinearDistanceInKm(double longitudeDif, double latitudeDif) {
        return Math.sqrt(Math.pow(longitudeDif, 2) + Math.pow(latitudeDif, 2)) * 111;
    }

    private Job mapJobEntityToJob(JobEntity entity) {

        Job job = new Job();
        job.setId(entity.getId());
        job.setKey(entity.getKey());
        job.setJobTitle(entity.getJobTitle());
        job.setFirstDate(entity.getFirstDate());
        job.setLastDate(entity.getLastDate());

        return job;
    }
}