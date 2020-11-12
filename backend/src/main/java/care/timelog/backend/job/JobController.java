package care.timelog.backend.job;

import care.timelog.backend.exception.ZipCodeNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.bind.DefaultValue;
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
                                        @RequestParam(name = "jobTitle") ArrayList<String> jobTitleList,
                                        @RequestParam(name = "radius") @DefaultValue("0") int radius) throws ZipCodeNotFoundException {
        return jobService.findByLocation(zip, jobTitleList, radius);
    }

}
