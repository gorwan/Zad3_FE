AppOne = angular.module('AppOne', ['ui.router']);// rejestrujemy aplikacje pod nazwa ``AppOne``AppOne.controller('NameController', ['$scope','$filter', function($scope,$filter){  $scope.name = 'Piotr';  var orderBy = $filter('orderBy');  $scope.Oceny =[{ocena: 5, przedmiot: "Bazy danych", event:"wejsciowka " },    {ocena: 4, przedmiot: "Analiza", event:"sprawdzian " },    {ocena: 3, przedmiot: "Sterowniki", event:"wejsciowka " },    {ocena: 2, przedmiot: "Systemy", event:"wejsciowka " },    {ocena: 2, przedmiot: "Chemia", event:"sprawdzian " },    {ocena: 5, przedmiot: "Fizyka", event:"egzamin " },    {ocena: 5, przedmiot: "Matematyka", event:"wejsciowka " },    {ocena: 4, przedmiot: "Robotyka", event:"wejsciowka" },    {ocena: 4, przedmiot: "Planowanie eksperymentu", event:"sprawdzian " },    {ocena: 3, przedmiot: "Programowanie", event:"wejsciowka " },    {ocena: 2, przedmiot: "Systemy numeryczne", event:"wejsciowka " },    {ocena: 5, przedmiot: "Sieci neuronowe", event:"sprawdzian " },    {ocena: 2, przedmiot: "Ergonomia", event:"sprawdzian " },    {ocena: 4, przedmiot: "Automayzacja procesow", event:"egzamin " },    {ocena: 5, przedmiot: "Pomiary przemyslowe", event:"sprawdzian " },    {ocena: 4, przedmiot: "Elektronika", event:"wejsciowka " },    {ocena: 4, przedmiot: "Teoria sterowania", event:"wejsciowka " },    {ocena: 5, przedmiot: "Projektowanie filtrow", event:"egzamin " },    {ocena: 5, przedmiot: "Metody Si", event:"wejsciowka " },    {ocena: 3, przedmiot: "Informatyka", event:"sprawdzian " },    {ocena: 2, przedmiot: "Sygnaly", event:"wejsciowka " },    {ocena: 3, przedmiot: "Mechanika", event:"wejsciowka " },    {ocena: 3, przedmiot: "Systemy zasilania", event:"egzamin " },    {ocena: 3, przedmiot: "Systemy bezpieczenstwa", event:"sprawdzian " },    {ocena: 2, przedmiot: "Mikroprocesory", event:"sprawdzian " },    {ocena: 5, przedmiot: "LabView", event:"wejsciowka " }];$scope.order = function(predicate, reverse) {  $scope.Oceny = orderBy($scope.Oceny, predicate, reverse);};}]);AppOne.config(function ($stateProvider,$urlRouterProvider) {  $urlRouterProvider.otherwise("/tab");  $stateProvider  .state('name',{    url: "/name",    templateUrl: "src/ptrng.tmplt.html"  })  .state('table',{    url: "/table",    templateUrl: "src/tab.tmplt.html"  })});  AppOne.directive('ptrngName',function(){    return {      restrict: 'E',      template: 'Your name is {{name}}'    };  });