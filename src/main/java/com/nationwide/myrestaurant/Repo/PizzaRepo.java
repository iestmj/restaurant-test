package com.nationwide.myrestaurant.Repo;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nationwide.myrestaurant.Entity.Pizza;

@Repository

public interface PizzaRepo extends JpaRepository<Pizza, Integer>{
		public ArrayList<Pizza>findAll();	
}
