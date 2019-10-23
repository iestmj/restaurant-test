package com.example.demo;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
class PizzaController {
		@Autowired
		private PizzaRepo repo;
		private PizzaService service;
		
		//Working
		@GetMapping("/showAll")
		public ArrayList<Pizza>showAll(){
			return repo.findAll();
		}
		//Working
		@PostMapping("/save")
		public String SaveData(@RequestBody Pizza Ref){
				repo.save(Ref);
				return "saved";
		}
		
		@DeleteMapping("/deleteRecord/{id}")
		public void deleteRecord(@PathVariable Integer id) {
			 repo.deleteById(id);
		}
		
//		@PutMapping("/updateRecord")
//		public String UpdateData(@RequestBody Pizza Ref) {
//		
//		}
}
