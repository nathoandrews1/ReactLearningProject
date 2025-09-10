import { Link } from "react-router-dom";

export default function Heros() {
    return (
        <>
            <div className="d-none d-lg-block">
                <div className="row g-0 mt-5 ">
                    <div className="col-sm-6 col-md-5">
                        <div className="col-image-left"> </div>
                    </div>

                    <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
                        <div className="row">
                            <h1 className="hero-title">What have you been reading?</h1>
                            <p className="lead">
                                The library team would love to know what you have been reading.
                                Whether it is to learn a new skill or grow within one,
                                we will be able to provide top content for you!
                            </p>

                            <Link className="btn main-color btn-lg text-white btnOverride" to="/signUp">Sign up</Link>
                        </div>

                    </div>
                </div>


                <div className="row g-0">
                    <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
                        <div className="row">
                            <h1 className="hero-title">Our collection is always changing!</h1>
                            <p className="lead">
                                Try to check in daily as our books are always being updated daily.
                                We have a wide variety of books to choose from.
                                Whether you are looking for a new skill or just want to relax with a good book,
                                we have something for everyone!
                            </p>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-5">
                        <div className="col-image-right"> </div>
                    </div>
                </div>
            </div>

            {/* Mobile */}
            <div className="d-lg-none">
                <div className="container">
                    {/* First section */}
                    <div className="m-2">
                        <div className="text-center mb-3">
                            <div className="col-image-left"></div>
                        </div>
                        <div className="text-content">
                            <h1 className="hero-title">What have you been reading?</h1>
                            <p className="lead">
                                The library team would love to know what you have been reading.
                                Whether it is to learn a new skill or grow within one,
                                we will be able to provide top content for you!
                            </p>
                            <Link className="btn main-color btn-lg text-white btnOverride" to="/signUp">Sign up</Link>
                        </div>
                    </div>

                    {/* Second section */}
                    <div className="m-2">
                        <div className="text-center mb-3">
                            <div className="col-image-right"></div>
                        </div>
                        <div className="text-content">
                            <h1 className="hero-title">Our collection is always changing!</h1>
                            <p className="lead">
                                Try to check in daily as our books are always being updated daily.
                                We have a wide variety of books to choose from.
                                Whether you are looking for a new skill or just want to relax with a good book,
                                we have something for everyone!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}