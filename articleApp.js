var app = angular.module('blogApp', [])

app.directive('minlength', function() {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$validators.minlength = function(modelValue, viewValue) {
          if (ctrl.$isEmpty(modelValue)) {
            // consider empty models to be valid
            return true;
          }
  
          if (viewValue.length >= attrs.minlength) {
            // it is valid
            return true;
          }
  
          // it is invalid
          return false;
        };
      }
    };
  });

app.factory('blogFactory', function(){
    var articlesList = [
        {
            title: 'title1',
            content: 'content1 sfdsfsf sdf sdf'
        }, {
            title: 'title2',
            content: 'content2 asfdsafsdfasf asd adsfsdf'
        }, {
            title: 'title3',
            content: 'content3 asfsdf;  sk;flkwr'
        }, {
            title: 'title4',
            content: 'content4 sfdsfsf sdf sdf'
        }];
    return {
        getArticles: function getArticles() {
             return articlesList;
        },
        addArticle: function addArticle(article){
            articlesList.push(article);
        },
        removeArticle: function removeArticle(text){
            articlesList.splice(articlesList.indexOf(text), 1)
    	}
    };
});

app.controller('blogController', ['$scope', 'blogFactory', function ($scope, blogFactory) {
    $scope.articles = blogFactory.getArticles()
    $scope.master = {title: '', content: ''};
    $scope.article = {};

    $scope.addArticle = function (article, form) {
        // if (!article.title || !article.content || article.content < 20) {
        //     return false
        // }
        blogFactory.addArticle(angular.copy(article));
        $scope.article = angular.copy($scope.master);
        form.$setPristine();
        form.$setUntouched();
    };
}]);

