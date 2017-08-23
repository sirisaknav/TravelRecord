package webapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;

@SpringBootApplication
public class TravelRecordBlackEndApplication extends SpringBootServletInitializer{

	public static void main(String[] args) {
		SpringApplication.run(TravelRecordBlackEndApplication.class, args);
	}
	
	@Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(applicationClass);
    }

    private static Class<TravelRecordBlackEndApplication> applicationClass = TravelRecordBlackEndApplication.class;
}
