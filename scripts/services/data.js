'use strict';

angular.module('todoListApp')

.service('dataService', function($http) {

    this.getTodos = function(callback) {
        $http.get('mock/todos.js').then(callback)
    };

    this.deleteTodo = function (todo, $index) {
        console.log('The "' + todo.name + '" task item has been deleted.')
        // other logic
    };

    this.saveTodos = function (todos) {
        console.log(todos.length + ' tasks were saved.')
        // other logic
    };

});