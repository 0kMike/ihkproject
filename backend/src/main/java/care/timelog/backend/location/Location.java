package care.timelog.backend.location;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Location {

    private String zip;
    private String city;
    private double longitude;
    private double latitude;

}