var c;
var a;
var carne;
var sacolao;
var bebidas;
var biscoito;
var macarrao;
var soma;

// epa
const dbRefObject = firebase.database().ref().child('Epa Plus');
dbRefObject.on('value', snap => {
	c = snap.numChildren();

	// apoio
	const db = firebase.database().ref().child('Apoio Mineiro');
	db.on('value', snap => {
		a = snap.numChildren();

		//carrefour
		const dbr = firebase.database().ref().child('Carrefour');
		dbr.on('value', snap => {
			carne = snap.numChildren();

			// extra
			const dbt = firebase.database().ref().child('Extra');
			dbt.on('value', snap => {
				sacolao = snap.numChildren();

				// mercado
				const dbu = firebase.database().ref().child('Mercado Central');
				dbu.on('value', snap => {
					bebidas = snap.numChildren();

					//supermercado bh
					const dee = firebase.database().ref().child('Supermercado BH');
					dee.on('value', snap => {
						biscoito = snap.numChildren();

						// via brasil
						const err = firebase.database().ref().child('Via Brasil');
						err.on('value', snap => {
							macarrao = snap.numChildren();

							var ctx = document.getElementById('myChart').getContext('2d');
							var chart = new Chart(ctx, {
								// The type of chart we want to create
								type: 'bar',

								// The data for our dataset
								data: {
									labels: ["Epa Plus", "Apoio Mineiro", "Carrefour", "Extra", "Mercado Central", "Supermercado BH", "Via Brasil"],
									datasets: [{
										label: "Grafico dos supermercados que estão sendo mais cadastrados pelos usuarios",
										backgroundColor: 'rgb(255, 99, 132)',
										borderColor: 'rgb(255, 99, 132)',
										data: [c, a, carne, sacolao, bebidas, biscoito, macarrao, 0],
									}]
								},
								// Configuration options go here
								options: {}
							});
							soma = c + a + carne + sacolao + bebidas + biscoito + macarrao;
							document.getElementById("total").innerText = "Total de supermercados cadastrados: " + soma;
						});
					});
				});
			});
		});
	});
});

function supermercados() {

	//grafico
	var ctx = document.getElementById('myChart').getContext('2d');
	var chart = new Chart(ctx, {
		// The type of chart we want to create
		type: 'bar',
		// The data for our dataset
		data: {
			labels: ["Epa Plus", "Apoio Mineiro", "Carrefour", "Extra", "Mercado Central", "Supermercado BH", "Via Brasil"],
			datasets: [{
				label: "Grafico dos supermercados que estão sendo mais cadastrados pelos usuarios",
				backgroundColor: 'rgb(255, 99, 132)',
				borderColor: 'rgb(255, 99, 132)',
				data: [c, a, carne, sacolao, bebidas, biscoito, macarrao, 0],
			}]
		},
		// Configuration options go here
		options: {}
	});
	soma = c + a + carne + sacolao + bebidas + biscoito + macarrao;
	document.getElementById("total").innerText = "Total de supermercados cadastrados: " + soma;
}

