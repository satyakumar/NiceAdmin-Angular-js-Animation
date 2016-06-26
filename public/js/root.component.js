(function() {
    "use strict";
    var niceAdmin = angular.module("niceAdmin");
    /* Root component */
	function rootCtrl() {
		var vm = this;
		vm.toggle = true;
		vm.toggleSidebar = function() { 
			vm.toggle = !vm.toggle;
		}
	}
    niceAdmin.component("rootComponent", {
        templateUrl: "templates/root.component.html",
		controllerAs: "rootCtrl",
		controller: [rootCtrl],
        $routeConfig: [{
            path: "/",
            component: "homeComponent",
            name: "Home"
        }, {
            path: "/login",
            component: "loginComponent",
            name: "Login"
        }, {
            path: "/register",
            component: "registerComponent",
            name: "Register"
        }, {
            path: "/story/:id",
            component: "storyDetailComponent",
            name: "Story"
        }, {
            path: "/pincode",
            component: "pincodeComponent",
            name: "Pincode"
        }, {
            path: "/*",
            redirectTo: ["Home", ""]
        }],
    });
})();