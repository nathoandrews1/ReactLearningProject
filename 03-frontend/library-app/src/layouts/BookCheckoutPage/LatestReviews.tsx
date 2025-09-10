import { Link } from "react-router-dom";
import Review from "../Utils/Review";
import ReviewModel from "../../models/ReviewModel";
import { useState } from "react";

export default function LatestReviews({ reviews, bookId, mobile }: { reviews: ReviewModel[], bookId: number, mobile: boolean }) {
    const [loadMoreReviews, setLoadMoreReviews] = useState(false);
    return (
        <>
            <div className={mobile ? "mt-3" : "row mt-5"}>
                <div className={mobile ? "" : "col-sm-2 col-md-2"}>
                    <h2>Latest Reviews</h2>
                </div>

                <div className="col-sm-10 col-md-10">

                    {/* Show 3 reviews initially */}
                    {reviews.length > 0 && reviews.slice(0, loadMoreReviews ? reviews.length : 3).map(review => (
                                <>
                                <Review review={review} key={review.id} />
                                <hr />
                                </>
                            ))}

                    {/* Show load more reviews  button if there are more than 3 reviews */}
                    {reviews.length > 3 && (
                        <>
                            <div className="m-3">
                                <button type='button' className='loadMoreReviewsBtn btn main-color btn-md text-white' onClick={() => setLoadMoreReviews(!loadMoreReviews)}>
                                    {loadMoreReviews ? "Show Less Reviews" : "Load More Reviews"} 
                                </button>
                            </div>
                        </>
                    )}

                    {reviews.length === 0 &&
                    <>
                        <div className="m-3">
                            <p className="lead">There are no reviews for this book.</p>
                        </div>
                    </>
                    }
                </div>
            </div>
        </>
    );
}