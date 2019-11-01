package com.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.main.Property;
import com.project.repository.PropertyRepo;
import com.project.service.PropertyService;

@RestController
@CrossOrigin("*")
public class PropertyController {
	
	@Autowired
	private PropertyService propertyService;
	
	@Autowired
	private PropertyRepo repo;
	
	@GetMapping("/property/showall")
	public List<Property> getAllProperties(){
		return repo.findAll();
	}
	
	@PostMapping("/property")
	public Property addNewProperty(@RequestBody Property property) {
		return propertyService.addNewProperty(property);
	}
	
	@PutMapping("/property")
	public Property updateProperty(@RequestBody Property property) {
		return propertyService.updateProperty(property);
	}
	
	@DeleteMapping("/property/{id}")
	public String deleteProperty(@PathVariable int id) {
		return propertyService.deleteProperty(id);
	}


}
