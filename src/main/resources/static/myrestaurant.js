function showPizza() {
	  var pizza = document.getElementById("pizzaTable");

	  
	  if (pizza.style.display === "none") {
	    pizza.style.display = "block";
	  } else {
	    pizza.style.display = "none";
	  }
	}

function request(){
	
	var table = document.getElementById("Pizza");
	for(var i = table.rows.length - 1; i > 0; i--)
	{
	    table.deleteRow(i);
	}
	
console.log("helloo");
const Http = new XMLHttpRequest();
const url='http://localhost:9003/showAll';
Http.open("GET", url);
Http.onreadystatechange = function(e){
	console.log("status"+Http.readyState);
	if (Http.readyState==4){
		data=JSON.parse(Http.responseText);
		var A=0;
		
	data.forEach(function(item){
		var table = document.getElementById("Pizza");
		var row = table.insertRow(-1);
		var c1= row.insertCell(0);
		var c2= row.insertCell(1);
		var c3= row.insertCell(2);
		var c4= row.insertCell(3);
		
		c1.innerHTML=item.id;
		c2.innerHTML=item.name;
		c3.innerHTML=item.toppings;
		c4.innerHTML="£"+item.cost;
		A=A+1;
	});
}
}
Http.send();
}



function sending(){
	console.log("helloo");
	const Http = new XMLHttpRequest();
	const url='http://localhost:9003/save';​
	Http.open("POST", url,true);
	Http.setRequestHeader("Content-Type", "application/json");​
	var pName = document.getElementById("pizzaname").textContent;
	var pToppings = document.getElementById("toppings").textContent;
	var pCost = document.getElementById("cost").textContent;
	const pizzaData = {
//			  'name': 'pName',
//			  'toppings': 'pToppings',
//			  'cost': 'pCost'
	  'name': 'Marinara',
	  'toppings': 'Tomato sauce, garlic and basil',
	  'cost': '12'
	};
	​
	Http.onreadystatechange = function(ev) {
		console.log("hello");
	}	  
	Http.send(JSON.stringify(pizzaData));
	}

function postData (form){
	for(let inputty of form){
		console.log(inputty.value);
	}
}