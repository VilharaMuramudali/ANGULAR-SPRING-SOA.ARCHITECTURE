package com.example.demo.controller;

import com.example.demo.entity.Customer;
import com.example.demo.service.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin("*")
public class CustomerController {

    private final CustomerService customerService ;

    @PostMapping("/customer")
    public  Customer postCustomer(@RequestBody Customer customer){
        return customerService.postCustomer(customer);
    }

    @GetMapping("/customers")
    private List<Customer> getAllCustomer(){
        return customerService.getAllCustomer();
    }
}
