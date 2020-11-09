package care.timelog.backend.location;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Getter
@Setter
@Entity
@Table(name = "location")
public class LocationEntity {

    @Id
    @Column(name = "zip")
    private String zip;

    @Column(name = "city")
    private String city;

    @Column(name = "longitude")
    private Double longitude;

    @Column(name = "latitude")
    private Double latitude;

}
