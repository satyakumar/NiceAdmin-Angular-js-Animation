(function() {
    //"use strict";
    var niceAdmin = angular.module("niceAdmin");
    /* Home Component */
    function homeCtrl($http) {
        var vm = this;
        vm.$onInit = function() { 
            $http.get("stories.json").then(function(response) {
				vm.stories = response.data;
			}).catch(function(e) {
				console.log("Error", e);
			});
		};
		vm.details = function(id) {
            vm.$router.navigate(["Story", {
                id: id
            }]);
        }
    }
    niceAdmin.component("homeComponent", {
        templateUrl: "templates/home.component.html",
        controllerAs: "homeModel",
        controller: ["$http", homeCtrl],
        bindings: {
            "$router": "<",
        },
    });
})();