'use strict';
(function(){
  window.managementApp.controller('EmployeesCtrl', function ($scope) {
      
        /*$http.get('data/employees.json').success(function(data) {
          $scope.employeesList = data;
          console.log(data);
        }).error(function(error) {
          console.log(error);
        });*/

        $scope.employeesList = employeesList;

        $scope.displayCurrentProjects = function(currentproject){
          var currentProjects = '';
          for (var i = 0; i < currentproject.length; i++) {
            currentProjects += currentproject[i].projectName;
            if(i < currentproject.length-1){
              currentProjects += ' - ';
            }
          }
          return currentProjects;
        };

        $scope.updateEmployee = function(){
          $scope.employeesList.push($scope.employee);
        };

        $scope.selectEmployee = function(employee){
          $scope.selectedEmployee = employee;
        };

        $scope.removeEmployee = function(employee){
          console.log(employee);
        };

      });

  var employeesList = [
      {
        id: 1,
        name: 'Juan',
        lastname: 'Perez',
        location : 'Rosario',
        country: 'AR',
        area: 'Development',
        seniority: 'Referent',
        picture: 'images/yeoman.png',
        skills: [
          {
            skillname: 'CSS',
            level : 'advanced'
          },
          {
            skillname : 'HTML',
            level : 'advanced'
          }
        ],
        skype: 'juan.perez',
        email: 'jperez@mail.com',
        education: [
          {
            title : 'Ingeniero en Sistemas',
            level: 'universitario',
            school : 'Universidad Nacional de Rosario',
            status : 'Completed'
          },
          {
            title : 'Analista de sistemas',
            level : 'terciario',
            school : 'Universidad Nacional de Rosario',
            status : 'Completed'
          }
        ],
        currentProjects : [
          {
            projectName: 'Cool project',
            role: 'Team Lead',
            startDate: 'Aug, 21 2010',
            endDate: 'Not defined',
            overallStatus : 'Happy with the project'
          },
          {
            projectName: 'Not so cool project',
            role: 'Developer',
            startDate: 'Aug, 21 2010',
            endDate: 'Not defined',
            overallStatus : 'Asking project change'
          }
        ],
        careerHistory : [
          {
            projectName: 'Cool project',
            role: 'Team Lead',
            startDate: 'Aug, 21 2010',
            endDate: 'Not defined',
            overallStatus : 'Happy with the project'
          },
          {
            projectName: 'Not so cool project',
            role: 'Developer',
            startDate: 'Aug, 21 2010',
            endDate: 'Not defined',
            overallStatus : 'Asking project change'
          }
        ],
        travelInfo: [
          {
            available: false,
            documentName: 'Passport',
            documentExpiration: 'no'
          },
          {
            available: false,
            documentName: 'US Visa',
            documentExpiration: 'no'
          }
        ]
      },
      {
        id: 2,
        name: 'Roberto',
        lastname: 'Garcia',
        location : 'Montevideo',
        country: 'UY',
        area: 'Development',
        seniority: 'Sr level 1',
        picture: 'images/yeoman.png',
        skills: [
          {
            skillname: 'CSS',
            level : 'advanced'
          },
          {
            skillname : 'HTML',
            level : 'advanced'
          }
        ],
        skype: 'juan.perez',
        email: 'rgarcia@email.com',
        education: [
          {
            title : 'Ingeniero en Sistemas',
            level: 'universitario',
            school : 'Universidad Nacional de Rosario',
            status : 'Completed'
          }
        ],
        currentProjects : [
          {
            projectName: 'Bench',
            role: 'Bench',
            startDate: 'Aug, 21 2010',
            endDate: 'Not defined',
            overallStatus : ''
          }
        ],
        careerHistory : [
          {
            projectName: 'Cool project',
            role: 'Team Lead',
            startDate: 'Aug, 21 2010',
            endDate: 'Not defined',
            overallStatus : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat lobortis pharetra. Aenean accumsan justo in risus ullamcorper, et aliquet nulla imperdiet. Etiam vestibulum hendrerit aliquet. Aliquam feugiat tristique elit, ut laoreet nunc sollicitudin sit amet.'
          },
          {
            projectName: 'Not so cool project',
            role: 'Developer',
            startDate: 'Aug, 21 2010',
            endDate: 'Not defined',
            overallStatus : 'Cras ullamcorper arcu a erat facilisis, at sollicitudin ex sollicitudin. Aliquam sagittis augue id metus finibus, at fringilla nibh dignissim.'
          }
        ],
        travelInfo: [
          {
            available: true,
            documentName: 'Passport',
            documentExpiration: 'Aug 2018'
          },
          {
            available: false,
            documentName: 'US Visa',
            documentExpiration: 'no'
          }
        ]
      },
      {
        id: 3,
        name: 'Pedro',
        lastname: 'Rodriguez',
        location : 'Medellin',
        country: 'CO',
        area: 'Quality',
        seniority: 'Ssr level 2',
        picture: 'images/yeoman.png',
        skills: [
          {
            skillname: 'CSS',
            level : 'advanced'
          },
          {
            skillname : 'HTML',
            level : 'advanced'
          }
        ],
        skype: 'juan.perez',
        email: 'prodriguez@gmail.com',
        education: [
          {
            title : 'Ingeniero en Sistemas',
            level: 'universitario',
            school : 'Universidad Abierta Interamericana',
            status : 'Completed'
          }
        ],
        currentProjects : [
          {
            projectName: 'New Project',
            role: 'QA',
            startDate: 'Aug, 21 2010',
            endDate: 'Not defined',
            overallStatus : ''
          }
        ],
        careerHistory : [
          {
            projectName: 'Cool project',
            role: 'Team Lead',
            startDate: 'Aug, 21 2010',
            endDate: 'Not defined',
            overallStatus : 'Happy with the project'
          },
          {
            projectName: 'Not so cool project',
            role: 'Developer',
            startDate: 'Aug, 21 2010',
            endDate: 'Not defined',
            overallStatus : 'Asking project change'
          }
        ],
        travelInfo: [
          {
            available: true,
            documentName: 'Passport',
            documentExpiration: 'Aug 2018'
          },
          {
            available: true,
            documentName: 'US Visa',
            documentExpiration: 'Jan 2016'
          }
        ]
      }
    ];
})();
