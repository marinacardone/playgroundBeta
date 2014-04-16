'use strict';

angular.module('managementApp')
	.service('projects', function(){
		this.query = function(){
			return [
                {
                    id: 1,
                    code: "VPX-01",
                    name: "Cool Project",
                    client: "Google",
                    partner: "John Doe",
                    sm: "Jake Smith",
                    zone: "Central",
                    staff: [
                        {
                            id: 2,
                            name: "Juan",
                            lastname: "Perez",
                            location : {
                                city: "Rosario",
                                country: "Argentina",
                                countryCode: "AR",
                            },
                            area: "Development",
                            role: "Developer"
                        },
                        {
                            id: 3,
                            name: "Roberto",
                            lastname: "Rodriguez",
                            location : {
                                city: "Rosario",
                                country: "Argentina",
                                countryCode: "AR",
                            },
                            area: "Development",
                            role: "TL"
                        }
                    ]
                },
                {
                    id: 1,
                    code: "VPX-02",
                    name: "New Project",
                    client: "Google",
                    partner: "John Doe",
                    sm: "Jake Smith",
                    zone: "Central",
                    staff: [
                        {
                            id: 2,
                            name: "Juan",
                            lastname: "Perez",
                            location : {
                                city: "Rosario",
                                country: "Argentina",
                                countryCode: "AR",
                            },
                            area: "Development",
                            role: "Developer"
                        },
                        {
                            id: 3,
                            name: "Roberto",
                            lastname: "Rodriguez",
                            location : {
                                city: "Rosario",
                                country: "Argentina",
                                countryCode: "AR",
                            },
                            area: "Development",
                            role: "TL"
                        }
                    ]
                }
            ]
		}
});