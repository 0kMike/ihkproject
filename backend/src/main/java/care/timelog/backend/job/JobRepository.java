package care.timelog.backend.job;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;


@Repository
public interface JobRepository extends CrudRepository<JobEntity, Long> {
    Iterable<JobEntity> findAllByJobTitleIn(ArrayList<String> jobTitleList);
}
