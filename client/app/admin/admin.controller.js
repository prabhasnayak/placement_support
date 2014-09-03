'use strict';

angular.module('collegeApp')
  .controller('AdminCtrl', function ($scope, $http, Auth, User) {

    // Use the User $resource to fetch all users
    $scope.users = User.query();
    $scope.isAdmin = Auth.isAdmin();

    $scope.delete = function(user) {
      User.remove({ id: user._id });
      angular.forEach($scope.users, function(u, i) {
        if (u === user) {
          $scope.users.splice(i, 1);
        }
      });
    };

    $scope.addAdmin = function() {
      Auth.createAdmin({
        name: $scope.name,
        email: $scope.email,
        password: 'admin',
        role: 'admin'
      })
      .then( function() {
        $scope.users = User.query();
      })
      .catch( function(err) {
        err = err.data;
      });
    };
  });
