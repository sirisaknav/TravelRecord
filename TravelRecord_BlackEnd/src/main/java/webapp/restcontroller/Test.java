package webapp.restcontroller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("test")
public class Test {
	
	@ResponseBody
	@GetMapping
	public String test(){
		return "Welcome to Spring Boot Pass!!!";
	}

}