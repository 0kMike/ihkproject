package care.timelog.backend.job;

import care.timelog.backend.exception.ZipCodeNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/search")
public class JobController {

    @Autowired
    private JobService jobService;

    @GetMapping
    public Iterable<Job> findByLocation(@RequestParam("zip") String zip,
                                        @RequestParam(name = "jobtitle") ArrayList<String> jobTitleList,
                                        @RequestParam(name = "radius") int radius) throws ZipCodeNotFoundException {
        return jobService.findByLocation(zip, jobTitleList, radius);
    }

}
