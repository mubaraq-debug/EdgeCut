import Link from "next/link";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPinterestSquare,
  FaPinterest,
  FaLine,
} from "react-icons/fa";
import "animate.css";

const footerLinks = [
  { name: "Home", href: "/home" },
  { name: "About", href: "/about" },
  { name: "Furnitures", href: "/furnitures" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="flex flex-col gap-20 bg-black text-white m-10 p-10">
      <header>
        <Link
          href="/"
          className="font-extrabold text-2xl bg-gradient-to-r from-custom-green to-custom-orange text-transparent bg-clip-text uppercase"
        >
          EdgeCut
        </Link>
      </header>

      <div className="foot-nav flex items-start justify-between">
        {/* contact */}
        <div className="left flex flex-col gap-5">
          <div className="contact">
            <h3 className="capitalize text-[18px]">Contact</h3>
            <div className="detail flex items-center gap-2">
              <FaPhoneAlt className="animate_animated animate-pulse" />
              <p>+234 814 828 3853</p>
            </div>
          </div>
          <div className="email">
            <h3 className="capitalize text-[18px]">Email</h3>
            <div className="detail flex items-center gap-2">
              <FaEnvelope className="animate_animated animate-pulse" />
              <p>mubaraqmuhammad06@gmail.com</p>
            </div>
          </div>
          <div className="loc">
            <h3 className="capitalize text-[18px]">Location</h3>
            <div className="detail flex items-center gap-2">
              <FaMapMarkerAlt className="animate_animated animate-pulse" />
              <p>Lagos, Nigeria</p>
            </div>
          </div>
        </div>

        {/* links */}
        <div className="links">
          <h3 className="text-[18px] uppercase pb-4">Quick Links</h3>
          {footerLinks.map((link) => {
            return (
              <Link
                href={link.href}
                key={link.name}
                className="flex flex-col pb-1"
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* newsletter */}
        <div className="newsletter">
          <h3 className="text-[18px] uppercase pb-4">
            Sign up to our newsletter
          </h3>
          <form action="" className="flex flex-col gap-2 items-start">
            <input
              type="email"
              name="user-email"
              id="user-email"
              placeholder="Enter Your Email"
              className="w-full px-5 py-3 text-black outline-none"
            />
            <input
              type="submit"
              value="Subscribe"
              className="w-6/12 bg-custom-green text-white px-5 py-3 cursor-pointer"
            />
          </form>
          <div className="media pt-10 flex items-center gap-4">
            <div className="border border-custom-green text-3xl rounded-md p-3 cursor-pointer">
              <Link href="/">
                <FaFacebook className="text-custom-green" />
              </Link>
            </div>
            <div className="border border-custom-green text-3xl rounded-md p-3 cursor-pointer">
              <Link href="/">
                <FaTwitter className="text-custom-green" />
              </Link>
            </div>
            <div className="border border-custom-green text-3xl rounded-md p-3 cursor-pointer">
              <Link href="/">
                <FaInstagram className="text-custom-green" />
              </Link>
            </div>
            <div className="border border-custom-green text-3xl rounded-md p-3 cursor-pointer">
              <Link href="/">
                <FaLinkedin className="text-custom-green" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
