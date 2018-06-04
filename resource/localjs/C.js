var menuApp2 = angular.module('menuApp2',[]);
menuApp2.controller('menuCtrl2', ['$scope','$compile','$sce',function($scope,$compile,$sce){

    var html = '<label>name:</label><input type="text" ng-model="firstName2"><br><span>hello,{{firstName2}}</span>';
    console.log("menuApp2--"+html);
    //var html_ = angular.element(html);
    //var hh = $compile(html_)($scope);
    $scope.menu_html2 = $sce.trustAsHtml(html);
   // angular.element(document.getElementById("menu_html2")).append(hh);
    $scope.$digest();
    /* angular.element(document.getElementById("menuApp")).append(hh);
   
    $scope.$watch(html_,function(oldValue,newValue){
        if(oldValue !== newValue){
            console.log("值已经变化--"+oldValue+"--"+newValue);
        }else{
            console.log("值未变化--"+oldValue+"--"+newValue);
        }
    },true); */
   /*  $scope.$apply(function(){
        
        angular.element(document.getElementById("menuApp")).append(hh);
    }); */
    
   // $scope.$digest()
    /*  var html = '<input type="text" ng-model="firstName">' + '<br><span>{{fistName}}</span>';
    var hh = $compile(html)($scope);
    $scope.menu_html = hh; *///html;//'<h1 style="color: orange">wednesday</h1>';
}]);
menuApp2.filter('to_trusted',['$sce',function($sce){
    return function(text){
        return $sce.trustAsHtml(text);
    }
}]);
/* 
menuApp.directive("menuHtml",function($compile){
    var html = '<input type="text" ng-model="firstName">' + '<br><span>{{fistName}}</span>';
    return{
        link:function(scope, element,attrs){
            elem.html(($compile(scope.compile)(scope)));
        }
    }
});  */

angular.bootstrap(document.getElementById("menuApp2"), ['menuApp2']);