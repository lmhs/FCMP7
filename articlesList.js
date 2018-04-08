function ArticlesListController($scope, $timeout) {
  var ctrl = this;

  ctrl.editArticle = function (item) {
    // ctrl.article = angular.copy(item);
    
    ctrl.editing = true;
    ctrl.article = angular.copy(item);
  }
}

angular.module('blogApp').component('articlesList', {
  templateUrl: '/articlesList.html',
  controller: ArticlesListController,
  bindings: {
    articles: '=',
    article: '=',
    editing: '='
  }
});