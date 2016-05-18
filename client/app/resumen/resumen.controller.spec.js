'use strict';

describe('Controller: ResumenCtrl', function () {

  // load the controller's module
  beforeEach(module('pcmadministradorApp'));

  var ResumenCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ResumenCtrl = $controller('ResumenCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
