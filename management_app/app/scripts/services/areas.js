'use strict';

angular.module('managementApp')
	.service('areas', function(){
		this.query = function(){
			return [
                {
                    name: "All"
                },
                {
                    name: "Development"
                },
                {
                    name: "Quality"
                },
                {
                    name: "RR HH"
                },
                {
                    name: "Management"
                },
                {
                    name: "Finances"
                }
            ]
        }
	});