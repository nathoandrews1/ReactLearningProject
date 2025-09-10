export default function SpinnerLoading() {
    return (

        <div className="d-flex justify-content-center align-items-center" style={{ height: 550 }}>
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div> 
    );
}