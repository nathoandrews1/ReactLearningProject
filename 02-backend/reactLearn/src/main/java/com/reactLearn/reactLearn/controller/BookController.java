package com.reactLearn.reactLearn.controller;

import com.reactLearn.reactLearn.dao.BookRepository;
import com.reactLearn.reactLearn.entity.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static com.reactLearn.reactLearn.constants.Constants.ALLOWED_ORIGINS;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = ALLOWED_ORIGINS)
public class BookController {
    // This class can be expanded in the future for custom endpoints if needed

    private BookRepository bookRepository;

    @Autowired
    public BookController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @GetMapping("/books/{id}")
    public ResponseEntity<Book> getBookById(@PathVariable  Long id) {
        Book book = bookRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Book not found with id: " + id));

        return ResponseEntity.ok()
                .contentType(MediaType.APPLICATION_JSON)
                .body(book);
    }
}
