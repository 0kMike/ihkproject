package care.timelog.backend.job;

import java.util.Date;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Job {

    private String id;
    private Long key;
    private String title;
    private Long zip;
    private Date lastDate;

}