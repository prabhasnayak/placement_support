'use strict';

angular.module('collegeApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.companies = [];

    $scope.addCompany = function() {
      if($scope.newCompany === '') {
        return;
      }
      $http.post('/api/companies', { name: $scope.newCompany });
      $scope.newCompany = '';
      $scope.getCompanies();
    };

    $scope.deleteCompany = function(company) {
      $http.delete('/api/companies/' + company._id);
      $scope.getCompanies();
    };

    $scope.getCompanies = function() {
      $http.get('/api/companies').success(function(companies) {
        $scope.companies = companies;
      });
    };

    $scope.getCompanies();
  });
