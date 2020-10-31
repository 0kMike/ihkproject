package care.timelog.backend.job;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/jobs")
public class jobController {

    private final jobService jobService;

    @Autowired
    public jobController(jobService jobService) {
        this.jobService = jobService;
    }

    @GetMapping("/{location}")
    public List<jobEntity> getProfil(@PathVariable("location") Long location) {
        return jobService.getJobsByLocation(location);
    }

}
