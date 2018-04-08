var app = angular.module('blogApp', [])

app.directive('minlen', function() {
    return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
        ctrl.$validators.minlen = function(modelValue, viewValue) {
            if (ctrl.$isEmpty(modelValue)) {
                return true;
            }

            if (viewValue.length >= attrs.minlen) {
                return true;
            }

            return false;
        };
        }
    };
});

app.factory('blogFactory', function(){
    var articlesList = [
        {
            id: 1,
            title: 'title1',
            content: 'content1 sfdsfsf sdf sdf'
        }, {
            id: 2,
            title: 'title2',
            content: 'content2 asfdsafsdfasf asd adsfsdf'
        }, {
            id: 3,
            title: 'title3',
            content: 'content3 asfsdf;  sk;flkwr'
        }, {
            id: 4,
            title: 'title4',
            content: 'content4 sfdsfsf sdf sdf'
        }];
    return {
        getArticles: function getArticles() {
             return articlesList;
        },
        addArticle: function addArticle(article) {
            articlesList.push(article);
        },
        editArticle: function editArticle(article) {
            const index = articlesList.findIndex(function(item) {
                return item.id === article.id
            });
            articlesList.splice(index, 1, article);
        },
        removeArticle: function removeArticle(text){
            articlesList.splice(articlesList.indexOf(text), 1)
    	}
    };
});

app.controller('blogController', ['$scope', 'blogFactory', function ($scope, blogFactory) {
    $scope.articles = blogFactory.getArticles();
    $scope.editing = false;
    $scope.formVisible = false;
    $scope.article = {};

    $scope.addArticle = function (article, form) {
        if ($scope.editing === true) {
            blogFactory.editArticle(angular.copy(article));
        } else {
            blogFactory.addArticle(angular.copy(article, {id: $scope.articles.length}));
        }
    };

    $scope.showForm = function () {
        $scope.formVisible = true;
    }

    $scope.editArticle = function (article) {
        $scope.editing = true;
        $scope.article = angular.copy(article);
    }
}]);

