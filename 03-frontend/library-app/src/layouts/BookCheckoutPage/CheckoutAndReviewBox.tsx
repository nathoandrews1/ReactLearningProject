import { Link } from "react-router-dom";

export default function CheckoutAndReviewBox({ book, mobile }: { book: any, mobile: boolean }) {
    return (
        <>
            <div className={mobile ? "card d-flex mt-5" : "card col-3 container d-flex mb-5"}>
                <div className="card-body container">
                    <div className="mt-3">
                        <p>
                            <b>0/5 </b>
                            books checked out
                        </p>
                        <hr/>

                        {book && book.copies && book.copies > 0 ? 
                            <h4 className="text-success">Book is available for checkout</h4>
                            :
                            <h4 className="text-danger">Sorry, book is not available for checkout</h4>
                        }

                        <div className="row">
                            <p className="col-6 lead">
                                <b>Copies: </b> {book?.copies}
                            </p>
                            <p className="col-6 lead">
                                <b>Available: </b> {book?.copiesAvailable}
                            </p>
                        </div>
                    </div>
                    <Link to='/#' className="btn btn-success btn-lg">
                        Sign In
                    </Link>
                    <hr/>
                    <p className="mt-3">
                        This number can change until placing the order is complete.
                    </p>
                    <p>
                        Please sign in to leave a review.
                    </p>
                </div>
            </div>
        </>
    );
}