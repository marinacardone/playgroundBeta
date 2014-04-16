'use strict';

angular.module('managementApp')
	.service('employees', function(){
		this.query = function(){
			return [
    	{
    		id: 1,
    		name: "Juan",
    		lastname: "Perez",
    		location : {
                city: "Rosario",
                country: "Argentina",
                countryCode: "AR",
            },
    		area: "Development",
    		seniority: "Referent",
    		skills: [
    			{
	    			skillname: "CSS",
	    			level : "advanced"
    			},
    			{
    				skillname : "HTML",
    				level : "advanced"
    			}
    		],
    		skype: "juan.perez",
    		education: [
    			{
    				title : "Ingeniero en Sistemas",
    				level: "universitario",
    				school : "Universidad Nacional de Rosario",
    				status : "Completed"
    			},
    			{
    				title : "Analista de sistemas",
    				level : "terciario",
    				school : "Universidad Nacional de Rosario",
    				status : "Copmleted"
    			}
    		],
    		availability: "None",
    		currentProjects : [
    			{
    				projectName: "Cool project",
    				role: "Team Lead",
    				startDate: "Aug, 21 2010",
    				endDate: "Not defined",
    				overallStatus : "Happy with the project"
    			},
    			{
    				projectName: "Not so cool project",
    				role: "Developer",
    				startDate: "Aug, 21 2010",
    				endDate: "Not defined",
    				overallStatus : "Asking project change"
    			}
    		],
    		careerHistory : [
    			{
    				projectName: "Cool project",
    				role: "Team Lead",
    				startDate: "Aug, 21 2010",
    				endDate: "Not defined",
    				overallStatus : "Happy with the project"
    			},
    			{
    				projectName: "Not so cool project",
    				role: "Developer",
    				startDate: "Aug, 21 2010",
    				endDate: "Not defined",
    				overallStatus : "Asking project change"
    			}
    		]
    	},
    	{
    		id: 2,
    		name: "Roberto",
    		lastname: "Garcia",
    		location : {
                city: "Montevideo",
                country: "Uruguay",
                countryCode: "UY",
            },
    		area: "Development",
    		seniority: "Sr level 1",
    		skills: [
    			{
	    			skillname: "CSS",
	    			level : "advanced"
    			},
    			{
    				skillname : "HTML",
    				level : "advanced"
    			}
    		],
    		skype: "juan.perez",
    		education: [
    			{
    				title : "Ingeniero en Sistemas",
    				level: "universitario",
    				school : "Universidad Nacional de Rosario",
    				status : "Completed"
    			},
    			{
    				title : "Analista de sistemas",
    				level : "terciario",
    				school : "Universidad Nacional de Rosario",
    				status : "Copmleted"
    			}
    		],
    		availability: "Full",
    		currentProjects : [
    			{
    				projectName: "Bench",
    				role: "Bench",
    				startDate: "Aug, 21 2010",
    				endDate: "Not defined",
    				overallStatus : ""
    			}
    		],
    		careerHistory : [
    			{
    				projectName: "Cool project",
    				role: "Team Lead",
    				startDate: "Aug, 21 2010",
    				endDate: "Not defined",
    				overallStatus : "Happy with the project"
    			},
    			{
    				projectName: "Not so cool project",
    				role: "Developer",
    				startDate: "Aug, 21 2010",
    				endDate: "Not defined",
    				overallStatus : "Asking project change"
    			}
    		]
    	},
        {
            id: 3,
            name: "Pedro",
            lastname: "Rodriguez",
            location : {
                city: "Medellín",
                country: "Colombia",
                countryCode: "CO",
            },
            area: "Quality",
            seniority: "Ssr level 2",
            skills: [
                {
                    skillname: "CSS",
                    level : "advanced"
                },
                {
                    skillname : "HTML",
                    level : "advanced"
                }
            ],
            skype: "juan.perez",
            education: [
                {
                    title : "Ingeniero en Sistemas",
                    level: "universitario",
                    school : "Universidad Nacional de Rosario",
                    status : "Completed"
                },
                {
                    title : "Analista de sistemas",
                    level : "terciario",
                    school : "Universidad Nacional de Rosario",
                    status : "Completed"
                }
            ],
            availability: "Partial",
            currentProjects : [
                {
                    projectName: "New Project",
                    role: "QA",
                    startDate: "Aug, 21 2010",
                    endDate: "Not defined",
                    overallStatus : ""
                }
            ],
            careerHistory : [
                {
                    projectName: "Cool project",
                    role: "Team Lead",
                    startDate: "Aug, 21 2010",
                    endDate: "Not defined",
                    overallStatus : "Happy with the project"
                },
                {
                    projectName: "Not so cool project",
                    role: "Developer",
                    startDate: "Aug, 21 2010",
                    endDate: "Not defined",
                    overallStatus : "Asking project change"
                }
            ]
        },
        {
            id: 4,
            name: "Juana",
            lastname: "Díaz",
            location : {
                city: "Buenos Aires",
                country: "Argentina",
                countryCode: "AR",
            },
            area: "RR HH",
            seniority: null,
            skills: [
                {
                    skillname: "Recruiting",
                    level : "advanced"
                },
                {
                    skillname : "People Care",
                    level : "advanced"
                }
            ],
            skype: "juana.diaz",
            education: [
                {
                    title : "Ingeniero en Sistemas",
                    level: "universitario",
                    school : "Universidad Nacional de Rosario",
                    status : "Completed"
                },
                {
                    title : "Analista de sistemas",
                    level : "terciario",
                    school : "Universidad Nacional de Rosario",
                    status : "Completed"
                }
            ],
            availability: "Full",
            currentProjects : [
                {
                    projectName: "Recruiting",
                    role: null,
                    startDate: null,
                    endDate: null,
                    overallStatus : ""
                }
            ],
            careerHistory : [
                {
                    projectName: "Cool project",
                    role: "Team Lead",
                    startDate: "Aug, 21 2010",
                    endDate: "Not defined",
                    overallStatus : "Happy with the project"
                },
                {
                    projectName: "Not so cool project",
                    role: "Developer",
                    startDate: "Aug, 21 2010",
                    endDate: "Not defined",
                    overallStatus : "Asking project change"
                }
            ]
        }
    ];
		}


	});