package care.timelog.backend.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.NOT_FOUND, reason = "No location found for zipcode")
public class ZipCodeNotFoundException extends RuntimeException {
    public ZipCodeNotFoundException(String errorMessage) {
        super(errorMessage);
    }
}
