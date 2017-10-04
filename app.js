angular
.module('portfolio', [
  'ui.router',
  'ngResource'
])
.config([
  '$stateProvider',
  Router
])


function Router($stateProvider) {
  $stateProvider
  // .state('Home', {
  //   url: '/',
  //   templateUrl: 'index.html'
  // })
  .state('About', {
    url: '/',
    templateUrl: './views/about.html'
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
}

$urlRouterProvider.otherwise('/')
$locationProvider.html5Mode(true)
