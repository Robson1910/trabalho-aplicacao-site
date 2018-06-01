const dbRefObject = firebase.database().ref().child('Feedback');
  
   dbRefObject.on('child_added', snap => {
 const li = document.createElement('table');
  li.innerText =snap.key;
 ulList.appendChild(li);
 });
 
 const ulList = document.getElementById('add');
 
 
 const dbRefObject1 = firebase.database().ref().child('Feedback');
  
   dbRefObject1.on('child_added', snap => {
 const li = document.createElement('table');
  li.innerText =snap.val().mensagem;
 ulList1.appendChild(li);
 });
 
 const ulList1 = document.getElementById('add1');
 
 
 const dbRefObject2 = firebase.database().ref().child('Feedback');
  
   dbRefObject2.on('child_added', snap => {
 const li = document.createElement('table');
  li.innerText =snap.val().email;
 ulList2.appendChild(li);
 });
 
 const ulList2 = document.getElementById('add2');
 
 
 
 
 
 function exclui(){
	
	if(document.getElementById("excluir").value == ""){
alert('Por favor, preencha o campo excluir');
return false
} else {
	
	var excluir = document.getElementById("excluir").value;
	document.getElementById('excluir').value='';
	var dbRefObject = firebase.database().ref().child('Feedback/'+ excluir);
	dbRefObject.remove().then(function(){
		console.log("sucesso");
	}).catch(function(error){
		console.log("erro");
	})
	alert('Mensagem excluida com sucesso');
	location.reload();
}
}