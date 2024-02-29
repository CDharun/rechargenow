package com.rechargenow.rechargenow.Repositry;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rechargenow.rechargenow.Model.UserDetails;
import com.rechargenow.rechargenow.Model.userMain;

public interface userRepo extends JpaRepository<UserDetails,Long>{
      public userMain findByEmail(String email);

      public void save(userMain userMain);
}
