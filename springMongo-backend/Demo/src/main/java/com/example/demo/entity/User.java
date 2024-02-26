package com.example.demo.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "users")
public class User {

    // Primary key for the user entity
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    // Email column with a constraint to disallow null values
    @Column(nullable = false, unique = true) // Ensures unique constraint on the email column
    private String email;

    // Password column with a constraint to disallow null values
    @Column(nullable = false)
    private String password;
    
    // Constructors, getters, setters, and other methods can be added here

}
