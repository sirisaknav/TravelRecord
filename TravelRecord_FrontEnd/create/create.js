app.controller("createCtrl", function ($rootScope,$scope,$location,$http,NgMap,ngDialog,) {
	//-------------------------- Starter -----------------------------------
	var API_GOOGLE_KEY = "AIzaSyB66-ghdeX4jMpQK4y3zdLMB87ZV1O2xaE";
	var dataUser=JSON.parse(localStorage.getItem('dataUser'));
	$scope.firstname=dataUser.firstname;
	$scope.lastname=dataUser.lastname;
	if(localStorage.getItem('dataUser') == null){
		$location.path('/signup');
	}
	//Logout
	$scope.signout = function(){
		localStorage.removeItem('dataUser'); 
		localStorage.removeItem('remember'); 
		$location.path('/signup');
	}
	//locationStore
	$scope.locationStore;
	$scope.loadLocation = function(){
		var urlGetLocation="http://localhost:8080/travel/"+dataUser.userId+"/location";
		$http({
			method: 'GET',
			url: urlGetLocation,
		}).then(function mySuccess(response) {
			var data=response.data;
			$scope.locationStore=data;
		});
	}
	//------------------------------------------------------------------------
	//Datepicker
	$('#datetimepicker2').datetimepicker({
		locale: 'th',
		format: 'DD MMMM YYYY',
		minDate: '2017-07-01'
	});
	//getLatLang
	var locationLat;
	var locationLng;
	$scope.getLatLang = function(){
		//function get map mapSearch
		NgMap.getMap('mapSearch').then(function(map) {
			map.setZoom(15);
			$rootScope.mapSearch = map;
		})
		var addressLocation = $scope.addLocation.addressLocation;
		var urlGetLatLang = "https://maps.googleapis.com/maps/api/geocode/json?address="+addressLocation+"&key="+API_GOOGLE_KEY;
		$http({
			method: 'GET',
			url: urlGetLatLang,
		}).then(function mySuccess(response) {
			$scope.locationLatLng=response.data.results[0].geometry.location;
			locationLat=response.data.results[0].geometry.location.lat;
			locationLng=response.data.results[0].geometry.location.lng;
		});
	}
	//saveLocation
	$scope.saveLocation = function(){
		console.log("saveLocation");
		$scope.addLocation.locationLat=locationLat;
		$scope.addLocation.locationLng=locationLng;
		var data = $scope.addLocation;
		var urlAddLocation="http://localhost:8080/travel/"+dataUser.userId+"/location";
		$http({
			method: 'POST',
			url: urlAddLocation,
			data: data,
			headers: {'Content-Type': 'application/json'}
		}).then(function mySuccess(response) {
			var data=response.data;
			$scope.locationStore=data;
			alert('บันทึกข้อมูลแล้ว');
		}, function myError(response) {
			alert('มีชื่อสถานที่นี้แล้ว');
		});
	}
	//auto calculate distance AB
	$scope.calculateDistanceAB = function(){
		$scope.changeWayABB();
		setTimeout(function() {
			$scope.changeWayABB();
		}, 1000);
	}
	//function ChangeWayABB
	$scope.changeWayABB = function() {
		if($scope.locationA === undefined || $scope.locationB === undefined){
			if($scope.locationA === undefined){
				console.log("ไม่ได้กรอกข้อมูลสถานที่ "+"A");
			}
			if($scope.locationB === undefined){
				console.log("ไม่ได้กรอกข้อมูลสถานที่ "+"B");
			}
		}else{
			NgMap.getMap('mapABB').then(function(map) {
				$rootScope.mapABB = map;
				$scope.distanceAB=Math.round($rootScope.mapABB.directionsRenderers[0].directions.routes[0].legs[0].distance.value/1000);
			});
			setTimeout(function() {
				$scope.centerLocationABB=$scope.locationA.locationLat+","+$scope.locationA.locationLng;
			}, 100);
		}
	}
	//auto calculate distance BC
	$scope.calculateDistanceBC = function(){
		$scope.changeWayBCC();
		setTimeout(function() {
			$scope.changeWayBCC();
		}, 1000);
	}
	//function ChangeWayBCC
	$scope.changeWayBCC = function() {
		if($scope.locationB === undefined || $scope.locationC === undefined){
			if($scope.locationA === undefined){
				console.log("ไม่ได้กรอกข้อมูลสถานที่ "+"B");
			}
			if($scope.locationB === undefined){
				console.log("ไม่ได้กรอกข้อมูลสถานที่ "+"C");
			}
		}else{
			NgMap.getMap('mapBCC').then(function(map) {
				$rootScope.mapBCC = map;
				$scope.distanceBC=Math.round($rootScope.mapBCC.directionsRenderers[0].directions.routes[0].legs[0].distance.value/1000);
			});
			setTimeout(function() {
				$scope.centerLocationBCC=$scope.locationB.locationLat+","+$scope.locationB.locationLng;
			}, 100);
		}
	}
	//auto calculate distance CD
	$scope.calculateDistanceCD = function(){
		$scope.changeWayCDD();
		setTimeout(function() {
			$scope.changeWayCDD();
		}, 1000);
	}
	//function ChangeWayCDD
	$scope.changeWayCDD = function() {
		if($scope.locationC === undefined || $scope.locationD === undefined){
			if($scope.locationA === undefined){
				console.log("ไม่ได้กรอกข้อมูลสถานที่ "+"C");
			}
			if($scope.locationB === undefined){
				console.log("ไม่ได้กรอกข้อมูลสถานที่ "+"D");
			}
		}else{
			NgMap.getMap('mapCDD').then(function(map) {
				$rootScope.mapCDD = map;
				$scope.distanceCD=Math.round($rootScope.mapCDD.directionsRenderers[0].directions.routes[0].legs[0].distance.value/1000);
			});
			setTimeout(function() {
				$scope.centerLocationCDD=$scope.locationC.locationLat+","+$scope.locationC.locationLng;
			}, 100);
		}
	}
	//auto calculate distance BA
	$scope.calculateDistanceBA = function(){
		$scope.changeWayBAA();
		setTimeout(function() {
			$scope.changeWayBAA();
		}, 1000);
	}
	//function ChangeWayBAA
	$scope.changeWayBAA = function() {
		if ($scope.countLocation==2) {
			$scope.locationLast=$scope.locationB;
		}
		if ($scope.countLocation==3) {
			$scope.locationLast=$scope.locationC;
		}
		if ($scope.countLocation==4) {
			$scope.locationLast=$scope.locationD;
		}
		if($scope.locationLast === undefined || $scope.locationA === undefined){
			if($scope.locationA === undefined){
				console.log("ไม่ได้กรอกข้อมูลสถานที่ "+"LAST");
			}
			if($scope.locationB === undefined){
				console.log("ไม่ได้กรอกข้อมูลสถานที่ "+"A");
			}
		}else{
			NgMap.getMap('mapBAA').then(function(map) {
				$rootScope.mapBAA = map;
				$scope.distanceBA=Math.round($rootScope.mapBAA.directionsRenderers[0].directions.routes[0].legs[0].distance.value/1000);
			});
			setTimeout(function() {
				$scope.centerLocationBAA=$scope.locationLast.locationLat+","+$scope.locationLast.locationLng;
			}, 100);
		}
	}
	
	//function ChangeWayAB
	$scope.changeWayAB = function() {
		//function get map AB
		if($scope.locationA === undefined || $scope.locationB === undefined){
			if($scope.locationA === undefined){
				console.log("ไม่ได้กรอกข้อมูลสถานที่ "+"A");
			}
			if($scope.locationB === undefined){
				console.log("ไม่ได้กรอกข้อมูลสถานที่ "+"B");
			}
		}else{
			$scope.textLoad="กำลังสร้างเส้นทาง";
			NgMap.getMap('mapAB').then(function(map) {
				$rootScope.mapAB = map;
				$scope.distanceAB=Math.round($rootScope.mapAB.directionsRenderers[0].directions.routes[0].legs[0].distance.value/1000);
			});
			setTimeout(function() {
				$scope.centerLocationAB=$scope.locationA.locationLat+","+$scope.locationA.locationLng;
			}, 100);
		}
	}
	//function ChangeWayBC
	$scope.changeWayBC = function() {
		//function get map BC
		if($scope.locationB === undefined || $scope.locationC === undefined){
			if($scope.locationA === undefined){
				console.log("ไม่ได้กรอกข้อมูลสถานที่ "+"B");
			}
			if($scope.locationB === undefined){
				console.log("ไม่ได้กรอกข้อมูลสถานที่ "+"C");
			}
		}else{
			$scope.textLoad="กำลังสร้างเส้นทาง";
			NgMap.getMap('mapBC').then(function(map) {
				$rootScope.mapBC = map;
				$scope.distanceBC=Math.round($rootScope.mapBC.directionsRenderers[0].directions.routes[0].legs[0].distance.value/1000);
			});
			setTimeout(function() {
				$scope.centerLocationBC=$scope.locationB.locationLat+","+$scope.locationB.locationLng;
			}, 100);
		}
	}
	//function ChangeWayCD
	$scope.changeWayCD = function() {
		//function get map CD
		if($scope.locationC === undefined || $scope.locationD === undefined){
			if($scope.locationA === undefined){
				console.log("ไม่ได้กรอกข้อมูลสถานที่ "+"C");
			}
			if($scope.locationB === undefined){
				console.log("ไม่ได้กรอกข้อมูลสถานที่ "+"D");
			}
		}else{
			$scope.textLoad="กำลังสร้างเส้นทาง";
			NgMap.getMap('mapCD').then(function(map) {
				$rootScope.mapCD = map;
				$scope.distanceCD=Math.round($rootScope.mapCD.directionsRenderers[0].directions.routes[0].legs[0].distance.value/1000);
			});
			setTimeout(function() {
				$scope.centerLocationCD=$scope.locationC.locationLat+","+$scope.locationC.locationLng;
			}, 100);
		}
	}
	//function ChangeWayBA
	$scope.changeWayBA = function() {
		//function get map BA
		if ($scope.countLocation==2) {
			$scope.locationLast=$scope.locationB;
		}
		if ($scope.countLocation==3) {
			$scope.locationLast=$scope.locationC;
		}
		if ($scope.countLocation==4) {
			$scope.locationLast=$scope.locationD;
		}
		if($scope.locationLast === undefined || $scope.locationA === undefined){
			if($scope.locationA === undefined){
				console.log("ไม่ได้กรอกข้อมูลสถานที่ "+"LAST");
			}
			if($scope.locationB === undefined){
				console.log("ไม่ได้กรอกข้อมูลสถานที่ "+"A");
			}
		}else{
			NgMap.getMap('mapBA').then(function(map) {
				$rootScope.mapBA = map;
				$scope.distanceBA=Math.round($rootScope.mapBA.directionsRenderers[0].directions.routes[0].legs[0].distance.value/1000);
			});
			setTimeout(function() {
				$scope.centerLocationBA=$scope.locationLast.locationLat+","+$scope.locationLast.locationLng;
			}, 100);
		}
	}
	//create data travel
	$scope.createDataTravel = function(){
		console.log("create data travel");
		//modifly date
		var datePic=window.document.getElementById("dateTravel").value;
		var date=datePic.slice(0, 2);
		var year=datePic.slice(-4);
		var month=datePic.substring(3, datePic.length-5);
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
		var dateModifly=year+"-"+numMonth+"-"+date;
		//-------------------
		if ($scope.countLocation==2) {
			$scope.ifCountLocation2(dateModifly);
			setTimeout(function() {
				if($scope.checkReturnStart=='YES'){
					$scope.ifReturnStart(dateModifly);
				}
			}, 500);
		}
		if ($scope.countLocation==3) {
			$scope.ifCountLocation2(dateModifly);
			setTimeout(function() {
				$scope.ifCountLocation3(dateModifly);
			}, 500);
			setTimeout(function() {
				if($scope.checkReturnStart=='YES'){
					$scope.ifReturnStart(dateModifly);
				}
			}, 1000);
		}
		if ($scope.countLocation==4) {
			$scope.ifCountLocation2(dateModifly);
			setTimeout(function() {
				$scope.ifCountLocation3(dateModifly);
			}, 500);
			setTimeout(function() {
				$scope.ifCountLocation4(dateModifly);
			}, 1000);
			setTimeout(function() {
				if($scope.checkReturnStart=='YES'){
					$scope.ifReturnStart(dateModifly);
				}
			}, 1500);
		}
		$location.path('http://localhost:5000/#!/home/create');
	}
	//function check data for create
	$scope.CheckDataForCreate = function(data){
		if(data.userId === undefined){
			delete data.userId;
		}
		if(data.dateTravel === undefined){
			delete data.dateTravel;
		}
		if(data.travelwith === undefined){
			delete data.travelwith;
		}
		if(data.start === undefined){
			delete data.start;
		}
		if(data.end === undefined){
			delete data.end;
		}
		if(data.conveyance === undefined){
			delete data.conveyance;
		}
		if(data.codeConveyance === undefined){
			delete data.codeConveyance;
		}
		if(data.distance === undefined){
			delete data.distance;
		}
		if(data.expenses === undefined){
			delete data.expenses;
		}
		if(data.orther === undefined){
			delete data.orther;
		}
		if(data.charges === undefined){
			delete data.charges;
		}
		if(data.bill === undefined){
			delete data.bill;
		}
		if(data.reason === undefined){
			delete data.reason;
		}
		return data;
	}
	//function for create data travel if $scope.countLocation==2
	$scope.ifCountLocation2 = function(dateModifly){
		$scope.checkReadyCreat="NO";
		if($scope.locationA === undefined || $scope.locationB === undefined){
			if($scope.locationA === undefined){
				alert("กรุณาเลือกสถานที่ A");
			}
			if($scope.locationB === undefined){
				alert("กรุณาเลือกสถานที่ B");
			}
		}else if ($scope.reasonAB === undefined) {
			alert("กรุณากรอกเหตุผลในการเดินทางจาก A ไป B");
		}else if ($scope.conveyanceAB === "enter conveyance") {
			alert("กรุณาเลือกพาหนะในการเดินทางจาก A ไป B");
		}else if ($scope.conveyanceAB === "ขนส่งสาธารณะ" || $scope.conveyanceAB === "MRT") {
			if($scope.expensesAB === undefined){
				alert("กรุณากรอกค่าโดยสารจาก A ไป B");
			}else{
				$scope.checkReadyCreate="YES";
			}
		}else if ($scope.conveyanceAB === "รถยนต์ส่วนตัว" || $scope.conveyanceAB === "จักรยานยนต์ส่วนตัว") {
			if($scope.codeConveyanceAB === undefined){
				alert("กรุณากรอกทะเบียนรถจาก A ไป B");
			}else{
				$scope.checkReadyCreate="YES";
			}
		}
		if($scope.checkReadyCreate=="YES"){
			$scope.data = {};
			$scope.data.userId=dataUser.userId;
			$scope.data.dateTravel=dateModifly;
			$scope.data.travelwith=$scope.travelwith;
			$scope.data.start=$scope.locationA.nameLocation;
			$scope.data.end=$scope.locationB.nameLocation
			$scope.data.conveyance=$scope.conveyanceAB;
			$scope.data.codeConveyance=$scope.codeConveyanceAB;
			$scope.data.distance=$scope.distanceAB;
			$scope.data.expenses=$scope.expensesAB;
			$scope.data.orther=$scope.ortherAB;
			$scope.data.charges=$scope.chargesAB;
			$scope.data.bill=$scope.billAB;
			$scope.data.reason=$scope.reasonAB;
			var data=$scope.data;
			console.log("DATA A TO B");
			console.log($scope.data);
			var urlCreateDataTravel="http://localhost:8080/travel/"+dataUser.userId+"/datatravel/create";
			$http({
				method: 'POST',
				url: urlCreateDataTravel,
				data: $scope.CheckDataForCreate(data),
				headers: {'Content-Type': 'application/json'}
			}).then(function mySuccess(response) {
				alert('CREATE DATA A TO B PASS');
			}, function myError(response) {
				alert('ERROR');
			});
		}
	}
	//function for create data travel if $scope.countLocation==3
	$scope.ifCountLocation3 = function(dateModifly){
		$scope.checkReadyCreat="NO";
		if($scope.locationB === undefined || $scope.locationC === undefined){
			if($scope.locationB === undefined){
				alert("กรุณาเลือกสถานที่ B");
			}
			if($scope.locationC === undefined){
				alert("กรุณาเลือกสถานที่ C");
			}
		}else if ($scope.reasonBC === undefined) {
			alert("กรุณากรอกเหตุผลในการเดินทางจาก B ไป C");
		}else if ($scope.conveyanceBC === "enter conveyance") {
			alert("กรุณาเลือกพาหนะในการเดินทางจาก B ไป C");
		}else if ($scope.conveyanceBC === "ขนส่งสาธารณะ" || $scope.conveyanceBC === "MRT") {
			if($scope.expensesBC === undefined){
				alert("กรุณากรอกค่าโดยสารจาก B ไป C");
			}else{
				$scope.checkReadyCreate="YES";
			}
		}else if ($scope.conveyanceBC === "รถยนต์ส่วนตัว" || $scope.conveyanceBC === "จักรยานยนต์ส่วนตัว") {
			if($scope.codeConveyanceBC === undefined){
				alert("กรุณากรอกทะเบียนรถจาก B ไป C");
			}else{
				$scope.checkReadyCreate="YES";
			}
		}
		if($scope.checkReadyCreate=="YES"){
			$scope.data = {};
			$scope.data.userId=dataUser.userId;
			$scope.data.dateTravel=dateModifly;
			$scope.data.travelwith=$scope.travelwith;
			$scope.data.start=$scope.locationB.nameLocation;
			$scope.data.end=$scope.locationC.nameLocation
			$scope.data.conveyance=$scope.conveyanceBC;
			$scope.data.codeConveyance=$scope.codeConveyanceBC;
			$scope.data.distance=$scope.distanceBC;
			$scope.data.expenses=$scope.expensesBC;
			$scope.data.orther=$scope.ortherBC;
			$scope.data.charges=$scope.chargesBC;
			$scope.data.bill=$scope.billBC;
			$scope.data.reason=$scope.reasonBC;
			var data=$scope.data;
			console.log("DATA B TO C");
			console.log(data);
			var urlCreateDataTravel="http://localhost:8080/travel/"+dataUser.userId+"/datatravel/create";
			$http({
				method: 'POST',
				url: urlCreateDataTravel,
				data: $scope.CheckDataForCreate(data),
				headers: {'Content-Type': 'application/json'}
			}).then(function mySuccess(response) {
				alert('CREATE DATA B TO C PASS');
			}, function myError(response) {
				alert('ERROR');
			});
		}
	}
	//function for create data travel if $scope.countLocation==4
	$scope.ifCountLocation4 = function(dateModifly){
		$scope.checkReadyCreat="NO";
		if($scope.locationC === undefined || $scope.locationD === undefined){
			if($scope.locationC === undefined){
				alert("กรุณาเลือกสถานที่ C");
			}
			if($scope.locationD === undefined){
				alert("กรุณาเลือกสถานที่ D");
			}
		}else if ($scope.reasonCD === undefined) {
			alert("กรุณากรอกเหตุผลในการเดินทางจาก C ไป D");
		}else if ($scope.conveyanceCD === "enter conveyance") {
			alert("กรุณาเลือกพาหนะในการเดินทางจาก C ไป D");
		}else if ($scope.conveyanceCD === "ขนส่งสาธารณะ" || $scope.conveyanceCD === "MRT") {
			if($scope.expensesCD === undefined){
				alert("กรุณากรอกค่าโดยสารจาก C ไป D");
			}else{
				$scope.checkReadyCreate="YES";
			}
		}else if ($scope.conveyanceCD === "รถยนต์ส่วนตัว" || $scope.conveyanceCD === "จักรยานยนต์ส่วนตัว") {
			if($scope.codeConveyanceCD === undefined){
				alert("กรุณากรอกทะเบียนรถจาก C ไป D");
			}else{
				$scope.checkReadyCreate="YES";
			}
		}
		if($scope.checkReadyCreate=="YES"){
			$scope.data = {};
			$scope.data.userId=dataUser.userId;
			$scope.data.dateTravel=dateModifly;
			$scope.data.travelwith=$scope.travelwith;
			$scope.data.start=$scope.locationC.nameLocation;
			$scope.data.end=$scope.locationD.nameLocation
			$scope.data.conveyance=$scope.conveyanceCD;
			$scope.data.codeConveyance=$scope.codeConveyanceCD;
			$scope.data.distance=$scope.distanceCD;
			$scope.data.expenses=$scope.expensesCD;
			$scope.data.orther=$scope.ortherCD;
			$scope.data.charges=$scope.chargesCD;
			$scope.data.bill=$scope.billCD;
			$scope.data.reason=$scope.reasonCD;
			var data=$scope.data;
			console.log("DATA B TO C");
			console.log(data);
			var urlCreateDataTravel="http://localhost:8080/travel/"+dataUser.userId+"/datatravel/create";
			$http({
				method: 'POST',
				url: urlCreateDataTravel,
				data: $scope.CheckDataForCreate(data),
				headers: {'Content-Type': 'application/json'}
			}).then(function mySuccess(response) {
				alert('CREATE DATA C TO D PASS');
			}, function myError(response) {
				alert('ERROR');
			});
		}
	}
	//function for create data travel if $scope.checkReturnStart==YES
	$scope.ifReturnStart = function(dateModifly){
		var nameLocLas;
		if ($scope.countLocation==2) {
			$scope.locationLast=$scope.locationB;
			var nameLocLas="B";
		}
		if ($scope.countLocation==3) {
			$scope.locationLast=$scope.locationC;
			var nameLocLas="C";
		}
		if ($scope.countLocation==4) {
			$scope.locationLast=$scope.locationD;
			var nameLocLas="D";
		}
		$scope.checkReadyCreat="NO";
		if($scope.locationLast === undefined || $scope.locationA === undefined){
			if($scope.locationLast === undefined){
				alert("กรุณาเลือกสถานที่ "+nameLocLas);
			}
			if($scope.locationA === undefined){
				alert("กรุณาเลือกสถานที่ A");
			}
		}else if ($scope.reasonBA === undefined) {
			alert("กรุณากรอกเหตุผลในการเดินทางจาก "+nameLocLas+" ไป A");
		}else if ($scope.conveyanceBA === "enter conveyance") {
			alert("กรุณาเลือกพาหนะในการเดินทางจาก "+nameLocLas+" ไป A");
		}else if ($scope.conveyanceBA === "ขนส่งสาธารณะ" || $scope.conveyanceBA === "MRT") {
			if($scope.expensesBA === undefined){
				alert("กรุณากรอกค่าโดยสารจาก "+nameLocLas+" ไป A");
			}else{
				$scope.checkReadyCreate="YES";
			}
		}else if ($scope.conveyanceBA === "รถยนต์ส่วนตัว" || $scope.conveyanceBA === "จักรยานยนต์ส่วนตัว") {
			if($scope.codeConveyanceBA === undefined){
				alert("กรุณากรอกทะเบียนรถจาก "+nameLocLas+" ไป A");
			}else{
				$scope.checkReadyCreate="YES";
			}
		}
		if($scope.checkReadyCreate=="YES"){
			$scope.data = {};
			$scope.data.userId=dataUser.userId;
			$scope.data.dateTravel=dateModifly;
			$scope.data.travelwith=$scope.travelwith;
			$scope.data.start=$scope.locationLast.nameLocation;
			$scope.data.end=$scope.locationA.nameLocation
			$scope.data.conveyance=$scope.conveyanceBA;
			$scope.data.codeConveyance=$scope.codeConveyanceBA;
			$scope.data.distance=$scope.distanceBA;
			$scope.data.expenses=$scope.expensesBA;
			$scope.data.orther=$scope.ortherBA;
			$scope.data.charges=$scope.chargesBA;
			$scope.data.bill=$scope.billBA;
			$scope.data.reason=$scope.reasonBA;
			var data=$scope.data;
			console.log("DATA LAST TO A");
			console.log(data);
			var urlCreateDataTravel="http://localhost:8080/travel/"+dataUser.userId+"/datatravel/create";
			$http({
				method: 'POST',
				url: urlCreateDataTravel,
				data: $scope.CheckDataForCreate(data),
				headers: {'Content-Type': 'application/json'}
			}).then(function mySuccess(response) {
				alert("CREATE DATA "+nameLocLas+" TO A PASS");
			}, function myError(response) {
				alert('ERROR');
			});
		}
	}
});















