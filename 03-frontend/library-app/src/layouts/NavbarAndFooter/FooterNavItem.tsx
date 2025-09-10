import { NavLink } from "react-router-dom";

export default function NavItem({ text, href, className }: { text: string; href: string; className?: string }) {
    return (
        <>
            <li className={`nav-item ${className}`}>
                <NavLink to={href} className="nav-link px-2 text-white">
                    {text}
                </NavLink>
            </li>
        </>
    );
}