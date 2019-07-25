module.controller("httpCtrl",httpCtrl)

function httpCtrl($scope,dataService,urlConst, httpService){
    $scope.data = dataService.data;
    $scope.url = urlConst.url;
    $scope.id = ""

    $scope.getDataByID = function(id) {
        if(id !== ""){
            httpService.getByID(id).then(function(data){
                $scope.data = data;
            });
        }else{
            alert("put an id")
        }
     
    }   
    $scope.getAllData = function() {
        httpService.getAll().then(function(data){
          $scope.data = data;
         });
      } 
    
}