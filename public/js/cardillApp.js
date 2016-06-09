(function(){
	var app = angular.module("cardillApp", ['ng-sortable', 'ui.router']);

	app.config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {

	  $stateProvider
	    .state('home', {
	        url: '/home',
	        templateUrl: '/pages/home/home.html',	
	        controller: 'HomeController'      
	    })
	    .state('draft-results', {
	        url: '/posts/draft-results',
	        templateUrl: '/pages/draft/draft-results/draft-results.html',
	        controller: 'DraftResultsController',
	        resolve: {
   				postPromise: ['rankings', function(rankings){
      				return rankings.getAll();
    			}]
    		}	       
	    })
	    .state('draft-retro', {
	        url: '/posts/draft-retro',
	        templateUrl: '/pages/draft/draft-retro/draft-retro.html',
	        controller: 'DraftRetroController'
	    })
	    .state('finals-preview', {
	        url: '/posts/finals-preview',
	        templateUrl: '/pages/finals-preview.html',
	        
	    })
	    .state('not-so-fast', {
	        url: '/posts/not-so-fast',
	        templateUrl: '/pages/not-so-fast.html',
	        
	    })
	    .state('f-clevland', {
	        url: '/posts/f-clevland',
	        templateUrl: '/pages/f-clevland.html',
	        
	    })
	    .state('power-of-veto', {
	        url: '/posts/power-of-veto',
	        templateUrl: '/pages/power-of-veto.html',
	        controller: 'PostsCtrl'
	    })
	    .state('rd2-gm7', {
	        url: '/posts/rd2-gm7',
	        templateUrl: '/pages/rd2-gm7.html',
	        
	    })
	    .state('the-day-i-said-what-if', {
	        url: '/posts/the-day-i-said-what-if',
	        templateUrl: '/pages/the-day-i-said-what-if.html',
	        
	    });


	  $urlRouterProvider.otherwise('home');
	}]);

})();

