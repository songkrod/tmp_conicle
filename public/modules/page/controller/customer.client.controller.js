angular.module('page').controller('CustomerController', [
	'$scope',
	function ($scope) {
		$scope.clients = {
			"ais" : {
				"color": "#78c400",
				"logo": "public/images/logo-cus-ais.png",
				"image": "public/images/customer.jpg",
				"text": {
					"title": "All-in-One Ondemand",
					"detail": "Develop people anywhere, anytime via web and mobile including Online Courses, Interactive Test, Programs, Assignment, Registration, Notification, Progress Tracking, Discussion board, and also Administration for Content Management, Dashboard and Report"
				}
			},
			"unilever" : {
				"color": "#17375e",
				"logo": "public/images/logo-cus-unilever.png",
				"image": "public/images/customer.jpg",
				"text": {
					"title": "All-in-One Ondemand",
					"detail": "Develop people anywhere, anytime via web and mobile including Online Courses, Interactive Test, Programs, Assignment, Registration, Notification, Progress Tracking, Discussion board, and also Administration for Content Management, Dashboard and Report"
				}
			},
			"pacrim" : {
				"color": "#d90202",
				"logo": "public/images/logo-cus-pacrim.png",
				"image": "public/images/customer.jpg",
				"text": {
					"title": "All-in-One Ondemand",
					"detail": "Develop people anywhere, anytime via web and mobile including Online Courses, Interactive Test, Programs, Assignment, Registration, Notification, Progress Tracking, Discussion board, and also Administration for Content Management, Dashboard and Report"
				}
			},
			"click4clever" : {
				"color": "#00d2a7",
				"logo": "public/images/logo-cus-click4clever.png",
				"image": "public/images/customer.jpg",
				"text": {
					"title": "All-in-One Ondemand",
					"detail": "Develop people anywhere, anytime via web and mobile including Online Courses, Interactive Test, Programs, Assignment, Registration, Notification, Progress Tracking, Discussion board, and also Administration for Content Management, Dashboard and Report"
				}
			}
		}
	}
]);