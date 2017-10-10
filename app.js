angular
.module('portfolio', [
  'ui.router',
  'ngResource'
])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
  Router
])


function Router($stateProvider, $urlRouterProvider, $locationProvider) {

  // $urlRouterProvider.otherwise('About')
  // $locationProvider.html5Mode({
  //   enabled: true,
  //   requireBase: false
  // });
  $locationProvider.html5Mode(true)

  $stateProvider
  // .state('Home', {
  //   url: '/',
  //   templateUrl: 'index.html'
  // })
  .state('About', {
    url: '/about',
    templateUrl: 'views/about.html'
  })
  .state('Projects', {
    url: '/projects',
    templateUrl: 'views/projects.html'
  })
  .state('Resume', {
    url: '/resume',
    templateUrl: 'views/resume.html'
  })
  .state('Contact', {
    url: '/contact',
    templateUrl: 'views/contact.html'
  })
  $urlRouterProvider.otherwise('/about')
  $locationProvider.html5Mode(true)
}
