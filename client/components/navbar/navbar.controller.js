'use strict';

angular.module('collegeApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.menu = [
      {
        'title': 'Home',
        'link': '/',
        'role': 'user'
      },
      {
        'title': 'Admins',
        'link': '/admins',
        'role': 'admin'
      },
      {
        'title': 'Add College',
        'link': '/add_college',
        'role': 'admin'
      }
    ];

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });