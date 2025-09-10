import ReviewModel from "../../models/ReviewModel";
import StarReview from "./StarReview";

export default function Review({ review }: { review: ReviewModel }) {
    const date = new Date(review.date);

    const formattedDate = date.toLocaleDateString("en-US", {
        year: "numeric", month: "long", day: "numeric"
    });

    const dateDay = date.getDate();
    const dateMonth = date.toLocaleString("en-US", { month: "long" });
    const dateYear = date.getFullYear();

    const dateRender = dateDay + " " + dateMonth + " " + dateYear;

    return (
        <>
            <div className="review">
                <h5>{review.userEmail}</h5>
                <div className="row">
                    <div className="col">
                        {dateRender}
                    </div>
                    <div className="col">
                        <div className="float-end">
                            <StarReview rating={review.rating} size={20} />
                        </div>

                    </div>
                </div>

                <div className="mt-2">
                    <p>{review.reviewDescription}</p>
                </div>
            </div>
        </>
    );
}