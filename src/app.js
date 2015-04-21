(function (angular) {
    'use strict';
    angular.module('baasicArticleHelloWorld', [
        "baasic.api",
        "baasic.article"
    ])
    .config(['baasicAppProvider',
        function (baasicAppProvider) {

            baasicAppProvider.create('Article-Hello-World', {
                apiRootUrl: 'api.baasic.local',
                apiVersion: 'beta'
            });

    }])
    .controller('MainController', ['$scope', 'baasicArticleService',
        function($scope, articleService) {
            $scope.articles = [];

            var apiParams = {};
            apiParams.embed = "Tags";
            apiParams.statuses = 'published';
            articleService.find(apiParams)
                .success(function (collection) {
                    $scope.articles = collection.item;
                })
                .error(function (data, status, headers, config) {
                    alert({
                        data: data,
                        status: status,
                        headers: headers,
                        config: config
                    }.ToString());
                });
        }]);
}(angular));