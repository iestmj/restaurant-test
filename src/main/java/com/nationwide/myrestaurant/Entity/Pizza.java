package com.nationwide.myrestaurant.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity

public class Pizza {
		@Id
		@GeneratedValue(strategy=GenerationType.IDENTITY)
		private int id;
		private String name;
		private String toppings;
		private float cost;
	

		public int getId() {
			return id;
		}

		public void setId(int id) {
			this.id = id;
		}

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public String getToppings() {
			return toppings;
		}

		public void setToppings(String toppings) {
			this.toppings = toppings;
		}

		public float getCost() {
			return cost;
		}

		public void setCost(float cost) {
			this.cost = cost;
		}
		
}
