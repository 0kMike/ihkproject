package care.timelog.backend.job;

import org.springframework.beans.factory.annotation.Autowired;
import care.timelog.backend.Job.JobService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/jobs")
public class JobController {

    @Autowired
    private JobService jobService;

    @GetMapping
    public Iterable<Job> getAllMitarbeiter() {
        return jobService.findAll();
    }

    @GetMapping("/{location}")
    public List<JobEntity> getProfil(@PathVariable("location") Long location) {
        return jobService.getJobsByLocation(location);
    }

}
