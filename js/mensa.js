const dbRefObject = firebase.database().ref().child('mensagemAdm');
  
   dbRefObject.on('child_added', snap => {
 const li = document.createElement('table');
  li.innerText =snap.key;
 ulList.appendChild(li);
 });
 
 const ulList = document.getElementById('add');
 
 const dbRefObject1 = firebase.database().ref().child('mensagemAdm');
  
   dbRefObject1.on('child_added', snap => {
 const li = document.createElement('table');
  li.innerText = snap.val().Mensagem;
 ulList1.appendChild(li);
 });
 
 const ulList1 = document.getElementById('add1');
 
 const dbRefObject2 = firebase.database().ref().child('mensagemAdm');
  
   dbRefObject2.on('child_added', snap => {
 const li = document.createElement('table');
  li.innerText = snap.val().Situação;
 ulList2.appendChild(li);
 });
 
 const ulList2 = document.getElementById('add2');
 
 

function enviar(){

if(document.getElementById("mensagem_mensagem").value == ""){
alert('Por favor, preencha todos os campo');
return false
}
else {
	
	var p = document.getElementById("mensagem_mensagem").value;
	document.getElementById('mensagem_mensagem').value='';
	
	var x = Math.floor((Math.random() * 10000) + 1);
	
	var dbRefObject = firebase.database().ref('mensagemAdm');
	dbRefObject.child(x +"/Mensagem").set(p);
	dbRefObject.child(x +"/Situação").set("Pendente");
	alert('Mensagem enviada com sucesso');
	location.reload();
}
}

function altera(){
	if(document.getElementById("id_field").value == ""){
alert('Por favor, preencha todos os campo');
return false
} else if(document.getElementById("mensag_field").value == ""){
	alert('Por favor, preencha todos os campo');
return false	
} else if(document.getElementById("situ_field").value == ""){
	alert('Por favor, preencha todos os campo');
return false	
} 

 else {
	var chave = document.getElementById("id_field").value;
	var mensagem = document.getElementById("mensag_field").value;
	var situacao = document.getElementById("situ_field").value;
	document.getElementById('id_field').value='';
	document.getElementById('mensag_field').value='';
	document.getElementById('situ_field').value='';

	var dbRefObject = firebase.database().ref().child('mensagemAdm/'+ chave);
	dbRefObject.update({ Mensagem:mensagem, Situação:situacao});
	console.log("sucesso");
	alert('Mensagem alterada com sucesso');
	location.reload();
}
}

function exclui(){
	
	if(document.getElementById("exclui").value == ""){
alert('Por favor, preencha o campo excluir');
return false
} else {
	
	var excluir = document.getElementById("exclui").value;
	document.getElementById('exclui').value='';
	var dbRefObject = firebase.database().ref().child('mensagemAdm/'+ excluir);
	dbRefObject.remove().then(function(){
		console.log("sucesso");
	}).catch(function(error){
		console.log("erro");
	})
	alert('Mensagem excluida com sucesso');
	location.reload();
}
}

