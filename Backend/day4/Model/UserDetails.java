package com.rechargenow.rechargenow.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "userDetails")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserDetails{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String Fname;
    private String email;
    private String phone;
    private String password;
    private String role;
    private String service;
}