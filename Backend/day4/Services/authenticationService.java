package com.rechargenow.rechargenow.Services;

import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rechargenow.rechargenow.Model.UserDetails;
import com.rechargenow.rechargenow.Model.adminDetails;
import com.rechargenow.rechargenow.Model.userMain;
import com.rechargenow.rechargenow.Repositry.adminDetalisRepository;
import com.rechargenow.rechargenow.Repositry.userDetailsRepository;
import com.rechargenow.rechargenow.Repositry.userRepo;
import com.rechargenow.rechargenow.dto.userDto;



@Service
public class authenticationService {

    @Autowired
    private userRepo usermainrepo;


    @Autowired
    private userDetailsRepository userrepo;

    @Autowired
    private adminDetalisRepository adminrepo;   

    public void registerUser(userDto dto) {
        userMain userMain = new userMain();
        userMain.setEmail(dto.getEmail());
        userMain.setPassword(dto.getPassword());
        userMain.setRole(dto.getRole());
        // userMain = UserMapper.INSTANCE.dtoToUserMain(dto);
        usermainrepo.save(userMain);
        // Long userId = userMain.getId();

        if(dto.getRole().equals("admin")) {
            adminDetails admin = new adminDetails();
            // admin.setId(userId);
            admin.setFname(dto.getFname());
            admin.setLname(dto.getLname());
            admin.setPhone(dto.getPhone());
            admin.setUser(userMain);
            // adminDetails admin = UserMapper.INSTANCE.dtoToAdminDetails(dto);
            adminDetails result = adminrepo.save(admin);
            System.out.println(result);
        }
        else{
            UserDetails user = new userDetails();
            // user.setId(userId);
            user.setFname(dto.getFname());
            user.setLname(dto.getLname());
            user.setPhone(dto.getPhone());
            user.setServiceProvider(dto.getServiceProvider());
            user.setAddress(dto.getAddress());
            user.setCity(dto.getCity());
            user.setUser(userMain);

            // userDetails user = UserMapper.INSTANCE.dtoToUserDetails(dto);
            userrepo.save(user);
        }
    }

    public userDto loginUser(userDto dto) {
        userMain userMain = usermainrepo.findByEmail(dto.getEmail());
        if (userMain != null && userMain.getPassword().equals(dto.getPassword())) {
            userDto userDto = new userDto();
            userDto.setEmail(userMain.getEmail());
            userDto.setPassword(userMain.getPassword());
            userDto.setRole(userMain.getRole());
            
            if (userMain.getRole().equals("admin")) {
                userDto admin = new userDto();
                // adminDetails admin = adminrepo.findById(userMain.getId());
                userDto.setFname(admin.getFname());
                userDto.setLname(admin.getLname());
                userDto.setPhone(admin.getPhone());
            } else {
                userDetails user = userrepo.findById(userMain.getId());
                userDto.setFname(user.getFname());
                userDto.setLname(user.getLname());
                userDto.setPhone(user.getPhone());
                userDto.setServiceProvider(user.getServiceProvider());
                userDto.setAddress(user.getAddress());
                userDto.setCity(user.getCity());
            }
            
            return userDto;
        }
        return null;
    }


    public List<userDto> getAllUsers() {
        // return userrepo.findAll();
        List<userDto> list = new ArrayList<>();
        List<userMain> userMainList = usermainrepo.findAll();

        for(userMain usermain : userMainList) {
            userDto dto = new userDto();
            dto.setEmail(usermain.getEmail());
            dto.setPassword(usermain.getPassword());
            dto.setRole(usermain.getRole());
            // if(usermain.getRole().equals("admin")) 
        }

        
        // List<userMain> userMainList = usermainrepo.findAll();
        
        // for (userMain userMain : userMainList) {
        //     userDto dto = new userDto();
        //     dto.setEmail(userMain.getEmail());
        //     dto.setPassword(userMain.getPassword());
        //     dto.setRole(userMain.getRole());
            
        //     if (userMain.getRole().equals("admin")) {
        //         adminDetails admin = adminrepo.findById(userMain.getId());
        //         System.out.println(admin);
        //         // System.out.println(admin.getFname());
        //         // dto.setFname(admin.getFname());
        //         // dto.setLname(admin.getLname());
        //         // dto.setPhone(admin.getPhone());
        //     } else {
        //         userDetails user = userrepo.findById(userMain.getId());
        //         System.out.println(user);
        //         System.out.println(user.getFname());
                
        //         // dto.setFname(user.getFname());
        //         // dto.setLname(user.getLname());
        //         // dto.setPhone(user.getPhone());
        //         // dto.setServiceProvider(user.getServiceProvider());
        //         // dto.setAddress(user.getAddress());
        //         // dto.setCity(user.getCity());
        //     }
            
        //     list.add(dto);
        // }
        return list;
    }



    public List<adminDetails> getAllAdmins(long id) {
        return adminrepo.findById(id);
    }
}
