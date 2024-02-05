package com.ymnn.productmanagement.service;

import com.ymnn.productmanagement.dao.request.AuthenticationRequest;
import com.ymnn.productmanagement.dao.request.RegisterRequest;
import com.ymnn.productmanagement.dao.response.AuthenticationResponse;
import com.ymnn.productmanagement.entity.Role;
import com.ymnn.productmanagement.entity.User;
import com.ymnn.productmanagement.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(RegisterRequest request) {
        var user = User.builder()
                .firstname(request.getFirstname())
                .lastname(request.getLastname())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.USER)
                .build();
        userRepository.save(user);
        var jwt = jwtService.generateToken(user);
        return AuthenticationResponse.builder().token(jwt).build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(),request.getPassword()));
                var user = userRepository.findByEmail(request.getEmail())
                        .orElseThrow(() -> new IllegalArgumentException("Invalid email or password"));
                var jwt = jwtService.generateToken(user);
                return AuthenticationResponse.builder().token(jwt).build();

    }
}
