import { Link } from "react-router-dom";
import Review from "../Utils/Review";
import ReviewModel from "../../models/ReviewModel";

export default function LatestReviews({ reviews, bookId, mobile }: { reviews: ReviewModel[], bookId: number, mobile: boolean }) {
    return (
        <>
            <div className={mobile ? "mt-3" : "row mt-5"}>
                <div className={mobile ? "" : "col-sm-2 col-md-2"}>
                    <h2>Latest Reviews</h2>
                </div>

                <div className="col-sm-10 col-md-10">
                    {reviews.length > 0 ? (
                        <>
                            {reviews.slice(0, reviews.length).map(review => (
                                <Review review={review} key={review.id} />
                            ))}
                            <div className="m-3">
                                <Link type='button' className='btn main-color btn-md text-white' to={`/books/${bookId}/reviews`}>
                                    Reach all reviews
                                </Link>
                            </div>
                        </>
                    ) : 
                        <div className="m-3">
                            <p className="lead">There are no reviews for this book.</p>
                        </div>
                    }
                </div>
            </div>
        </>
    );
}