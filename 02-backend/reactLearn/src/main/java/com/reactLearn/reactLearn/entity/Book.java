package com.reactLearn.reactLearn.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "book")
@Data
@JsonPropertyOrder({"id", "title", "author", "description", "copies", "copiesAvailable", "category", "img"})
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    @JsonProperty("id")
    private long id;

    @JsonProperty("title")
    @Column(name = "title")
    private String title;

    @Column(name = "author")
    @JsonProperty("author")
    private String author;

    @Column(name = "description")
    @JsonProperty("description")
    private String description;

    @Column(name = "copies")
    @JsonProperty("copies")
    private int copies;

    @Column(name = "copies_available")
    @JsonProperty("copies_available")
    private int copiesAvailable;

    @Column(name = "category")
    @JsonProperty("category")
    private String category;

    @Column(name = "img")
    @JsonProperty("img")
    private String img;

}
