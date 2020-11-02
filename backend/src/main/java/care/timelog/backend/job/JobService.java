package care.timelog.backend.Job;

import care.timelog.backend.job.Job;
import care.timelog.backend.job.JobEntity;
import care.timelog.backend.job.JobRepository;
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

        for (JobEntity entity : JobRepository.findAll()) {
            jobList.add();
        }

        return mitarbeiterList;
    }

    public List<JobEntity> getJobsByLocation(Long location) {
        return null;
    }
}
