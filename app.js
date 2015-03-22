(function() {
	var app = angular.module('app', []);

	app.controller('NavigationController', function() {
		this.pages = pages;
		this.current = 0;
		this.setPage = function(id) {
			this.current = id;
		};
		this.isActive = function(id) {
			return this.current === id;
		};
	});

	app.controller('DisplayController', function() {
		this.displays = designs;
	});


	// This should really be loaded from a DB:
	var pages = [
		{
			id: 0,
			name: 'Home',
			link: '#',
		},
		{
			id: 1,
			name: 'Designs',
			link: '#Designs',
		},
		{
			id: 2,
			name: 'Contact',
			link: 'mailto:lb.limitbreaker@gmail.com',
		},
	]

	var designs = [
		{
			id: 0,
			name: 'Vikings Singlet',
			description: 'Created for UWDBC Vikings.',
			designer: 'Jane Wu',
			year: '2014',
			images: [
				"Resources/uwdbc_vikings_small.png",
			],
		},
		{
			id: 1,
			name: 'PA Singlet',
			description: 'Created for Paddlers Anonymous.',
			designer: 'Jane Wu',
			year: '2015',
			images: [
				"Resources/pa_small.png",	
			],
		},
	]
})();
