'use strict';

describe('Controller: EquiposCtrl', function () {

  // load the controller's module
  beforeEach(module('PCMAdministradorApp'));

  var EquiposCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EquiposCtrl = $controller('EquiposCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
