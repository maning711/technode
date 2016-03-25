/**
 * created by maning
 */
angular.module('technodeApp').controller('RoomCtrl', function($scope, socket) {
    socket.on('technode.read', function (technode) {
        $scope.technode = technode
    });
    socket.on('message.add', function(message) {
        $scope.technode.message = message;
    });
    socket.emit('technode.read');
    socket.on('users.add', function (user) {
        $scope.technode.users.push(user)
    });
    socket.on('users.remove', function (user) {
        _userId = user._id
        $scope.technode.users = $scope.technode.users.filter(function (user) {
          return user._id != _userId
        })
    })
});