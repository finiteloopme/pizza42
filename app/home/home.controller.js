(function () {

  'use strict';

  angular
    .module('app')
    .controller('HomeController', homeController);

  homeController.$inject = ['authService'];

  function homeController(authService) {

    var vm = this;
    vm.auth = authService;

    var pizzas = [
      {
        name: 'Pizza1',
        description: 'Description1',
        price: 1
      },
      {
        name: 'Pizza2',
        description: 'Description2',
        price: 2
      },
      {
        name: 'Pizza3',
        description: 'Description3',
        price: 3
      },
      {
        name: 'Pizza4',
        description: 'Description4',
        price: 4
      },
      {
        name: 'Pizza5',
        description: 'Description5',
        price: 5
      },
      {
        name: 'Pizza6',
        description: 'Description6',
        price: 6
      },
      {
        name: 'Pizza7',
        description: 'Description7',
        price: 7
      },
      {
        name: 'Pizza8',
        description: 'Description8',
        price: 8
      }
    ];
  }

})();