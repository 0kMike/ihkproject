package care.timelog.backend.job;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class jobService {

    @Autowired
    private jobRepository jobRepository;

}
