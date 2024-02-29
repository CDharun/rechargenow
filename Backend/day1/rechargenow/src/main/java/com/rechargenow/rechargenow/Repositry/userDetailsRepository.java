package com.rechargenow.rechargenow.Repositry;
import org.springframework.data.jpa.repository.JpaRepository;

import com.rechargenow.rechargenow.Model.UserDetails;


public interface userDetailsRepository extends JpaRepository<UserDetails, Long>{
    // public userDetails findByEmail(String email);
    public UserDetails findById(long id);
    
}