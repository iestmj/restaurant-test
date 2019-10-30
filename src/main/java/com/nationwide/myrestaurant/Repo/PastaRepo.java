package com.nationwide.myrestaurant.Repo;


import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nationwide.myrestaurant.Entity.Pasta;

@Repository
public

interface PastaRepo extends JpaRepository<Pasta, Integer>{
		public ArrayList<Pasta>findAll();	
}
