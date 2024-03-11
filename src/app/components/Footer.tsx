import Link from "next/link";

const footerLinks = [
    { name: "Home", href: "/home" },
    { name: "About", href: "/about" },
    { name: "Furnitures", href: "/furnitures" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
]

export default function Footer() {
    return (
        <footer>
            <div className="contact">
                
            </div>
            <div className="links"></div>
            <div className="newsletter"></div>
        </footer>
    )
}