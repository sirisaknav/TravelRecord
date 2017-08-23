package webapp.restcontroller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import webapp.entity.User;
import webapp.entity.UserDetail;
import webapp.restcontroller.param.SignupForm;
import webapp.service.UserDetailService;
import webapp.service.UserService;

@RestController
@CrossOrigin
@RequestMapping("signup")
public class RestSignup {
	
	@Autowired
	private UserService userService;
	@Autowired
	private UserDetailService userDetailService;
	
	@PostMapping
	public ResponseEntity<UserDetail> getSignup(@RequestBody SignupForm signupForm){
		boolean usernameCheck=userService.addUser(signupForm.getUsername(),signupForm.getPassword());
		if(usernameCheck==false){
			return new ResponseEntity<UserDetail>(HttpStatus.CONFLICT);
		}
		User user=userService.findByUsername(signupForm.getUsername());
		int userId=user.getUserId();
		userDetailService.addUserDetail(userId,signupForm.getFirstname(),signupForm.getLastname(),signupForm.getPosition());
		return new ResponseEntity<UserDetail>(userDetailService.findById(userId), HttpStatus.OK);
	}
	
}
