angular.module('lectorQR.service',[])

.service('serviceTickets', ['$http',
	function(                $http){

		this.getTickets = function (onSucces, onError) {
			$http({
			  method: 'GET',
			  url: 'https://ventadeboletos.herokuapp.com/v1/tickets/'
			}).then(function (response) {
				onSucces(response.data.tickets)
			}, function (response) {
			  	console.log("no se pueden obtener los boletos")
			  	onError(response.data.message)
			})
		}

		this.putTicket = function (id, ticket, onSucces, onError) {
			$http.put('https://ventadeboletos.herokuapp.com/v1/tickets/'+id,
			  {
			  	verified: ticket.verified
			  }
			).then(function (response) {
				onSucces(response.data.ticket)
			}, function (response) {
			  	console.log("no se puede actualizar el boleto")
			  	onError(response.data.message)
			})
		}

}])