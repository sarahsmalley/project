package com.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.main.Property;

@Repository
public interface PropertyRepo extends JpaRepository<Property, Integer>{

	void deleteByAddress(String address);

	

}
