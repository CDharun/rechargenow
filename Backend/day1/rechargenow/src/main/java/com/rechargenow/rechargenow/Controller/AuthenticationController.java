package com.rechargenow.rechargenow.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rechargenow.rechargenow.Model.adminDetails;
import com.rechargenow.rechargenow.Services.authenticationService;
import com.rechargenow.rechargenow.dto.userDto;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/auth")
public class AuthenticationController {

    @Autowired
    private authenticationService authservice;

    @GetMapping("/users")
    public List<userDto> getAllUserDetails() {
        return authservice.getAllUsers();
    }

    @PostMapping("/login")
    public userDto loginUser(@RequestBody userDto dto) {
        return authservice.loginUser(dto);
    }

    @PostMapping("/register")
    public void registerUser(@RequestBody userDto dto) {
        authservice.registerUser(dto);
    }

     @GetMapping("/getbyid/{id}")
    public List<adminDetails> getByid(@PathVariable("id") long id) {
        return authservice.getAllAdmins(id);
    }
    
    
    
}