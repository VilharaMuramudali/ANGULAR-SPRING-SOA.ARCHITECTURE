package com.example.demo.service;


import com.example.demo.entity.Customer;
import com.example.demo.repository.CustomerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@RequiredArgsConstructor
public class CustomerService {

    private final CustomerRepository customerRepository ;

    public Customer postCustomer(Customer customer){
        return customerRepository.save(customer);
    }
    public List<Customer> getAllCustomer(){
        return customerRepository.findAll();

    }


}
