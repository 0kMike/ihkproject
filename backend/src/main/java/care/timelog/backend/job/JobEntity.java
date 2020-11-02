package care.timelog.backend.job;

import org.springframework.data.annotation.Id;
import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "job")
public class JobEntity {

    @Id
    @Column(name = "id")
    private Long id;

    @Column(name = "key")
    private String key;

    @Column(name = "title")
    private String title;

    @Column(name = "location")
    private Long location;

    @Column(name = "lastdate")
    private Date lastDate;
}
