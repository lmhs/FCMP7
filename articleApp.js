var app = angular.module('blogApp', [])

app.factory("blogFactory", function(){
    var articlesList = [
        {
            title: "title1",
            content: "content1 sfdsfsf sdf sdf"
        }, {
            title: "title2",
            content: "content2 asfdsafsdfasf asd adsfsdf"
        }, {
            title: "title3",
            content: "content3 asfsdf;  sk;flkwr"
        }, {
            title: "title4",
            content: "content4 sfdsfsf sdf sdf"
        }];
    return {
        getArticles: function getArticles() {
             return articlesList;
        },
        addArticle: function addArticle(title, content){
            const article = { title, content };
            articlesList.push(article);
        },
        removeArticle: function removeArticle(text){
            articlesList.splice(articlesList.indexOf(text), 1)
    	}
    };
});



app.controller('blogController', ['$scope', 'blogFactory', function ($scope, blogFactory) {
    $scope.articles = blogFactory.getArticles()
    $scope.newArticleName = '';
    $scope.newArticleTitle = '';

    $scope.addArticle = function () {
        blogFactory.addArticle($scope.newArticleName, $scope.newArticleTitle)
        $scope.newArticleName = '';
        $scope.newArticleTitle = '';
    };

    $scope.removeArticle = function (text) {
        blogFactory.removeArticle(text);
    }
}]);

