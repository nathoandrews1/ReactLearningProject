//package com.reactLearn.reactLearn.controller;
//
//import com.reactLearn.reactLearn.dao.ReviewRepository;
//import com.reactLearn.reactLearn.entity.Review;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties;
//import org.springframework.data.domain.Page;
//import org.springframework.data.domain.Pageable;
//import org.springframework.data.rest.webmvc.ResourceNotFoundException;
//import org.springframework.http.MediaType;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.HashMap;
//import java.util.List;
//import java.util.Map;
//
//import static com.reactLearn.reactLearn.constants.Constants.ALLOWED_ORIGINS;
//
//@RestController
//@RequestMapping("/api")
//@CrossOrigin(origins = ALLOWED_ORIGINS)
//public class ReviewController {
//    // This class can be expanded in the future for custom endpoints if needed
//
//    private ReviewRepository reviewRepository;
//
//    @Autowired
//    public ReviewController(ReviewRepository reviewRepository) {
//        this.reviewRepository = reviewRepository;
//    }
//
//    @GetMapping("/reviews/{id}")
//    public ResponseEntity<Review> getReviewById(@PathVariable  Long id) {
//        Review review = reviewRepository.findById(id)
//                .orElseThrow(() -> new ResourceNotFoundException("Review not found with id: " + id));
//
//        return ResponseEntity.ok()
//                .contentType(MediaType.APPLICATION_JSON)
//                .body(review);
//    }
//
////    @GetMapping("/reviews/book/{id}")
////    public ResponseEntity<Review> getReviewByBookId(@PathVariable  Long id) {
////        Review review = reviewRepository.getReviewByBookId(id);
////
////        return ResponseEntity.ok()
////                .contentType(MediaType.APPLICATION_JSON)
////                .body(review);
////    }
//
////    @GetMapping("/reviews")
////    public ResponseEntity<Map<String, Object>> getReviews() {
////        List<Review> reviewList = reviewRepository.findAll();
////        Map<String, Object> reviewResponse = new HashMap<>();
////        reviewResponse.put("reviews", reviewList);
////
////        return ResponseEntity.ok()
////                .contentType(MediaType.APPLICATION_JSON)
////                .body(reviewResponse);
////    }
//}
