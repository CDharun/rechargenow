package com.rechargenow.rechargenow.config;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import com.rechargenow.rechargenow.Model.userMain;
import com.rechargenow.rechargenow.Repository.userRepo;

@Component
public class UserInfoUserDetailsService implements UserDetailsService {

    @Autowired
    private userRepo repository;

    @Override
    public UserInfoUserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<userMain> userInfo = repository.findByEmail(username);
        return userInfo.map(UserInfoUserDetails::new)
                .orElseThrow(() -> new UsernameNotFoundException("user not found " + username));

    }
}