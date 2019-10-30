package com.nationwide.myrestaurant.Service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nationwide.myrestaurant.Entity.Pizza;
import com.nationwide.myrestaurant.Repo.PizzaRepo;

@Service
public class PizzaService {
	@Autowired
	private PizzaRepo repo;

	public ArrayList<Pizza> getAllPizza(){
		return repo.findAll();
	}

	public void SaveData(Pizza Ref){
			repo.save(Ref);
	}
	
	public void deletePizza(Integer id) {
		 repo.deleteById(id);
	}
	
	public void UpdateData(Pizza Ref) {
		repo.saveAndFlush(Ref);
	}


}
