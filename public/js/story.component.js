(function() {
	"use strict";
	var niceAdmin = angular.module("niceAdmin");
	/* Story Detail Component */
	function storyCtrl($http) {
		var vm = this;
		vm.$routerOnActivate = function(next,previous) { 
			vm.id = next.params.id;
		}
		vm.$onInit = function() {
			$http.get("stories.json").then(function(response) {
				response.data.forEach(function(val,i) {
					if(val.id === vm.id) {
						vm.title = val.title;
						vm.story = val.story;
						vm.image = val.image;
						vm.moral = val.moral;
					}
				})
			});
		}
	}
	niceAdmin.component("storyDetailComponent",{
		templateUrl: "templates/story.component.html",
		controllerAs: "storyModel",
		controller: ["$http",storyCtrl]
	});
})();