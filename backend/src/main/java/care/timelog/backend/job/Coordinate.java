package care.timelog.backend.job;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Coordinate {

    private double longitude;
    private double latitude;

    public Coordinate(double longitude, double latitude) {
        this.longitude = longitude;
        this.latitude = latitude;
    }
}
