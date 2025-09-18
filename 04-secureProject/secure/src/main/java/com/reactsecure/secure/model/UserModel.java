package com.reactsecure.secure.model;

import jakarta.persistence.*;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    @Size(min = 3, message = "Username must be a minimum of 3 characters")
    private String username;

    @Column
    @Valid
    @Size(min = 8, message = "Password must be a minimum of 8 characters")
    private String password;
}
