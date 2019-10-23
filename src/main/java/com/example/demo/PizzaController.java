package com.example.demo;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
class PizzaController {
		@Autowired
		private PizzaRepo repo;
		
		@GetMapping("/showAll")
		public ArrayList<Pizza>showAll(){
			return repo.findAll();
		}
		
}
