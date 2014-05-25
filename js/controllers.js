angular.module('technion')

.controller('SearchCtrl', function($scope, Youtube) {
  $scope.videos = [];

  $scope.search = function() {
    $scope.isLoading = true;

    Youtube.searchVideos($scope.keyword).then(function(data) {
      $scope.videos = data;
      $scope.isLoading = false;
    });
  };
})

.controller('VideoCtrl', function($scope, $stateParams, Youtube) {
  $scope.isLoading = true;
  Youtube.getVideo($stateParams.id).then(function(data) {
    $scope.video = data;
    $scope.isLoading = false;
  });
});