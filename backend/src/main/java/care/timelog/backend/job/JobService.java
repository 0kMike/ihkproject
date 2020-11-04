package care.timelog.backend.job;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class JobService {

    @Autowired
    private JobRepository jobRepository;

    public Iterable<Job> findAll() {

        List<Job> jobList = new ArrayList<>();

        for (JobEntity jobEntity : jobRepository.findAll()) {
            jobList.add(mapJobEntityToJob(jobEntity));
        }

        return jobList;
    }

    public Iterable<Job> findByLocation(Long location, ArrayList<String> titleList, Long radius) {

        List<Job> jobList = new ArrayList<>();

        for (JobEntity jobEntity : jobRepository.findAll()) {
            if (location.equals(jobEntity.getLocation()) && (titleList.size() > 0 && titleList.contains(jobEntity.getTitle()))) {
                jobList.add(mapJobEntityToJob(jobEntity));
            }
        }

        return jobList;

    }

    private Job mapJobEntityToJob(JobEntity entity) {

        Job job = new Job();
        job.setId(entity.getId());
        job.setKey(entity.getKey());
        job.setTitle(entity.getTitle());
        job.setLocation(entity.getLocation());
        job.setLastDate(entity.getLastDate());

        return job;
    }
}
