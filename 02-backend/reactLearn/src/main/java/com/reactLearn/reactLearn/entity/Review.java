package com.reactLearn.reactLearn.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "review")
@Data
@JsonPropertyOrder({"id", "userEmail", "date", "rating", "bookId", "reviewDescription"})
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    @JsonProperty("id")
    private long id;

    @Column(name = "user_email")
    @JsonProperty("userEmail")
    private String userEmail;

    @Column(name = "date")
    @JsonProperty("date")
    private String date;

    @Column(name = "rating")
    @JsonProperty("rating")
    private String rating;

    @Column(name = "book_id")
    @JsonProperty("bookId")
    private Long bookId;

    @Column(name = "review_description")
    @JsonProperty("reviewDescription")
    private String reviewDescription;

}
