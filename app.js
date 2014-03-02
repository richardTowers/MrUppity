/*global window,angular*/

var uppityApp = angular.module('uppityApp', ['ngAnimate']);

uppityApp.controller('UppityCrl', function ($scope, $timeout) {
    'use strict';
    
    $scope.loading = true;
    
    $timeout(function () { $scope.loading = false; }, 3000);
    
    $scope.environments = [
        {
            name: 'DEVA',
            collapsed: true,
            children: [{
                name: 'AWE',
                endpoints: [
                    { name: 'AWE', up: true },
                    { name: 'AWE-A', up: true },
                    { name: 'AWE-B', up: true },
                    { name: 'AWE-C', up: true },
                    { name: 'AWE-D', up: true },
                    { name: 'AWE-E', up: false, result: 500 },
                    { name: 'AWE-F', up: true },
                    { name: 'AWE-G', up: true },
                    { name: 'AWE-H', up: true },
                    { name: 'AWE-I', up: true }
                ]
            }],
            endpoints: [{ name: 'SCC', up: true }]
        },
        {
            name: 'DEVB',
            collapsed: true,
            children: [{
                name: 'AWE',
                endpoints: [
                    { name: 'AWE', up: true },
                    { name: 'AWE-A', up: true },
                    { name: 'AWE-B', up: true },
                    { name: 'AWE-C', up: true },
                    { name: 'AWE-D', up: true },
                    { name: 'AWE-E', up: false, result: 500 },
                    { name: 'AWE-F', up: true },
                    { name: 'AWE-G', up: true },
                    { name: 'AWE-H', up: true },
                    { name: 'AWE-I', up: true }
                ]
            }],
            endpoints: [{ name: 'SCC', up: true }]
        },
        {
            name: 'TEST',
            collapsed: true,
            children: [{
                name: 'AWE',
                endpoints: [
                    { name: 'AWE', up: true },
                    { name: 'AWE-A', up: true },
                    { name: 'AWE-B', up: true },
                    { name: 'AWE-C', up: true },
                    { name: 'AWE-D', up: true },
                    { name: 'AWE-E', up: false, result: 500 },
                    { name: 'AWE-F', up: true },
                    { name: 'AWE-G', up: true },
                    { name: 'AWE-H', up: true },
                    { name: 'AWE-I', up: true }
                ]
            }],
            endpoints: [{ name: 'SCC', up: true }]
        },
        {
            name: 'UAT',
            collapsed: true,
            children: [{
                name: 'AWE',
                endpoints: [
                    { name: 'AWE', up: true },
                    { name: 'AWE-A', up: true },
                    { name: 'AWE-B', up: true },
                    { name: 'AWE-C', up: true },
                    { name: 'AWE-D', up: true },
                    { name: 'AWE-E', up: false, result: 500 },
                    { name: 'AWE-F', up: true },
                    { name: 'AWE-G', up: true },
                    { name: 'AWE-H', up: true },
                    { name: 'AWE-I', up: true }
                ]
            }],
            endpoints: [{ name: 'SCC', up: true }]
        },
        {
            name: 'RC',
            collapsed: true,
            children: [{
                name: 'AWE',
                endpoints: [
                    { name: 'AWE', up: true },
                    { name: 'AWE-A', up: true },
                    { name: 'AWE-B', up: true },
                    { name: 'AWE-C', up: true },
                    { name: 'AWE-D', up: true },
                    { name: 'AWE-E', up: false, result: 500 },
                    { name: 'AWE-F', up: true },
                    { name: 'AWE-G', up: true },
                    { name: 'AWE-H', up: true },
                    { name: 'AWE-I', up: true }
                ]
            }],
            endpoints: [{ name: 'SCC', up: true }]
        },
        {
            name: 'QA',
            collapsed: true,
            children: [{
                name: 'AWE',
                endpoints: [
                    { name: 'AWE', up: true },
                    { name: 'AWE-A', up: true },
                    { name: 'AWE-B', up: true },
                    { name: 'AWE-C', up: true },
                    { name: 'AWE-D', up: true },
                    { name: 'AWE-E', up: false, result: 500 },
                    { name: 'AWE-F', up: true },
                    { name: 'AWE-G', up: true },
                    { name: 'AWE-H', up: true },
                    { name: 'AWE-I', up: true }
                ]
            }],
            endpoints: [{ name: 'SCC', up: true }]
        }
    ];
    
});