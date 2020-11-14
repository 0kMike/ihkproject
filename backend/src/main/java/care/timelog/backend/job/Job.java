package care.timelog.backend.job;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class Job {

    private String id;
    private Long key;
    private String jobTitle;
    private LocalDate firstDate;
    private LocalDate lastDate;

}