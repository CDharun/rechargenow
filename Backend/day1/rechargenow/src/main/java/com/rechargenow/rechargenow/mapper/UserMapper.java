package com.rechargenow.rechargenow.mapper;


import com.rechargenow.rechargenow.dto.userDto;
// import com.rechargenow.rechargenow.Model.adminDetails;
import com.rechargenow.rechargenow.Model.userMain;
import com.rechargenow.rechargenow.Model.UserDetails;


public class UserMapper {
    public static userMain mapToUserMain(userDto dto) {
        userMain user = new userMain();
        user.setEmail(dto.getEmail());
        user.setPassword(dto.getPassword());
        user.setRole(dto.getRole());
        return user;
        // userMain user = new userMain();

    }

    public static UserDetails mapToUserDetails(userDto dto) {
        UserDetails user = new UserDetails();
        user.setFname(dto.getFname());
        user.setEmail(dto.getEmail());
        user.setPhone(dto.getPhone());
        user.setPassword(dto.getPassword());
        user.setService(dto.getService());
    
        return user;
    }

    // public static adminDetails mapToAdminDetails(userDto dto) {
    //     adminDetails admin = new adminDetails();
    //     admin.setFname(dto.getFname());
    //     admin.setLname(dto.getLname());
    //     admin.setPhone(dto.getPhone());
    //     admin.setServiceProvider(dto.getServiceProvider());
    //     admin.setAddress(dto.getAddress());
    //     admin.setCity(dto.getCity());

    //     return admin;
    // }
    


}
