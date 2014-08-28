'use strict';
(function(){
  window.managementApp.controller('ProjectsCtrl', function ($scope) {
      $scope.projectsList = projectsList;

      $scope.displayTeamLocation = function(members){
        var teamLocationsArray = [];
        for (var i = 0; i < members.length; i++) {
          if(teamLocationsArray.indexOf(members[i].location) !== 0){
            teamLocationsArray.push(members[i].location);
          }
        }
        var tLocations = teamLocationsArray.toString();
        var teamLocations = tLocations.split(',').join(' - ');
        return teamLocations;
      };

      $scope.displayTeamSize = function(members){
        return members.length;
      };

      $scope.selectProject = function(project){
        $scope.selectedProject = project;
      };

    });

  var projectsList = [
    {
      id : 123,
      code : 'VPN002',
      clientName : 'Project Name',
      clientLocation : 'New York, NY',
      clientSector: 'Healthcare',
      clientWebsite : 'www.client.com',
      clientContactInfo : [
        {
          name : 'Jack Smith',
          skype : 'jacksmith01',
          phone : '+1 234 234-232423',
          email: 'jack.smith@client.com'
        }
      ],
      salesPartner : 'John Doe',
      solutionsManager : 'Jorge Rodriguez',
      teamMembers: [
        {
          name : 'Jose Perez',
          area : 'development',
          position : '.net Developer',
          location : 'Rosario (AR)'
        },
        {
          name : 'Juan Garcia',
          area : 'QA',
          position : 'Automation',
          location : 'Montevideo (UY)'
        }
      ],
      projectStatus: 'Red',
      startDate: 'Aug 12, 2013',
      endDate: 'unknown'
    },
    {
      id : 1563,
      code : 'VPA023',
      clientName : 'Project Name',
      clientLocation : 'Los Angeles, CA',
      clientSector: 'Retailer',
      clientWebsite : 'www.retailers.com',
      clientContactInfo : [
        {
          name : 'Kevin Williams',
          skype : 'kevwilliams',
          phone : '+1 098 435-657655',
          email: 'kevin.williams@client.com'
        },
        {
          name : 'John Jackson',
          skype : 'jjson',
          phone : '+1 098 435-657655',
          email: 'john.jackson@client.com'
        }
      ],
      salesPartner : 'John Doe',
      solutionsManager : 'Jorge Rodriguez',
      teamMembers: [
        {
          name : 'Jose Perez',
          area : 'dev',
          position : 'PHP Developer',
          location : 'Buenos Aires (AR)'
        },
        {
          name : 'Juan Garcia',
          area : 'dev',
          position : 'FrontEnd Developer',
          location: 'Buenos Aires (AR)'
        },
        {
          name : 'Juan Garcia',
          area : 'QA',
          position : 'Tester',
          location: 'Buenos Aires (AR)'
        }
      ],
      projectStatus: 'Green',
      startDate: 'Aug 12, 2013',
      endDate: 'unknown'
    }
  ];
})();
