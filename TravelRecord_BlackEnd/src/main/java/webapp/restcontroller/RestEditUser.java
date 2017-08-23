package webapp.restcontroller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import webapp.entity.UserDetail;
import webapp.service.UserDetailService;

@RestController
@CrossOrigin
@RequestMapping("{userid}/edit")
public class RestEditUser {
	
	@Autowired
	private UserDetailService userDetailService;

	@PostMapping
	public ResponseEntity<UserDetail> getEdit(@RequestBody UserDetail userDetail){
		return new ResponseEntity<UserDetail>(userDetailService.getEdit(userDetail), HttpStatus.OK);
	}
	
}
