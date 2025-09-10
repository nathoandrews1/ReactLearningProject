package com.reactLearn.reactLearn.dao.projections;

import com.reactLearn.reactLearn.entity.Book;
import org.springframework.data.rest.core.config.Projection;

@Projection(name = "bookDetails", types = {Book.class})
public interface BookProjection {
    Long getId();
    String getTitle();
    String getAuthor();
    String getDescription();
    int getCopies();
    int getCopiesAvailable();
    String getCategory();
    String getImg();
}
