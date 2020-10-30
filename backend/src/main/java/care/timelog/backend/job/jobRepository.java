package care.timelog.backend.job;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface jobRepository  extends CrudRepository<jobEntity, Long> {
    List<jobEntity> findAll();
}
