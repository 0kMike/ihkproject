package care.timelog.backend.job;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

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
    public Iterable<Job> findByLocation(@PathVariable("location") Long location, @RequestParam(name = "title", required = false) ArrayList<String> titleList) {
        return jobService.findByLocation(location, titleList);
    }

}
