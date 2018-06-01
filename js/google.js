const dbRefObject = firebase.database().ref().child('GoogleAccount');
dbRefObject.on('child_added', snap => {
 const li = document.createElement('table');
  li.innerText =snap.val().nome;
 ulList.appendChild(li);
 });
 const ulList = document.getElementById('add');
 
 const dbRefObject1 = firebase.database().ref().child('GoogleAccount');
dbRefObject1.on('child_added', snap => {
 const li = document.createElement('table');
  li.innerText =snap.val().email;
 ulList1.appendChild(li);
 });
 const ulList1 = document.getElementById('add1');
 
 const dbRefObject2 = firebase.database().ref().child('GoogleAccount');
dbRefObject2.on('child_added', snap => {
 const li = document.createElement('table');
  li.innerText =snap.val().provedor;
 ulList2.appendChild(li);
 });
 const ulList2 = document.getElementById('add2');
 
