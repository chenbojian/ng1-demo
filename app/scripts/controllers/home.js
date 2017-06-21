angular.module('ng1DemoApp')
  .controller('HomeCtrl', ['$location',function ($location) {
  	this.goTo = function(url) {
  		console.log('url', url)
  		window.location.href = "#/" + url;
  	}
  }]);