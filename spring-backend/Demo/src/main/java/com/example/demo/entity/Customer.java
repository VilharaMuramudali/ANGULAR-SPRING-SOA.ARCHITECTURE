package com.example.demo.entity;

import jakarta.persistence.*;
import jdk.jfr.DataAmount;
import lombok.Data;
import org.springframework.boot.sql.init.dependency.DependsOnDatabaseInitialization;

@Data
@Entity
@Table(name = "customer")
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;

    private String email;

    private String phone;
}
