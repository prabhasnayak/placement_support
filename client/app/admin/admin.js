'use strict';

angular.module('collegeApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/admins', {
        templateUrl: 'app/admin/admin.html',
        controller: 'AdminCtrl'
      })
      .when('/add_college', {
        templateUrl: 'app/admin/add_college.html',
        controller: 'AdminCtrl'
      });
  });