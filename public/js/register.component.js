(function() {
	"use strict";
	var niceAdmin = angular.module("niceAdmin");
	function regCtrl() {
		var vm = this;
	}
	/* Register Component */
	niceAdmin.component("registerComponent",{
		templateUrl: "templates/register.component.html",
		controllerAs: "regCtrl",
		controller: [regCtrl]
	});
})();