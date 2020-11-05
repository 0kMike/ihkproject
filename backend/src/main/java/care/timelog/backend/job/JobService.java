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

    public Iterable<Job> findByLocation(Integer zip, ArrayList<String> titleList, Integer searchRadius) throws ZipCodeNotFoundException {

        Location searchLocation = locationService.getLocationFromZip(zip);
        List<Job> jobList = new ArrayList<>();

        for (JobEntity jobEntity : jobRepository.findAll()) {
            double distanceInKm = Math.sqrt(Math.pow(searchLocation.getLongitude() - jobEntity.getLongitude(), 2) + Math.pow(searchLocation.getLatitude() - jobEntity.getLatitude(), 2)) * 111;

            if (titleList.size() > 0 && titleList.contains(jobEntity.getTitle())) {
                if (distanceInKm <= searchRadius) {
                    jobList.add(mapJobEntityToJob(jobEntity));
                }
            }
        }

        return jobList;
    }

    private Job mapJobEntityToJob(JobEntity entity) {

        Job job = new Job();
        job.setId(entity.getId());
        job.setKey(entity.getKey());
        job.setTitle(entity.getTitle());
        job.setLongitude(entity.getLongitude());
        job.setLatitude(entity.getLatitude());
        job.setLastDate(entity.getLastDate());

        return job;
    }
}
