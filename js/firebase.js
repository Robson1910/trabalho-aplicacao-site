function excluir(){
	
	if(document.getElementById("excluir_field").value == ""){
alert('Por favor, preencha o campo excluir');
return false
} else if(document.getElementById("excluir_field_produto").value == ""){
	alert('Por favor, preencha todos os campo');
return false	
}
 else {
	var excluir = document.getElementById("excluir_field").value;
	var excluirProduto = document.getElementById("excluir_field_produto").value;
	document.getElementById('excluir_field').value='';
	document.getElementById('excluir_field_produto').value='';
	var dbRefObject = firebase.database().ref().child(excluirProduto +'/'+ excluir);
	dbRefObject.remove().then(function(){
		console.log("sucesso");
	}).catch(function(error){
		console.log("erro");
	})
	alert('Produto excluido com sucesso');
}
}

function update(){
	if(document.getElementById("chave_field").value == ""){
alert('Por favor, preencha todos os campo');
return false
} else if(document.getElementById("produto_field").value == ""){
	alert('Por favor, preencha todos os campo');
return false	
} else if(document.getElementById("valor_field").value == ""){
	alert('Por favor, preencha todos os campo');
return false	
} else if(document.getElementById("supermercado_field").value == ""){
	alert('Por favor, preencha todos os campo');
return false	
} else if(document.getElementById("endereco_field").value == ""){
	alert('Por favor, preencha todos os campo');
return false	
} 
else if(document.getElementById("marca_field").value == ""){
	alert('Por favor, preencha todos os campo');
return false	
} 
else {
	var chave = document.getElementById("chave_field").value;
	var produto = document.getElementById("produto_field").value;
	var valor = document.getElementById("valor_field").value;
	var supermercado = document.getElementById("supermercado_field").value;
	var endereco = document.getElementById("endereco_field").value;
	var marca = document.getElementById("marca_field").value;
	document.getElementById('chave_field').value='';
	document.getElementById('produto_field').value='';
	document.getElementById('valor_field').value='';
	document.getElementById('supermercado_field').value='';
	document.getElementById('endereco_field').value='';
	document.getElementById('marca_field').value='';
	var dbRefObject = firebase.database().ref().child(produto +'/'+ chave);
	dbRefObject.update({ marca:marca, valor:valor,supermercado:supermercado,local:endereco});
	console.log("sucesso");
	alert('Produto alterado com sucesso');
}
}

function cadastra(){
 if(document.getElementById("p_field").value == ""){
	alert('Por favor, preencha todos os campo');
return false	
} else if(document.getElementById("v_field").value == ""){
	alert('Por favor, preencha todos os campo');
return false	
} else if(document.getElementById("s_field").value == ""){
	alert('Por favor, preencha todos os campo');
return false	
} else if(document.getElementById("e_field").value == ""){
	alert('Por favor, preencha todos os campo');
return false	
}else if(document.getElementById("m_field").value == ""){
	alert('Por favor, preencha todos os campo');
return false	
}
	else{
	var p = document.getElementById("p_field").value;
	var m = document.getElementById("m_field").value;
	var v = document.getElementById("v_field").value;
	var s = document.getElementById("s_field").value;
	var e = document.getElementById("e_field").value;
	document.getElementById('p_field').value='';
	document.getElementById('v_field').value='';
	document.getElementById('s_field').value='';
	document.getElementById('e_field').value='';
	document.getElementById('m_field').value='';
	
	var x = Math.floor((Math.random() * 10000) + 1);
	
	var dbRefObject = firebase.database().ref(p);
	dbRefObject.child(x +"/local").set(e);
	dbRefObject.child(x +"/marca").set(m);
	dbRefObject.child(x +"/nome").set(p);
	dbRefObject.child(x +"/rand").set(x);
	dbRefObject.child(x +"/supermercado").set(s);
	dbRefObject.child(x +"/valor").set(v);
	dbRefObject.child(x +"/usuariouid").set("Administrador");
	
	alert('Produto cadastrado com sucesso');
	}
}
