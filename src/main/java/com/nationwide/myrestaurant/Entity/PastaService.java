//package com.nationwide.myrestaurant.Entity;
//
//import java.util.ArrayList;
//
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//@Service
//public class PastaService {
//	@Autowired
//	private PastaRepo repo;
//
//	public ArrayList<Pasta> getAllPasta(){
//		return repo.findAll();
//	}
//
//	public void SaveData(Pasta Ref){
//			repo.save(Ref);
//	}
//	
//	public void deletePasta(Integer id) {
//		 repo.deleteById(id);
//	}
//	
//	public void UpdateData(Pasta Ref) {
//		repo.saveAndFlush(Ref);
//	}
//
//
//}
