import { useEffect, useState } from "react";
import BookModel from "../../models/BookModel";
import { SearchBook } from "../SearchBooksPage/components/SearchBook";
import SpinnerLoading from "../Utils/SpinnerLoading";
import StarReview from "../Utils/StarReview";
import CheckoutAndReviewBox from "./CheckoutAndReviewBox";
import ReviewModel from "../../models/ReviewModel";
import LatestReviews from "./LatestReviews";

export default function BookCheckoutPage({ isLoadingUi } : { isLoadingUi?: any}) {
    const [currentBook, setCurrentBook] = useState<BookModel>();
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);


    //Review states
    const [reviews, setReviews] = useState<ReviewModel[]>([]);
    const [totalStars, setTotalStars] = useState(0);
    const [isLoadingReviews, setIsLoadingReviews] = useState(true);

    isLoadingUi(true);

    const bookId = (window.location.pathname).split('/')[window.location.pathname.split('/').length - 1];

    useEffect(() => {
        const fetchBook = async () => {
            const baseUrl: string = `http://localhost:8080/api/books/${bookId}`;

            const response = await fetch(baseUrl);

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const responseJson = await response.json();

            const loadedBook: BookModel = {
                id: responseJson.id,
                title: responseJson.title,
                author: responseJson.author,
                description: responseJson.description,
                copies: responseJson.copies,
                copiesAvailable: responseJson.copies_available,
                category: responseJson.category,
                img: responseJson.img,
            };

            setCurrentBook(loadedBook);
            setIsLoading(false);
        };

        fetchBook().catch((error: any) => {
            setIsLoading(false);
            setHttpError(error.message);
        })
    }, []);


    //Review useEffect to fetch reviews
    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchReviews = async () => {
            const reviewUrl: string = `http://localhost:8080/api/reviews/search/findByBookId?bookId=${bookId}`;

            const reviewResponse = await fetch(reviewUrl);

            if (!reviewResponse.ok) {
                throw new Error('Something went wrong retrieving book reviews!')
            }

            const reviewResponseJson = await reviewResponse.json();
            const reviewData = reviewResponseJson._embedded.reviews;

            const loadedReviews: ReviewModel[] = [];
            let stars = 0;

            for (const key in reviewData) {
                loadedReviews.push({
                    id: reviewData[key].id,
                    userEmail: reviewData[key].userEmail,
                    date: reviewData[key].date,
                    rating: reviewData[key].rating,
                    bookId: reviewData[key].bookId,
                    reviewDescription: reviewData[key].reviewDescription,
                });

                stars = stars + Number(reviewData[key].rating);
            }


            // Calculate average rating with safety checks
            if (loadedReviews.length > 0) {
                const round = (Math.round((stars / loadedReviews.length) * 2) / 2).toFixed(1);
                setTotalStars(Number(round));
            } else {
                setTotalStars(0); // Set default rating when no reviews exist
            }

            setReviews(loadedReviews);
            setIsLoadingReviews(false);
            isLoadingUi(false);
        };

        fetchReviews().catch((error: any) => {
            setIsLoadingReviews(false);
            isLoadingUi(false);
            setHttpError(error.message);
        });

    }, [bookId]);

    if (isLoading || isLoadingReviews) {
        return (
            <SpinnerLoading />
        );
    }

    if (httpError) {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <p className="text-center">{httpError}</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="container d-none d-lg-block">
                <div className="row mt-5">
                    <div className="col-sm-12 col-md-2">
                        {currentBook?.img ?
                            <img src={currentBook.img} width="226" height="349" alt="book" />
                            :
                            <img src={require('./../../Images/BooksImages/book-luv2code-1000.png')} width="226" height="349" alt="book" />
                        }
                    </div>

                    <div className="col-4 col-md-4 container">
                        <div className="ml-2">
                            <h2>{currentBook?.title}</h2>
                            <h5 className="text-primary">{currentBook?.author}</h5>
                            <p className="lead">Description: {currentBook?.description}</p>
                        </div>
                        <StarReview rating={totalStars} size={20} />
                    </div>
                    <CheckoutAndReviewBox book={currentBook} mobile={false} />
                </div>
                <hr />
                <LatestReviews reviews={reviews} bookId={currentBook?.id!} mobile={false} />
            </div>

            <div className="container d-lg-none mt-5">
                <div className="d-flex justify-content-center">
                    {currentBook?.img ?
                        <img src={currentBook.img} width="226" height="349" alt="book" />
                        :
                        <img src={require('./../../Images/BooksImages/book-luv2code-1000.png')} width="226" height="349" alt="book" />
                    }
                </div>

                <div className="mt-4">
                    <div className="ml-2">
                        <h2>{currentBook?.title}</h2>
                        <h5 className="text-primary">{currentBook?.author}</h5>
                        <p className="lead">Description: {currentBook?.description}</p>
                    </div>
                    <StarReview rating={2.5} size={20} />
                </div>

                <CheckoutAndReviewBox book={currentBook} mobile={true} />
                <hr />
                <LatestReviews reviews={reviews} bookId={currentBook?.id!} mobile={true} />
            </div>

            {/* {currentBook != null && <SearchBook book={currentBook} key={currentBook.id} />} */}
        </>
    );
}