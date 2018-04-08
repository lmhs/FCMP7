function ArticleAddController($scope, $timeout) {
  var ctrl = this;
  ctrl.master = {id: '', title: '', content: ''};

  $timeout(function(){
    console.log(ctrl.articles)},
    100);

  ctrl.addArticle = function (article, form) {
    ctrl.onAddArticle(article, form);
    ctrl.article = angular.copy(ctrl.master);
    form.$setPristine();
    form.$setUntouched();
    ctrl.editing = false;
  }
}

angular.module('blogApp').component('articleAdd', {
  templateUrl: '/articleAdd.html',
  controller: ArticleAddController,
  bindings: {
    articles: '=',
    article: '=',
    editing: '=',
    onAddArticle: '&'
  }
});