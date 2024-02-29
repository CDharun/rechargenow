package com.rechargenow.rechargenow.Repositry;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rechargenow.rechargenow.Model.adminDetails;



public interface adminDetalisRepository extends JpaRepository<adminDetails, Long>{
    
    public List<adminDetails>  findById(long id);
    // public adminDetails findBy
    
}