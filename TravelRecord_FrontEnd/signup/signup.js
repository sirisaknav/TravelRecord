app.controller("signupCtrl", function ($scope,$http,$location) {
	//check login
	if(localStorage.getItem('dataUser') != null){
		$location.path('/home/create');
	}
	//sigup
	$scope.signup = function(){
		var data=$scope.signupform;
		$http({
			method: 'POST',
			url: 'http://localhost:8080/travel/signup',
			data: data,
			headers: {'Content-Type': 'application/json'}
		}).then(function mySuccess(response) {
			var t=response.data;
			localStorage.setItem('dataUser', JSON.stringify(t))
			alert('WELCOME TO WEBSITE');
			$location.path('/home/create');
		}, function myError(response) {
			if (response.status==409){
				alert('username ซ้ำ โปรดใช้ username อื่น');
			}else{
				alert('ERROR CANNOT CONNECT WEBSERVICE');
			}
		});
	}
});