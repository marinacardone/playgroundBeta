'use strict';

angular.module('managementApp')
    .service('locations', function(){
        this.query = function() {
            return [
                {
                    city: "All",
                    country: null,
                    countrycode: null
                },
                {
                    city: "All Argentina",
                    country: "Argentina",
                    countrycode: "AR"
                },
                {
                   city: "Buenos Aires",
                   country: "Argentina",
                   countrycode: "AR"
                },
                {
                   city: "Rosario",
                   country: "Argentina",
                   countrycode: "AR"
                },
                {
                   city: "Paraná",
                   country: "Argentina",
                   countrycode: "AR"
                },
                {
                   city: "Montevideo",
                   country: "Uruguay",
                   countrycode: "UY"
                },
                {
                   city: "Medellín",
                   country: "Colombia",
                   countrycode: "CO"
                },
                {
                   city: "Seattle",
                   country: "USA",
                   countrycode: "US"
                }
            ]
        }
    });