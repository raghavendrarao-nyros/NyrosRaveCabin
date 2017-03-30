// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require angular
//= require angular-ui-router
//= require angular-rails-templates
//= require angular-ui-bootstrap
//= require_self
//= require_tree ../templates


var app = angular.module('rails-task-list', [
 'ui.router',
 'templates'
]);
app.config([
 '$stateProvider', 
 '$urlRouterProvider', 
 '$locationProvider', 
 function($stateProvider, $urlRouterProvider, $locationProvider){
     $stateProvider.state('tasks', {
          url: '/',templateUrl: 'tasks.html',
          controller: 'TaskCtrl'
      }).state('tasks_new',{
      	  url: '/new',templateUrl: 'new.html',
          controller: 'TaskNewCtrl'	
      });
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode({
       enabled:true,
       requireBase: false
     });
 }]);


app.controller('TaskCtrl', [
 '$scope',
 '$http',
 function($scope, $http){
     $scope.taks = [];
     $http.get('/api/v1/tasks').then(function(res){
         console.log(res.data);
         $scope.tasks = res.data;
     });
}]);

app.controller('TaskNewCtrl', [
 '$scope',
 '$http',
 function($scope){
     $scope.raghu = ["nyros","nyros","nyros","nyros","nyros","nyros","nyros","nyros","nyros","nyros"];
     
}]);