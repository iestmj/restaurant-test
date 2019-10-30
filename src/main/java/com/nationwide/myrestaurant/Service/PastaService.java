package com.nationwide.myrestaurant.Service;

import java.util.ArrayList;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nationwide.myrestaurant.Entity.Pasta;
import com.nationwide.myrestaurant.Repo.PastaRepo;

@Service
public class PastaService {
	@Autowired
	private PastaRepo repo;

	public ArrayList<Pasta> getAllPasta(){
		return repo.findAll();
	}

	public void SaveData(Pasta Ref){
			repo.save(Ref);
	}
	
	public void deletePasta(Integer id) {
		 repo.deleteById(id);
	}
	
	public void UpdateData(Pasta Ref) {
		repo.saveAndFlush(Ref);
	}


}
