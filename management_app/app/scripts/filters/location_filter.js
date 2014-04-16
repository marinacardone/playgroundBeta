'use strict';

angular.module('managementApp')
	.filter('location', function (){
		return function (employeesList, filterBy){
			if(filterBy.location.city === 'All'){
				return employeesList;
			};

			if(filterBy.location.city === 'All Argentina'){
				return employeesList.filter( function (element, index, array){
					return element.location.countryCode === "AR"
				});
			};

			return employeesList.filter( function (element, index, array){
				return element.location.city === filterBy.location.city
			});
		}
	});