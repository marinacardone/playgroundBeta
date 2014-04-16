'use strict';

angular.module('managementApp')
	.filter('availability', function(){
		return function (employeesList, filterBy){

			if(filterBy.availability.name === 'All'){
				return employeesList;
			};

			return employeesList.filter( function (element, index, array){
				return element.availability === filterBy.availability.name
			});

		}
	});