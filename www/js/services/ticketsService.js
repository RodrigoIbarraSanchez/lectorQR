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
}])