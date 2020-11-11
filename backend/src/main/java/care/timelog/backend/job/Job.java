package care.timelog.backend.job;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class Job {

    private String id;
    private Long key;
    private String title;
    private Date firstDate;
    private Date lastDate;

}