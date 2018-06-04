var menuApp = angular.module('menuApp',[]);
menuApp.controller('menuCtrl', function($scope,$compile,$sce) {
    var html_ = $scope.menu_html;
    var html = '<input type="text" ng-model="firstName">' + '<br><span>{{firstName}}</span>';
    //var hh = $compile(html)($scope);
    $scope.menu_html = $sce.trustAsHtml(html);
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
});
/* menuApp.filter('to_trusted',['$sce',function($sce){
    return function(text){
        return $sce.trustAsHtml(text);
    }
}]); */
/* 
menuApp.directive("menuHtml",function($compile){
    var html = '<input type="text" ng-model="firstName">' + '<br><span>{{fistName}}</span>';
    return{
        link:function(scope, element,attrs){
            elem.html(($compile(scope.compile)(scope)));
        }
    }
});  */
menuApp.directive("dyCompile", ["$compile", function($compile) {  
    return {  
        replace: true,  
        restrict: 'EA',  
        link: function(scope, elm, iAttrs) {  
            var DUMMY_SCOPE = {  
                    $destroy: angular.noop  
                },  
                root = elm,  
                childScope,  
                destroyChildScope = function() {  
                    (childScope || DUMMY_SCOPE).$destroy();  
                };  

            iAttrs.$observe("html", function(html) {  
                if (html) {  
                    destroyChildScope();  
                    childScope = scope.$new(false);  
                    var content = $compile(html)(childScope);  
                    root.replaceWith(content);  
                    root = content;  
                }  

                scope.$on("$destroy", destroyChildScope);  
            });  
        }  
    };  
}]) ;

angular.bootstrap(document.getElementById("menuApp"), ['menuApp']);


