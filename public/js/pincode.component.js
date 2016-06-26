(function() { // As pincode API is not working used temparature API
	var niceAdmin = angular.module("niceAdmin");	
	function pinCtrl($http) {
		var vm = this;
		vm.dataForm = true;
		vm.getPincode = function() { 
			var url = "http://api.openweathermap.org/data/2.5/weather?q="+vm.place+",IN&appid=6471c8ef66b0d2a929e4975271376a3c";
			$http({
				method: 'GET',
                dataType: "json",
                url: url,
            }).then(function successCallback(response) {
                console.log('success');
				console.log(response);
				vm.data = response.data;
				vm.dataForm = false;
            }, function errorCallback(response) {
                console.log('error');
                console.log(response);
            })
		}
		vm.getCelsius = function(k) { 
			return (k - 273.15).toFixed(0); // Kelvin to Celsius
		}
		
	}
	niceAdmin.component("pincodeComponent",{
		templateUrl: "templates/pincode.component.html",
		controllerAs: "pinModel",
		controller: ["$http",pinCtrl],
		
	});
})();