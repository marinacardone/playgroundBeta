'use strict';

angular.module('managementApp')
	.filter('area', function(){
		return function (employeesList, filterBy){

			if(filterBy.area.name === 'All'){
				return employeesList;
			};

			return employeesList.filter( function (element, index, array){
				return element.area === filterBy.area.name
			});

		}
	});