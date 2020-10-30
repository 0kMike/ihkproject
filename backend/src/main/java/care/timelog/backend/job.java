package care.timelog.backend;

import java.util.Date;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class job {

    private Long id;
    private Long key;
    private String title;
    private Long location;
    private Date lastDate;

}


