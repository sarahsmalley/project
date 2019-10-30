package com.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.main.Property;
import com.project.repository.PropertyRepo;

@Service
public class PropertyService {
	
	@Autowired
	private PropertyRepo propertyRepo;
	
	public PropertyService() {
		
	}
	
	public List<Property> getAllProperties() {
		if (propertyRepo.findAll().isEmpty()) {
			setupProperties();
		}
		return propertyRepo.findAll();
	}

	private void setupProperties() {
		Property staldon = new Property("26 Staldon Court", 2, "url", 160000);
		Property godwin = new Property("68 Godwin Court", 2, "url", 220000);
		Property avenue = new Property("3 Avenue Road", 3, "url", 350000);
		propertyRepo.save(staldon);
		propertyRepo.save(godwin);
		propertyRepo.save(avenue);
	}
	
	public Property addNewProperty(Property property) {
		return propertyRepo.save(property);
	}
	
	public Property updateProperty(Property property) {
		return propertyRepo.save(property);
	}
	
	public String deleteProperty(String address) {
		propertyRepo.deleteByAddress(address);
		return "Property successfully removed";
	}
}
