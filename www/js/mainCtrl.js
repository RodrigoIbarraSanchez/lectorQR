angular.module('lectorQR.controller', ['ionic', 'ngCordova','lectorQR.service'])
    .controller('mainCtrl', function ($scope, $cordovaBarcodeScanner, $ionicModal, serviceTickets){
        
        $scope.leerCodigo = function() {
    
            $cordovaBarcodeScanner.scan().then (function (imagenEscaneada) {
                //busqueda del codigo escaneado en la base de datos
                serviceTickets.getTickets(function (tickets) {
                for (var i = 0; i < tickets.length; i++) {
                    console.log(tickets[i].code)
                    if (tickets[i].code === imagenEscaneada.text) {
                        //alert('Boleto valido, pase!.');
                        $scope.modal.show();
                        return true
                    }
                }
                alert('Este boleto no es válido :(' + imagenEscaneada.text)
                return false
                },function (err) {
                    console.log(err)
                    console.log("hubo un error al buscar los boletos")
                })

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