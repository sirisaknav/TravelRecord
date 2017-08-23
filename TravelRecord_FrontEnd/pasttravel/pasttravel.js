app.controller("pasttravelCtrl", function ($rootScope,$scope,$location,$http,NgMap,ngDialog) {
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
	$scope.groupcompany = ['บริษัท ซีเอสไอ เอ็ดดูเคชั่น จำกัด', 'บริษัท ซีเอสไอ โปรเฟสชั่นนอล จำกัด', 'บริษัท คอมพิวเตอร์ซีสเต็มอินทริเกรชั่น จำกัด'];
	$scope.groupmonth = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม','เมษายน','พฤษภาคม','มิถุนายน','กรกฎาคม','สิงหาคม','กันยายน','ตุลาคม','พฤศจิกายน','ธันวาคม'];
	$scope.groupyear = [2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024];
	//------------------------------------------------------------------------
	//Search Data Travel By Month And Year
	$scope.searchByMonthAndYear = function(){
		var year = $scope.search.year;
		var month= $scope.search.month;
		var numMonth;
		if (month=='มกราคม') { 
			numMonth=1; 
		}
		if (month=='กุมภาพันธ์') { 
			numMonth=2; 
		}
		if (month=='มีนาคม') { 
			numMonth=3; 
		}
		if (month=='เมษายน') {
			numMonth=4; 
		}
		if (month=='พฤษภาคม') { 
			numMonth=5; 
		}
		if (month=='มิถุนายน') {
			numMonth=6; 
		}
		if (month=='กรกฎาคม') { 
			numMonth=7; 
		}
		if (month=='สิงหาคม') {
			numMonth=8; 
		}
		if (month=='กันยายน') { 
			numMonth=9; 
		}
		if (month=='ตุลาคม') {
			numMonth=10; 
		}
		if (month=='พฤศจิกายน') { 
			numMonth=11; 
		}
		if (month=='ธันวาคม') { 
			numMonth=12; 
		}
		var urlSearchByMonthAndYear="http://localhost:8080/travel/"+dataUser.userId+"/datatravel/listByMonth/"+numMonth+"/"+year;
		$http({
			method: 'GET',
			url: urlSearchByMonthAndYear
		}).then(function (response) {
			console.log(response.data);
			$scope.responDataTravel = response.data.data;
			$scope.responScheduled = response.data.scheduled; 
			$scope.responCodeConveyanceMor = response.data.codeConveyanceMor; 
			$scope.responcodeConveyanceCar = response.data.codeConveyanceCar; 
			$scope.responForAdmin = response.data.forAdmin; 
			$scope.responResultValue = response.data.resultValue; 
			if($scope.responDataTravel==""){
				alert("ไม่พบข้อมูล");
			}
		});
	}
	//delete
	$scope.buttonDelete = function(datatravelNo){
		var urlDeleteByDataTravelNo="http://localhost:8080/travel/"+dataUser.userId+"/datatravel/"+datatravelNo+"/delete";
		$http({
			method: 'DELETE',
			url: urlDeleteByDataTravelNo
		}).then(function () {
			var year = $scope.search.year;
			var month= $scope.search.month;
			var numMonth;
			if (month=='มกราคม') { 
				numMonth=1; 
			}
			if (month=='กุมภาพันธ์') { 
				numMonth=2; 
			}
			if (month=='มีนาคม') { 
				numMonth=3; 
			}
			if (month=='เมษายน') {
				numMonth=4; 
			}
			if (month=='พฤษภาคม') { 
				numMonth=5; 
			}
			if (month=='มิถุนายน') {
				numMonth=6; 
			}
			if (month=='กรกฎาคม') { 
				numMonth=7; 
			}
			if (month=='สิงหาคม') {
				numMonth=8; 
			}
			if (month=='กันยายน') { 
				numMonth=9; 
			}
			if (month=='ตุลาคม') {
				numMonth=10; 
			}
			if (month=='พฤศจิกายน') { 
				numMonth=11; 
			}
			if (month=='ธันวาคม') { 
				numMonth=12; 
			}
			var urlSearchByMonthAndYear="http://localhost:8080/travel/"+dataUser.userId+"/datatravel/listByMonth/"+numMonth+"/"+year;
			$http({
				method: 'GET',
				url: urlSearchByMonthAndYear
			}).then(function (response) {
				console.log(response.data);
				$scope.responDataTravel = response.data.data;
				$scope.responScheduled = response.data.scheduled; 
				$scope.responCodeConveyanceMor = response.data.codeConveyanceMor; 
				$scope.responcodeConveyanceCar = response.data.codeConveyanceCar; 
				$scope.responForAdmin = response.data.forAdmin; 
				$scope.responResultValue = response.data.resultValue; 
				if($scope.responDataTravel==""){
					alert("ไม่พบข้อมูล");
				}
			});
		});

		
	}

});






