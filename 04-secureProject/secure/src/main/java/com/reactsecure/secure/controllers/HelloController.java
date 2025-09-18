package com.reactsecure.secure.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class HelloController {

    @GetMapping("/hello")
    public ResponseEntity sayHello(@RequestParam(name = "continue", required = false) String continueParam) {
        String message = "";
        if (continueParam != null && continueParam.isEmpty()) {
            message = "Congratulations you hacked the system";
        } else {
            message = "Hello";
        }

        return new ResponseEntity(message, HttpStatus.OK);
    }
}
