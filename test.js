describe('myCtrl', function() {
  beforeEach(module('myApp'));
  var $controller;
  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));
  describe('testing', function() {
    it('IS English', function() {
      var $scope = {};
      var controller = $controller('myCtrl', { $scope: $scope });
       expect($scope.obj).toContain({ task_ID: '1', task_name: 'Angular JS'  }); 
    });
    it('IS add', function() {
      var $scope = {};
      var modalInstance;
       modalInstance = {                    // Create a mock object using spies
        close: jasmine.createSpy('modalInstance.close'),
        dismiss: jasmine.createSpy('modalInstance.dismiss'),
        result: {
          then: jasmine.createSpy('modalInstance.result.then')
        }
      }; 
      var controller = $controller('PopupCont', { $scope: $scope ,$uibModalInstance: modalInstance});
      $scope.id="500";
      $scope.name="lenovo";
      //console.log(obj);
      $scope.add_data();

      expect(obj).toContain({ task_ID: '500', task_name: 'lenovo' }) ;
    });
        it('IS removed', function() {
      var $scope = {};
      var controller = $controller('myCtrl', { $scope: $scope});
      $scope.id="1";
      $scope.name="Angular JS";
      //console.log(obj);
      $scope.remove();

      expect($scope.obj).not.toContain({ task_ID: '1', task_name: 'Angular JS' }) ;
    });
  });

});
   
