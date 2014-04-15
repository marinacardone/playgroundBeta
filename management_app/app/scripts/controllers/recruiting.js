'use strict';

angular.module('managementApp')
  .controller('recruiting', function ($scope) {
    $scope.employeesList = [
    	{
    		id: 1,
    		name: "Juan",
    		lastname: "Perez",
    		location : "Rosario",
    		country: "AR",
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
    		availability: 0,
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
    		location : "Montevideo",
    		country: "UY",
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
    		availability: 100,
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
            location : "Medellin",
            country: "CO",
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
            availability: 50,
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
        }
    ];
  });
