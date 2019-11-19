function showList() {
    var pizza = document.getElementById("pizzaTable");
    var pasta = document.getElementById("pastaTable");

    
    if (pizza.style.display === "none") {
      pizza.style.display = "block";
      pasta.style.display="none";
    } else {
      pizza.style.display = "none";
      pasta.style.display = "block";
      
    }
    getPasta();
  }	

function getPizza(){

    console.log("helloo");
    const Http = new XMLHttpRequest();
//    const url='http://localhost:9003/showAllPizza';
    const url='http://'+location.hostname+':9003/showAllPizza';
    Http.open("GET", url);
    Http.onreadystatechange = function(e){
    console.log("status"+Http.readyState);
    if (Http.readyState==4){
        let data=JSON.parse(Http.responseText);
        var A=0;
        var table = document.getElementById("pizzaBody");
        table.innerHTML= "";
    data.forEach(function(item){

        var row = table.insertRow(-1);

        var del = document.createElement("BUTTON");
        del.innerHTML="Delete";
        del.id=item.id;
                del.onclick = function() {
                    const Http = new XMLHttpRequest();
                    //'http://'+location.hostname+':9003...'
                    const url='http://'+location.hostname+':9003/deletePizza/'+item.id;
//                    const url='http://localhost:9003/deletePizza/'+item.id;
                    Http.open("DELETE", url,true);
                    Http.setRequestHeader("Content-Type", "application/json");
                    Http.onreadystatechange = function(ev){
                    }
                    Http.send();
                    //getPizza();
                    location.reload();
                }

        var edit = document.createElement("BUTTON");
        edit.innerHTML="Edit";
        edit.id=item.id;
        var save = document.createElement("BUTTON");
        save.innerHTML="Save";
        save.id = item.id;
        save.style.visibility="hidden";
    
                edit.onclick = function() {
                    save.style.visibility="visible";
                    c1.contentEditable = "true";
                    c2.contentEditable = "true";
                    c3.contentEditable = "true";

                        save.onclick = function(){
                            var pizzaid=edit.id;
                            var name = document.getElementById("name"+item.id).innerText;
                            var toppings = document.getElementById("toppings"+item.id).innerText;
                            var cost = document.getElementById("cost"+item.id).innerText;
                            editPizza(pizzaid,name,toppings,cost);

                            save.style.visibility="hidden";
                            c1.contentEditable = "false";
                            c2.contentEditable = "false";
                            c3.contentEditable = "false";

                            location.reload();
                        }
                }				

        var c1= row.insertCell(0);
        c1.id = "name"+item.id;
        var c2= row.insertCell(1);
        c2.id="toppings"+item.id;
        var c3= row.insertCell(2);
        c3.id="cost"+item.id;
        var c4= row.insertCell(3);
        

        c1.innerHTML=item.name;
        c2.innerHTML=item.toppings;
        c3.innerHTML=item.cost;
        c4.appendChild(edit);
        c4.appendChild (document.createTextNode (" "));
        c4.appendChild(del);
        c4.appendChild(save);
        A=A+1;
    });
    }
    }
    Http.send();
}

function editPizza(pizzaid,name,toppings,cost){
        	const Http = new XMLHttpRequest();
//            const url='http://localhost:9003/updatePizza';
            const url='http://'+location.hostname+':9003/updatePizza';
          	Http.open("PUT", url,true);
          	Http.setRequestHeader("Content-Type", "application/json");
          	const fd={
          	  'id': pizzaid,
          	  'name': name,
          	  'toppings': toppings,
          	  'cost': cost
          	}
          	Http.onreadystatechange = function(ev) {
          		console.log("updated");
          	}
          	Http.send(JSON.stringify(fd));
}

function postPizza(){
    var name = document.getElementById("pName").value;
    var toppings = document.getElementById("pToppings").value;
    var cost = document.getElementById("pCost").value;


    console.log("helloo");
    const Http = new XMLHttpRequest();
//    const url='http://localhost:9003/savePizza';
    const url='http://'+location.hostname+':9003/savePizza';
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




function getPasta(){

    const Http = new XMLHttpRequest();
    
    const url='http://'+location.hostname+':9003/showAllPasta';
//    const url='http://localhost:9003/showAllPasta';
    Http.open("GET", url);
    Http.onreadystatechange = function(e){
      console.log("status"+Http.readyState);
      if (Http.readyState==4){
          let data=JSON.parse(Http.responseText);
          var A=0;
          var table = document.getElementById("pastaBody");
          table.innerHTML= "";
      data.forEach(function(item){
          var row = table.insertRow(-1);
    
          var del = document.createElement("BUTTON");
          del.innerHTML="Delete";
          del.id=item.id;
          del.onclick = function() {
              const Http = new XMLHttpRequest();
              const url='http://'+location.hostname+':9003/deletePasta/'+item.id;
//              const url='http://localhost:9003/deletePasta/'+item.id;
              Http.open("DELETE", url,true);
              Http.setRequestHeader("Content-Type", "application/json");
              Http.onreadystatechange = function(ev){
              }
              Http.send();
              location.reload();
          }
    
          var edit = document.createElement("BUTTON");
          edit.innerHTML="Edit";
    
          
          edit.id=item.id;
              var save = document.createElement("BUTTON");
              save.innerHTML="Save";
              save.id = item.id;
              save.style.visibility="hidden";
      
                  edit.onclick = function() {
                      save.style.visibility="visible";
                      c1.contentEditable = "true";
                      c2.contentEditable = "true";
                      c3.contentEditable = "true";
    
                          save.onclick = function(){
                            var pastaid=edit.id;
                            var name = document.getElementById("name"+item.id).innerText;
                            var ingredients = document.getElementById("ingredients"+item.id).innerText;
                            var cost = document.getElementById("cost"+item.id).innerText;
                            editPasta(pastaid,name,ingredients,cost);

                              save.style.visibility="hidden";
                              c1.contentEditable = "false";
                              c2.contentEditable = "false";
                              c3.contentEditable = "false";
                               location.reload();
                          }
                  }				
    
          var c1= row.insertCell(0);
          c1.id = "name"+item.id;
          var c2= row.insertCell(1);
          c2.id="ingredients"+item.id;
          var c3= row.insertCell(2);
          c3.id="cost"+item.id;
          var c4= row.insertCell(3);
          
          c1.innerHTML=item.name;
          c2.innerHTML=item.ingredients;
          c3.innerHTML=item.cost;
          c4.appendChild(edit);
          c4.appendChild (document.createTextNode (" "));
          c4.appendChild(del);
          c4.appendChild(save);
          A=A+1;
      });
    }
    }
    Http.send();
    }

function postPasta(){
        var name = document.getElementById("pastaNameinput").value;
        var ingredients = document.getElementById("pastaIngredientsinput").value;
        var cost = document.getElementById("pastaCostinput").value;

        const Http = new XMLHttpRequest();
//        const url='http://localhost:9003/savePasta';
        const url='http://'+location.hostname+':9003/savePasta';
        Http.open("POST", url,true);
        Http.setRequestHeader("Content-Type", "application/json");
        console.log(name);
        const fd={
        'name': name,
        'ingredients': ingredients,
        'cost': cost
        }
        Http.onreadystatechange = function(ev) {
        }
        Http.send(JSON.stringify(fd));
        location.reload();
 }

function editPasta(pastaid,name,ingredients,cost){
    
        const Http = new XMLHttpRequest();
//          const url='http://localhost:9003/updatePasta';
         const url='http://'+location.hostname+':9003/updatePasta';
          Http.open("PUT", url,true);
          Http.setRequestHeader("Content-Type", "application/json");
          const fd={
            'id': pastaid,
            'name': name,
            'ingredients': ingredients,
            'cost': cost
          }
          console.log(pastaid, name, ingredients, cost);
          
          Http.onreadystatechange = function(ev) {
              console.log("updated");
          }
          Http.send(JSON.stringify(fd));

}