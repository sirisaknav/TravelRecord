app.controller("signinCtrl", function ($scope,$http,$location) {
	//check login
	if(localStorage.getItem('dataUser') != null){
		$location.path('/home/create');
	}
	//signin
	$scope.signin = function(){
		var data=$scope.signinform;
		$http({
			method: 'POST',
			url: 'http://localhost:8080/travel/signin',
			data: data,
			headers: {'Content-Type': 'application/json'}
		}).then(function mySuccess(response) {
			var t=response.data;
			localStorage.setItem('dataUser', JSON.stringify(t))
			alert('WELCOME TO WEBSITE');
			$location.path('/home/create');
		}, function myError(response) {
			if (response.status==409){
				alert('โปรดตรวจสอบ username และ password');
			}else{
				alert('ERROR CANNOT CONNECT WEBSERVICE');
			}
		});
	}
});