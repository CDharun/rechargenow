package com.rechargenow.rechargenow.dto;



import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class userDto {
    private long id;
    private String Fname;
    private String email;
    private String password;
    private String phone;
    private String role;
    private String service;
    public Object getServiceProvider() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getServiceProvider'");
    }
    
}
