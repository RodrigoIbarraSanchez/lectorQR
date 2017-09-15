angular.module('lectorQR.controller', ['ionic', 'ngCordova'])
    .controller('mainCtrl', function ($scope, $cordovaBarcodeScanner, $ionicModal){
        $scope.leerCodigo = function() {
            $cordovaBarcodeScanner.scan().then (function (imagenEscaneada) {
                if (imagenEscaneada.text === '0001') {
                    //alert('Boleto valido, pase!.');
                    $scope.modal.show();
                } else {
                    alert('Este boleto no es válido :(' + imagenEscaneada.text)
                }
                //alert(imagenEscaneada.text);
            }, function (error) {
                alert("El boleto no es válido :(" + error);
            })
        }
        $ionicModal.fromTemplateUrl('templates/modal.html', {
            scope: $scope
        }).then(function(modal) {
            $scope.modal = modal;
        });
    });