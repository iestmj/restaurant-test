package com.nationwide.myrestaurant.Controller;

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

import com.nationwide.myrestaurant.Entity.Pizza;
import com.nationwide.myrestaurant.Service.PizzaService;

@RestController
@CrossOrigin("*")
class PizzaController {
		@Autowired
		private PizzaService service;
		
		
		@GetMapping("/showAllPizza")
		public ArrayList<Pizza>getAllPizza(){
			return service.getAllPizza();
		}
		
		@PostMapping("/savePizza")
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
