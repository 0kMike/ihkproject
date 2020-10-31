package care.timelog.backend.job;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class jobService {

    @Autowired
    private jobRepository jobRepository;

    public List<jobEntity> getJobsByLocation(Long location) {
        return null;
    }
}
