package com.project.main;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Property {

	@Id
	@GeneratedValue
	private Integer id;
	private String address;
	private int bedrooms;
	private String image;
	private int price;
	
	public Property() {
		super();
	}

	public Property(String address, int bedrooms, String image, int price) {
		super();
		this.address=address;
		this.bedrooms=bedrooms;
		this.image=image;
		this.price=price;
	}
	
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public int getBedrooms() {
		return bedrooms;
	}
	public void setBedrooms(int bedrooms) {
		this.bedrooms = bedrooms;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	
}
