const dbRefObject = firebase.database().ref().child('Macarrão'); 
   dbRefObject.on('child_added', snap => {
 const li = document.createElement('table');
  li.innerText =snap.key;
 ulList.appendChild(li);
 });
 const ulList = document.getElementById('snapkey');
 
 //
 const dbRefObject1 = firebase.database().ref().child('Macarrão'); 
   dbRefObject1.on('child_added', snap => {
 const li = document.createElement('table');
  li.innerText =snap.val().nome;
 ulList1.appendChild(li);
 });
 const ulList1 = document.getElementById('snapproduto');
 
 //
 const dbRefObject2 = firebase.database().ref().child('Macarrão'); 
   dbRefObject2.on('child_added', snap => {
 const li = document.createElement('table');
  li.innerText =snap.val().marca;
 ulList2.appendChild(li);
 });
 const ulList2 = document.getElementById('snapmarca');
 
 //
 const dbRefObject3 = firebase.database().ref().child('Macarrão'); 
   dbRefObject3.on('child_added', snap => {
 const li = document.createElement('table');
  li.innerText =snap.val().valor;
 ulList3.appendChild(li);
 });
 const ulList3 = document.getElementById('snapvalor');
 
 //
 const dbRefObject4 = firebase.database().ref().child('Macarrão'); 
   dbRefObject4.on('child_added', snap => {
 const li = document.createElement('table');
  li.innerText =snap.val().supermercado;
 ulList4.appendChild(li);
 });
 const ulList4 = document.getElementById('snapsupermercado');
 
 //
 const dbRefObject5 = firebase.database().ref().child('Macarrão'); 
   dbRefObject5.on('child_added', snap => {
 const li = document.createElement('table');
  var conteudo =snap.val().local;
  var linkk = document.createElement('a');
  li.innerText = conteudo;
  var site = "https://www.google.com.br/maps/place/" + snap.val().local;
  linkk.setAttribute('href', "#");
  li.onclick = function() { window.open(site,'Map', 'width=680,height=470'); };
  linkk.appendChild(li);
 ulList5.appendChild(linkk);
 });
 const ulList5 = document.getElementById('snaplocal');
 
 