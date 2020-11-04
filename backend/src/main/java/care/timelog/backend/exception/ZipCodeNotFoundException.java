package care.timelog.backend.exception;

public class ZipCodeNotFoundException extends Exception {
    public ZipCodeNotFoundException(String errorMessage) {
        super(errorMessage);
    }
}
