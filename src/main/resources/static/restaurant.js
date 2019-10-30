

function showPizzaList() {
	  var pizza = document.getElementById("pizzaTable");
	  var pasta = document.getElementById("pastaTable");

	  
	  if (pizza.style.display === "none") {
	    pizza.style.display = "block";
	    pasta.style.display="none";
	  } else {
	    pizza.style.display = "none";
	  }
	  
	}	

	function showPastaList() {
	  var pizza = document.getElementById("pizzaTable");
	  var pasta = document.getElementById("pastaTable");

	  
	  if (pasta.style.display === "none") {
	    pasta.style.display = "block";
	    pizza.style.display = "none";
	  } else {
	    pasta.style.display = "none";
	  }
	  
	}

	
	function showPizzaForm() {
	  var pizza = document.getElementById("addPizzaForm");

	  
	  if (pizza.style.display === "none") {
	    pizza.style.display = "block";
	  } else {
	    pizza.style.display = "none";
	  }
	}


function getPizza(){

console.log("helloo");
const Http = new XMLHttpRequest();
const url='http://localhost:9003/showAllPizza';
Http.open("GET", url);
Http.onreadystatechange = function(e){
	console.log("status"+Http.readyState);
	if (Http.readyState==4){
		let data=JSON.parse(Http.responseText);
		var A=0;
		
	data.forEach(function(item){
		var table = document.getElementById("Pizza");
		var row = table.insertRow(-1);

		var del = document.createElement("BUTTON");
		del.innerHTML="Delete";
		del.onclick = function() {
			var idPizza = document.getElementById("deleteText");
			const Http = new XMLHttpRequest();
			const url='http://localhost:9003/deletePizza/' + idPizza.value;
			Http.open("DELETE", url,true);
			Http.setRequestHeader("Content-Type", "application/json");
			Http.onreadystatechange = function(ev){
			}
			Http.send();
			location.reload();
		}


		var edit = document.createElement("BUTTON");
		edit.innerHTML="Edit";
		edit.onclick = function() { if (confirm('WARNING!\nYou are about to delete this item')) {
            deleteCard(this.id);
        } else {

        }};

		var c1= row.insertCell(0);
		var c2= row.insertCell(1);
		c2.contentEditable = true;
		var c3= row.insertCell(2);
		c3.contentEditable = true;
		var c4= row.insertCell(3);
		c4.contentEditable = true;
		var c5=row.insertCell(4);

		c1.innerHTML=item.id;
		c2.innerHTML=item.name;
		c3.innerHTML=item.toppings;
		c4.innerHTML="£"+item.cost;

		c5.appendChild(edit);
		c5.appendChild (document.createTextNode (" "));
		c5.appendChild(del);
		A=A+1;
	});
}
}
Http.send();
}

function postPizza(){
var name = document.getElementById("pName").value;
var toppings = document.getElementById("pToppings").value;
var cost = document.getElementById("pCost").value;


console.log("helloo");
const Http = new XMLHttpRequest();
const url='http://localhost:9003/savePizza';
Http.open("POST", url,true);
Http.setRequestHeader("Content-Type", "application/json");
const fd={
  'name': name,
  'toppings': toppings,
  'cost': cost
}
Http.onreadystatechange = function(ev) {
	console.log("hello");
}
Http.send(JSON.stringify(fd));
location.reload();
}

function deletePizza(){
	// console.log("hello");
var idPizza = document.getElementById("deleteText");

		console.log("helloo");
const Http = new XMLHttpRequest();
const url='http://localhost:9003/deletePizza/' + idPizza.value;
Http.open("DELETE", url,true);
Http.setRequestHeader("Content-Type", "application/json");
// const fd={
//   'id': idPizza,
// };
Http.onreadystatechange = function(ev){
	console.log("hello");
}
Http.send();
location.reload();
}

function updatePizza(){
	console.log("update");

}

function deletePizza1(){
	console.log("delete");
		}

		//$(edit).attr("onclick", "deletePizza()");
		// var id = document.getElementById("pizzaID").value;
// var name = document.getElementById("pizzaName").value;
// var toppings = document.getElementById("pizzaToppings").value;
// var cost = document.getElementById("pizzaCost").value;

// console.log("helloo");
// const Http = new XMLHttpRequest();
// const url='http://localhost:9003/updatePizza';
// Http.open("POST", url,true);
// Http.setRequestHeader("Content-Type", "application/json");
// const fd={
// 	'id': id,
//   'name': name,
//   'toppings': toppings,
//   'cost': cost
// };
// Http.onreadystatechange = function(ev){
// 	console.log("hello");
// }
// Http.send(JSON.stringify(fd));