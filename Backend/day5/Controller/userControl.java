package com.rechargenow.rechargenow.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

import com.rechargenow.rechargenow.Services.userService;
import com.rechargenow.rechargenow.dto.planDataDTO; // Import the planDataDTO class
// import com.rechargenow.rechargenow.model.adminDetails;

import java.util.List; // Import the List class


@RestController
@RequestMapping("/user")
public class userControl {
    @Autowired
    private userService userservice;


    @GetMapping("/getAllData")
    public List<planDataDTO> getAllDatas () {
        return userservice.getAllData();
    }

    @GetMapping("/getPlanDataByOperatorAndData") 
    public List<planDataDTO> getPlanDataByOperatorAndData(@RequestParam String operator, @RequestParam String data) {
        return userservice.getPlanDataByOperatorAndData(operator, data);
    }

   
    
    
}