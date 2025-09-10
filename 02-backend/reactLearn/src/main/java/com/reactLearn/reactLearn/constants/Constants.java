package com.reactLearn.reactLearn.constants;

public class Constants {
    public static final String BASE_URL = "/api";
    public static final String BOOKS = BASE_URL + "/books";
    public static final String BOOK_BY_ID = BOOKS + "/{id}";
    public static final String BOOKS_SEARCH = BOOKS + "/search/findByTitleContaining?title={title}";
    public static final String BOOKS_CATEGORY = BOOKS + "/search/findByCategory?category={category}";

    public static final String ALLOWED_ORIGINS = "http://localhost:3000";
}
