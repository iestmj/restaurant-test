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

import com.nationwide.myrestaurant.Entity.Pasta;
import com.nationwide.myrestaurant.Service.PastaService;

@RestController
@CrossOrigin("*")
class PastaController {
		@Autowired
	//	private PizzaRepo repo;
		private PastaService service;
		
		//Working
		
		@GetMapping("/showAllPasta")
		public ArrayList<Pasta>getAllPasta(){
			return service.getAllPasta();
		}
		//Working
		@PostMapping("/savePasta")
		public String SaveData(@RequestBody Pasta Ref){
				service.SaveData(Ref);
				return "saved";
		}

		@DeleteMapping("/deletePasta/{id}")
		public String deleteRecord(@PathVariable Integer id) {
			 service.deletePasta(id);
			 return "deleted";
		}
		
		@PutMapping("/updatePasta")
		public String UpdateData(@RequestBody Pasta Ref) {
			service.UpdateData(Ref);
			return "Updated";
		}
}
