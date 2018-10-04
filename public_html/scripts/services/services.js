'use strict';

var services = angular.module('goodsPrice.services', ['ngResource']);

var baseUrl = 'http://localhost:8080';

services.factory('DummyFactory', function ($resource) {
    return $resource(baseUrl + '/goods/dummy', {}, {
        query: { method: 'GET', params: {} }
    });
});

services.factory('GoodsFactory', function ($resource) {
    return $resource(baseUrl + '/goods', {}, {
        query: { method: 'GET', isArray: true },
        create: { method: 'POST' }
    });
});

services.factory('GoodFactory', function ($resource) {
    return $resource(baseUrl + '/goods/:id', {}, {
        show: { method: 'GET' },
        update: { method: 'PUT', params: {id: '@id'} },
        delete: { method: 'DELETE', params: {id: '@id'} }
    });
});

