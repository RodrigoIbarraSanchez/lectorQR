angular.module('lectorQR.controller', ['ionic', 'ngCordova','lectorQR.service'])
    .controller('mainCtrl', function ($scope, $cordovaBarcodeScanner, $ionicModal, serviceTickets){
        
        $scope.leerCodigo = function() {
            /*var imagenEscaneada = {
                text: "0001"
            }
            serviceTickets.getTickets(function (tickets) {
                    for (var i = 0; i < tickets.length; i++) {
                        if (tickets[i].code === imagenEscaneada.text) {
                            if (tickets[i].verified === false) {
                                var tick = {
                                    _id: tickets[i]._id,
                                    code: tickets[i].code,
                                    verified: true
                                }
                                serviceTickets.putTicket(tickets[i]._id,tick,
                                    function (ticket) {
                                        console.log("ticket verificado con exito, codigo: "+ticket.code)
                                        console.log("status de verificación: "+ ticket.verified)
                                        $scope.modal.show();
                                        return true
                                    },function (error) {
                                        console.log("hubo un error al verificar el boleto")
                                        return false
                                    })
                            }else{
                                alert("El voleto ya ha sido verificado anteriormente")
                                return false
                            }
                            return true
                        }
                    }
                    alert('Este boleto no es válido :(' + imagenEscaneada.text)
                    return false
                },function (err) {
                    console.log(err)
                    console.log("hubo un error al buscar los boletos")
                })*/
            $cordovaBarcodeScanner.scan().then (function (imagenEscaneada) {
                //busqueda del codigo escaneado en la base de datos
                 serviceTickets.getTickets(function (tickets) {
                    for (var i = 0; i < tickets.length; i++) {
                        if (tickets[i].code === imagenEscaneada.text) {
                            if (tickets[i].verified === false) {
                                var tick = {
                                    _id: tickets[i]._id,
                                    code: tickets[i].code,
                                    verified: true
                                }
                                serviceTickets.putTicket(tickets[i]._id,tick,
                                    function (ticket) {
                                        console.log("ticket verificado con exito, codigo: "+ticket.code)
                                        console.log("status de verificación: "+ ticket.verified)
                                        $scope.modal.show();
                                        return true
                                    },function (error) {
                                        console.log("hubo un error al verificar el boleto")
                                        return false
                                    })
                            }else{
                                alert("El voleto ya ha sido verificado anteriormente")
                                return false
                            }
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