package care.timelog.backend.location;


import care.timelog.backend.exception.ZipCodeNotFoundException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.Collections;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@ExtendWith(SpringExtension.class)
class LocationServiceTest {

    private LocationService sut;

    @Mock
    private LocationRepository locationRepository;

    @BeforeEach
    void setUp() {
        sut = new LocationService(locationRepository);
    }

    @Test
    void whenDatabaseEmptyThenFindAllReturnsEmptyList() {

        Iterable<Location> locations = sut.findAll();

        assertIterableEquals(Collections.emptyList(), locations);

    }

    @Test
    void whenZipNotFoutThenThrowZipCodeNotFoundException() {

        assertThrows(ZipCodeNotFoundException.class, () -> sut.getLocationFromZip("99999"));
    }

    @Test
    void whenZipFoundThenItsLocationIsReturned() {
        LocationEntity locationEntity = givenLocationEntity();
        when(locationRepository.findAll()).thenReturn(Collections.singletonList(locationEntity));

        Location locationFromZip = sut.getLocationFromZip(locationEntity.getZip());
        assertEquals(locationEntity.getZip(), locationFromZip.getZip());
        assertEquals(locationEntity.getCity(), locationFromZip.getCity());
        assertEquals(locationEntity.getLongitude(), locationFromZip.getLongitude());
        assertEquals(locationEntity.getLatitude(), locationFromZip.getLatitude());
    }

    private LocationEntity givenLocationEntity() {

        LocationEntity locationEntity = new LocationEntity();

        locationEntity.setZip("76135");
        locationEntity.setCity("Karlsruhe");
        locationEntity.setLongitude(49.0069);
        locationEntity.setLatitude(8.4037);

        return locationEntity;
    }

}