'use strict';

angular.module('todoListApp')

.controller('mainCtrl', function($scope, dataService) {

    //when someone presses add new task
    $scope.addTodo = function (todos) {
        var todo = { name: "new task"};
        $scope.todos.push(todo);
    }

    //get todos list upon pageload
    dataService.getTodos(function(response) {
        $scope.todos = response.data;
    });

    //when user presses delete
    $scope.deleteTodo = function (todo, $index) {
        dataService.deleteTodo(todo, $index);
        $scope.todos.splice($index, 1);
    };

    //when user presses save
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