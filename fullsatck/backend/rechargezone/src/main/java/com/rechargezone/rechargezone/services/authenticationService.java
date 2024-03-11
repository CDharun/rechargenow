package com.rechargezone.rechargezone.services;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.rechargezone.rechargezone.dto.userDto;
import com.rechargezone.rechargezone.dto.Response.AuthenticationResponse;
// import com.rechargezone.rechargezone.mapper.UserMapper;
import com.rechargezone.rechargezone.model.adminDetails;
import com.rechargezone.rechargezone.model.userDetails;
import com.rechargezone.rechargezone.model.userMain;
import com.rechargezone.rechargezone.repository.adminDetailsRepository;
import com.rechargezone.rechargezone.repository.userDetailsRepository;
import com.rechargezone.rechargezone.repository.userRepository;

@Service
public class authenticationService {

    @Autowired
    private userRepository usermainrepo;


    @Autowired
    private userDetailsRepository userrepo;

    @Autowired
    private adminDetailsRepository adminrepo; 
    
    @Autowired
    private JwtService jwtService;

    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;

    // @Autowired
    public authenticationService(PasswordEncoder passwordEncoder, AuthenticationManager authenticationManager) {
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
    }

   

    public String register(userDto request) {
        System.out.println(request);
        if (request.getRole().equals("user")) {
                var user = userMain
                                .builder()
                                // .fname(request.getName())
                                .email(request.getEmail())
                                // .password(request.getPassword())
                                .password(passwordEncoder.encode(request.getPassword()))
                                .role(request.getRole())
                                .build();
                Optional<userMain> existing = usermainrepo.findByEmail(request.getEmail());
                if (!existing.isEmpty()) {
                    return "Email Already exists";
                      
                }
                userMain savedUser = usermainrepo.save(user);
                userDetails userModel = new userDetails();
                userModel.setUser_id(user.getId());
                userModel.setFname(request.getFname());
                userModel.setLname(request.getLname());
                userModel.setPhone(request.getPhone());
                userModel.setServiceProvider(request.getServiceProvider());
                userModel.setAddress(request.getAddress());
                userModel.setCity(request.getCity());
                userModel.setUser_id(savedUser.getId());
                userModel.setUser(savedUser);
                userrepo.save(userModel);
                return "added";
              
        }
        var user = userMain
                        .builder()
                        // .name(request.getName())
                        .email(request.getEmail())
                        .password(passwordEncoder.encode(request.getPassword()))
                        .role(request.getRole())
                      
                        .build();
        Optional<userMain> existing = usermainrepo.findByEmail(request.getEmail());
        if (!existing.isEmpty()) {
               
                return "email already exists";
        }
        userMain savedUser = usermainrepo.save(user);
        adminDetails admin = new adminDetails();
        admin.setAdmin_id(user.getId());
        admin.setAdmin_id(savedUser.getId());
        admin.setFname(request.getFname());
        admin.setLname(request.getLname());
        admin.setPhone(request.getPhone());
        admin.setUser(savedUser);
        adminrepo.save(admin);
        return "added successfully";
       
    }

    public AuthenticationResponse loginUser(userDto request) {
        authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        var userOptional = usermainrepo.findByEmail(request.getEmail());
        if (userOptional.isPresent()) {
            var user = userOptional.get();
          
            var jwttoken = jwtService.generateToken(user.getEmail());
            var userRole = user.getRole().toString().toLowerCase();
            return AuthenticationResponse.builder()
            .token(jwttoken)
            .role(userRole)
            .build();

        }
        return AuthenticationResponse.builder()
                                    .token("Invalid Credentials")
                                    .build();


        
    }

   

    public List<userDto> getAllUsers() {
        // return userrepo.findAll();
        List<userDto> list = new ArrayList<>();
        // List<userDetails> userMainList = userrepo.findAll();

      

        
        List<userMain> userMainList = usermainrepo.findAll();
        
        for (userMain userMain : userMainList) {
            if(userMain.getRole().equals("admin")) continue;
            userDto dto = new userDto();
            dto.setId(userMain.getId());
            dto.setEmail(userMain.getEmail());
            dto.setPassword(userMain.getPassword());
            dto.setRole(userMain.getRole());
            
            if (userMain.getRole().equals("admin")) {
                List<adminDetails> admins = adminrepo.findById(userMain.getId());
                // System.out.println(admin);
                for(adminDetails admin : admins) {
                // System.out.println(admin.getFname());
                    dto.setFname(admin.getFname());
                    dto.setLname(admin.getLname());
                    dto.setPhone(admin.getPhone());
                }
            } else {
                userDetails user = userrepo.findById(userMain.getId());
                // System.out.println(user);
                // System.out.println(user.getFname());
                
                dto.setFname(user.getFname());
                dto.setLname(user.getLname());
                dto.setPhone(user.getPhone());
                dto.setServiceProvider(user.getServiceProvider());
                dto.setAddress(user.getAddress());
                dto.setCity(user.getCity());
            }
            
            list.add(dto);
        }
        return list;
    }



    public List<adminDetails> getAllAdmins(long id) {
        return adminrepo.findById(id);
    }

    public userDetails getAllUsers(long id) {
        return userrepo.findById(id);
    }

    public Optional<userMain> getUserById(long id) {
        return usermainrepo.findById(id);
    }

    public Optional<userMain> getUserByEmail(String email) {
        return usermainrepo.findByEmail(email);
    }

public void updateUser(userDto dto) {
    userMain userMain = usermainrepo.findById(dto.getId()).orElse(null);
    if (userMain != null) {
        userMain.setEmail(dto.getEmail());
        userMain.setPassword(dto.getPassword());
        userMain.setRole(dto.getRole());
        usermainrepo.save(userMain);

        if (dto.getRole().equals("admin")) {
            // adminDetails admin = adminrepo.findByUser(userMain).orElse(null);
            List<adminDetails> admins = adminrepo.findById(dto.getId());
            if (admins != null) {
                for(adminDetails admin : admins) {
                    admin.setFname(dto.getFname());
                    admin.setLname(dto.getLname());
                    admin.setPhone(dto.getPhone());
                    adminrepo.save(admin);
                }
            }
        } else {
            // userDetails user = userrepo.findByUser(userMain).orElse(null);
            userDetails user  = userrepo.findById(dto.getId());
            if (user != null) {
                // for(userDetails user : users) {
                    user.setFname(dto.getFname());
                    user.setLname(dto.getLname());
                    user.setPhone(dto.getPhone());
                    user.setServiceProvider(dto.getServiceProvider());
                    user.setAddress(dto.getAddress());
                    user.setCity(dto.getCity());
                    userrepo.save(user);
                // }
            }
        }
    }
}

public void updateAdmin(userDto dto) {
    List<adminDetails> admins = adminrepo.findById(dto.getId());
    if (admins != null) {
        for(adminDetails admin : admins) {
            admin.setFname(dto.getFname());
            admin.setLname(dto.getLname());
            admin.setPhone(dto.getPhone());
            adminrepo.save(admin);
        }
    }
}

public String deleteUser(long id) {
    userrepo.deleteById(id);
    usermainrepo.deleteById(id);
    return "deleted";
}
}
