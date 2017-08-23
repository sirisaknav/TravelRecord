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
import webapp.restcontroller.param.SigninForm;
import webapp.service.UserDetailService;
import webapp.service.UserService;

@RestController
@CrossOrigin
@RequestMapping("signin")
public class RestSignin {
	
	@Autowired
	private UserService userService;
	@Autowired
	private UserDetailService userDetailService;
	
	@PostMapping
	public ResponseEntity<UserDetail> getSignin(@RequestBody SigninForm signinForm){
		boolean usernameCheck=userService.checkUsernameAndPassword(signinForm.getUsername(),signinForm.getPassword());
		if(usernameCheck==false){
			return new ResponseEntity<UserDetail>(HttpStatus.CONFLICT);
		}
		User user=userService.findByUsername(signinForm.getUsername());
		int userId=user.getUserId();
		return new ResponseEntity<UserDetail>(userDetailService.findById(userId), HttpStatus.OK);
	}

}
