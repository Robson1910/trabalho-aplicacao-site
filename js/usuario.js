  var facebook;
  var googleAccount;
  var emailCadastro;
  var soma;
	 
	 const dbReet = firebase.database().ref().child('emailCadastro');
     dbReet.on('value', snap => {
	 emailCadastro = snap.numChildren();
	 
	     const dbRe = firebase.database().ref().child('Facebook');
         dbRe.on('value', snap => {
	     facebook = snap.numChildren();
	  
	         const dbRee = firebase.database().ref().child('GoogleAccount');
             dbRee.on('value', snap => {
	         googleAccount = snap.numChildren();
	  
	             var ctx = document.getElementById('myChart').getContext('2d');
                 var chart = new Chart(ctx, {
                 type: 'bar',
                     data: {
                     labels: ["Facebook", "GoogleAccount", "Email"],
                     datasets: [{  
		             label: "Grafico dos provedores que mais esta sendo usado pelos usuarios",
                     backgroundColor: 'rgb(255, 99, 132)',
                     borderColor: 'rgb(255, 99, 132)',
                     data: [facebook,googleAccount,emailCadastro,0 ],
                     }]
                     },
                    options: {}
                });
				
    soma=facebook+googleAccount+emailCadastro;
    document.getElementById("total").innerText ="Total de usuarios cadastrados: "+ soma ;

            });	 
        });

    });

    function usuario() {
	 var ctx = document.getElementById('myChart').getContext('2d');
                 var chart = new Chart(ctx, {
                 type: 'bar',
                     data: {
                     labels: ["Facebook", "GoogleAccount", "Email"],
                     datasets: [{  
		             label: "Grafico dos provedores que mais esta sendo usado pelos usuarios",
                     backgroundColor: 'rgb(255, 99, 132)',
                     borderColor: 'rgb(255, 99, 132)',
                     data: [facebook,googleAccount,emailCadastro,0 ],
                     }]
                     },
                    options: {}
                });
    }