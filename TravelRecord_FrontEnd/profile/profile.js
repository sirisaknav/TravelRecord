app.controller("profileCtrl", function ($rootScope,$scope,$location,$http,NgMap,ngDialog) {
	//-------------------------- Starter -----------------------------------
	var dataUser=JSON.parse(localStorage.getItem('dataUser'));
	$scope.firstname=dataUser.firstname;
	$scope.lastname=dataUser.lastname;
	$scope.position=dataUser.position;
	if(localStorage.getItem('dataUser') == null){
		$location.path('/signup');
	}
	//Logout
	$scope.signout = function(){
		localStorage.removeItem('dataUser'); 
		localStorage.removeItem('remember'); 
		$location.path('/signup');
	}
	document.getElementById("inputFirstname").readOnly = true;
	document.getElementById("inputLastname").readOnly = true;
	document.getElementById("inputPosition").readOnly = true;
	var buttonSave = document.getElementById('buttonSave');
	var buttonEdit = document.getElementById('buttonEdit');
	buttonSave.style.display = 'none';
	$scope.editProfile = function(){
		buttonEdit.style.display = 'none';
		if (buttonSave.style.display === 'none') {
			buttonSave.style.display = 'block';
		} else {
			buttonSave.style.display = 'none';
		}
		document.getElementById("inputFirstname").readOnly = false;
		document.getElementById("inputLastname").readOnly = false;
		document.getElementById("inputPosition").readOnly = false;
	}
	//------------------------------------------------------------------------
	$scope.profileform=dataUser;
	$scope.sentEditProfile = function(){
		$scope.profileform.userId=dataUser.userId;
		var data=$scope.profileform;
		var urlSentEditProfile="http://localhost:8080/travel/"+dataUser.userId+"/edit";
		$http({
			method: 'POST',
			url: urlSentEditProfile,
			data: data,
			headers: {'Content-Type': 'application/json'}
		}).then(function mySuccess(response) {
			alert('Edit PASS');
			var t=response.data;
			localStorage.setItem('dataUser', JSON.stringify(t))
			$location.path('http://localhost:5000/#!/home/profile');
		}, function myError(response) {
			alert('ERROR');
		});
	}
});






