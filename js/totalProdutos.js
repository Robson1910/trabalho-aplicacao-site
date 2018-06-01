
var c;
var a;
var carne;
var sacolao;
var bebidas;
var biscoito;
var macarrao;
var soma;

const dbRefObject = firebase.database().ref().child('Feijão');
dbRefObject.on('value', snap => {
	c = snap.numChildren();

	const dbR = firebase.database().ref().child('Arroz');
	dbR.on('value', snap => {
		a = snap.numChildren();

		const d = firebase.database().ref().child('Carne');
		d.on('value', snap => {
			carne = snap.numChildren();

			const b = firebase.database().ref().child('Sacolão');
			b.on('value', snap => {
				sacolao = snap.numChildren();

				const t = firebase.database().ref().child('Bebidas');
				t.on('value', snap => {
					bebidas = snap.numChildren();

					const g = firebase.database().ref().child('Biscoito');
					g.on('value', snap => {
						biscoito = snap.numChildren();

						const o = firebase.database().ref().child('Macarrão');
						o.on('value', snap => {
							macarrao = snap.numChildren();

							var ctx = document.getElementById('myChart').getContext('2d');
							var chart = new Chart(ctx, {
								// The type of chart we want to create
								type: 'bar',
								// The data for our dataset
								data: {
									labels: ["Arroz", "Bebidas", "Biscoito", "Carne", "Feijão", "Macarrão", "Sacolão"],
									datasets: [{
										label: "Grafico dos produtos que estão sendo mais cadastrados pelos úsuarios",
										backgroundColor: 'rgb(255, 99, 132)',
										borderColor: 'rgb(255, 99, 132)',
										data: [a, bebidas, biscoito, carne, c, macarrao, sacolao, 0],
									}]
								},

								// Configuration options go here
								options: {}
							});

							soma = a + bebidas + biscoito + carne + c + macarrao + sacolao;
							document.getElementById("total").innerText = "Total de produtos cadastrados: " + soma;
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
			labels: ["Arroz", "Bebidas", "Biscoito", "Carne", "Feijão", "Macarrão", "Sacolão"],
			datasets: [{
				label: "Grafico dos produtos que estão sendo mais cadastrados pelos úsuarios",
				backgroundColor: 'rgb(255, 99, 132)',
				borderColor: 'rgb(255, 99, 132)',
				data: [a, bebidas, biscoito, carne, c, macarrao, sacolao, 0],
			}]
		},

		// Configuration options go here
		options: {

		}
	});
	soma = a + bebidas + biscoito + carne + c + macarrao + sacolao;
	document.getElementById("total").innerText = "Total de produtos cadastrados: " + soma;
}





