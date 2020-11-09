package care.timelog.backend.job;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Getter
@Setter
@Entity
@Table(name = "job")
public class JobEntity {

    @Id
    @Column(name = "id")
    private String id;

    @Column(name = "key")
    private Long key;

    @Column(name = "title")
    private String title;

    @Column(name = "longitude")
    private Double longitude;

    @Column(name = "latitude")
    private Double latitude;

    @Column(name = "lastdate")
    private Date lastDate;

}
