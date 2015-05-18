Baasic AngularJS Article Module Hello World
============

In order to create a hello world sample based on the Baasic article module you should follow the steps described below:

# Prerequisites

#### Sign up for Baasic account 

Head over to Baasic [registration form](https://dashboard.baasic.com/register) and fill in the required fields to create an account. You will receive an activation e-mail to confirm your registration, after confirmation please navigate to your account dashboard and follow the next step. 

#### Create your application

Account dashboard allows you to manage all of your Baasic applications in one place. To create new application click the [_Add a New App_](https://dashboard.baasic.com/create) on the [account dashboard](https://dashboard.baasic.com) and enter the application name and administrator's account information.

#### Write your hello world article

Navigate to the application dashboard _https://dashboard.baasic.com/apps/your-api-key/_ and use compose article (_https://dashboard.baasic.com/apps/your-api-key/article/add_) screen to add hello world article that we will use in the AngularJS application.

# Create AngularJS application

Create an AngularJS application by using the following code:

```javascript
    angular.module('baasicArticleHelloWorld', [
        "baasic.api",
        "baasic.article"
    ])

```

Note that we will be using only Baasic AngularJS Core and Article SDK to build the hello world application, so you may notice that there are two dependencies defined _baasic.api_ and _baasic.article_ that we need for this app.

# Configure the Baasic application

In order to configure Baasic application we will need a _baasicAppProvider_ injected in the AngularJS application configuration, to do that use the following:

```javascript
   angular.module('baasicArticleHelloWorld').config(['baasicAppProvider',
        function (baasicAppProvider) {

            baasicAppProvider.create('Article-Hello-World', {
                apiRootUrl: 'api.baasic.com',
                apiVersion: 'beta'
            });

    }])
```

# Create Hello World Controller

To fetch the hello world article that we have wrote using the Baasic article dashboard we will need simple controller that will fetch the articles from the Baasic back-end. To do that we will use the following code:

```javascript
     angular.module('baasicArticleHelloWorld').controller('MainController', ['$scope', 'baasicArticleService',
        function($scope, articleService) {
            $scope.articles = [];

            var apiParams = {
                embed: "Tags",
                statuses: 'published'
            };
            articleService.find(apiParams)
                .success(function (collection) {
                    $scope.articles = collection.item;
                });
        }]);
```

# Create Hello World Index.html

To actually display the articles from the back-end we need a mark-up and for this purpose we will use HTML5 with our AngularJS application. Create _index.html_ and use the following mark-up to display the articles:

```html
<!DOCTYPE html>
<html ng-app="baasicArticleHelloWorld">
  <head>
    <meta charset="utf-8"/>
    <title>Baasic AngularJS Article Hello World</title>
  </head>
  <body>
    <h1>Baasic AngularJS Article Hello World</h1>
    <div ng-controller="MainController">
        <div ng-repeat="article in articles">
            <h2>{{article.title}}</h2>
            <p>{{article.content}}</p>
        </div>
        <div ng-show="articles.length === 0">
            <p>No articles in the application.</p>
        </div>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
    <script src="http://cdn.baasic.com/angularjs/baasic-javascript-framework-1.0.0.min.js"></script>
    <script src="http://cdn.baasic.com/angularjs/uritemplate-1.0.0.min.js"></script>
    <script src="http://cdn.baasic.com/angularjs/angular-hal-parser-1.0.0.js"></script>
    <script src="http://cdn.baasic.com/angularjs/baasic-angular-core-1.0.0.min.js"></script>
    <script src="http://cdn.baasic.com/angularjs/baasic-angular-article-1.0.0.min.js"></script>

    <script src="app.js"></script>
  </body>
</html>

```

Dependencies for this applications, as mentioned earlier, are only Baasic AngularJS Core and Article SDK and you can use the Baasic CDN to serve the SDKs.

# Source code

Full source code can be found on the [GitHub](https://github.com/Baasic/baasic-demo-angularjs-article-hello-world). More information about the [Demo](http://demo.baasic.com/angularjs/article-hello-world) can be found in the blog post [here](http://www.baasic.com/posts/AngularJS-Article-Hello-World-Tutorial/).

# How to Run

Well, you just need to open a _index.html_ file from the _src_ folder and thats it.

# Get in touch

Get in touch using one of the community channels 

GitHub: [Baasic](https://github.com/Baasic)
Google Groups: [Baasic Support](https://groups.google.com/forum/#!forum/baasic-baas)
Twitter: [@baasical](https://twitter.com/baasical)
