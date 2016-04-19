'use strict';

angular.module('todoListApp')

.controller('mainCtrl', function($scope, dataService) {

    $scope.learningNgChange = function() {
        console.log("An input changed.");
    };

    $scope.addTodo = function (todos) {
        var todo = { name: "new task"};
        $scope.todos.push(todo);
    }

    dataService.getTodos(function(response) {
        $scope.todos = response.data;
    });

    $scope.deleteTodo = function (todo, $index) {
        dataService.deleteTodo(todo, $index);
        $scope.todos.splice($index, 1);
    };

    $scope.saveTodos = function (todos) {
        var filteredTodos = $scope.todos.filter(function(todo) {
            if (todo.edited) {
                todo.edited = false;
                return todo;
            };
        });
        dataService.saveTodos(filteredTodos);
    };

})