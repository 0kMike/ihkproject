package care.timelog.backend.job;

import care.timelog.backend.exception.ZipCodeNotFoundException;
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

    @GetMapping("/{zip}")
    public Iterable<Job> findByLocation(@PathVariable("zip") Integer zip,
                                        @RequestParam(name = "title") ArrayList<String> titleList,
                                        @RequestParam(name = "radius") Integer radius) throws ZipCodeNotFoundException {
        return jobService.findByLocation(zip, titleList, radius);
    }

}
