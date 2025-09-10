import NavItem from "./FooterNavItem";

export default function Footer() {
    return (
        <>
        <div className="main-color">
            <footer className="container d-flex flex-wrap justify-content-between align-items-center py-5 main-color">
                <p className="col-md-4 mb-0 text-white">
                    @ Library App, Inc
                </p>
                <ul className="nav navbar-dark col-md-4 justify-content-end">
                    <NavItem text="Home" href="/home" className="nav-link px-2 text-white"/>
                    <NavItem text="Search Books" href="/search" className="nav-link px-2 text-white"/>
                </ul>
            </footer>
        </div>
        
        </>
    )
}