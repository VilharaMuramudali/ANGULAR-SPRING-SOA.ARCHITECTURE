package com.example.demo.controller;

import com.example.demo.entity.User;
import com.example.demo.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping( "/api")
@RequiredArgsConstructor
@CrossOrigin("*")

public class UserController {
    private final UserService userService;

    @PostMapping("/user")
    public ResponseEntity<String> postUser(@RequestBody User user) {
        return userService.postUser(user);
    }
}
