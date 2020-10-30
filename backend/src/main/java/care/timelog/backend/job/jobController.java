package care.timelog.backend.job;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/jobs")
public class jobController {

    private final jobService jobService;

    @Autowired
    public jobController(jobService jobService) {
        this.jobService = jobService;
    }

}
