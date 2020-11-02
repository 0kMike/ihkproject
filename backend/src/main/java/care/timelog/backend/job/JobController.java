package care.timelog.backend.job;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/jobs")
public class JobController {

    @Autowired
    private JobService jobService;

    @GetMapping
    public Iterable<Job> findAll() {
        return jobService.findAll();
    }

    @GetMapping("/{location}")
    public Iterable<Job> findByLocation(@PathVariable("location") Long location) {
        return jobService.findByLocation(location);
    }

    @GetMapping("/{title}")
    public Iterable<Job> findByTitle(@PathVariable("title") String title) {
        return jobService.findByTitle(title);
    }

}
