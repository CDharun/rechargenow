package com.rechargenow.rechargenow.Repositry;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rechargenow.rechargenow.Model.UserDetails;
import com.rechargenow.rechargenow.Model.userMain;

public interface userDetailsRepository extends JpaRepository<UserDetails, Long>{
    // public Optional<userMain> findByEmail(String email);
    
    public UserDetails findById(long id);
    
}