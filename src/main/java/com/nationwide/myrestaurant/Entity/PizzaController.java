package com.nationwide.myrestaurant.Entity;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
class PizzaController {
		@Autowired
	//	private PizzaRepo repo;
		private PizzaService service;
		
		//Working
		
		@GetMapping("/showAll")
		public ArrayList<Pizza>getAllPizza(){
			return service.getAllPizza();
		}
		//Working
		@PostMapping("/save")
		public String SaveData(@RequestBody Pizza Ref){
				service.SaveData(Ref);
				return "saved";
		}
		
		@DeleteMapping("/deletePizza/{id}")
		public String deleteRecord(@PathVariable Integer id) {
			 service.deletePizza(id);
			 return "deleted";
		}
		
		@PutMapping("/updatePizza")
		public String UpdateData(@RequestBody Pizza Ref) {
			service.UpdateData(Ref);
			return "Updated";
		}
}
