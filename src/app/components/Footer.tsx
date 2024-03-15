import Link from "next/link";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
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
    <div className="flex flex-col gap-1">
      <footer className="flex flex-col gap-10 bg-black text-white m-10 p-10 sm:p-5">
        <header>
          <Link
            href="/"
            className="font-extrabold text-4xl bg-gradient-to-r from-custom-green to-custom-orange text-transparent bg-clip-text uppercase"
          >
            EdgeCut
          </Link>
        </header>

        <div className="foot-nav flex sm:flex sm:items-center sm:flex-col lg:flex-row sm:gap-10 md:items-start justify-evenly">
          {/* contact */}
          <div className="left flex flex-col gap-5">
            <div className="contact">
              <h3 className="capitalize text-[18px] sm:text-[16px]">Contact</h3>
              <div className="detail flex items-center gap-2">
                <FaPhoneAlt className="animate_animated animate-pulse" />
                <p>+234 814 828 3853</p>
              </div>
            </div>
            <div className="email">
              <h3 className="capitalize text-[18px] sm:text-[16px]">Email</h3>
              <div className="detail flex items-center gap-2">
                <FaEnvelope className="animate_animated animate-pulse" />
                <p>mubaraqmuhammad06@gmail.com</p>
              </div>
            </div>
            <div className="loc">
              <h3 className="capitalize text-[18px] sm:text-[16px]">
                Location
              </h3>
              <div className="detail flex items-center gap-2">
                <FaMapMarkerAlt className="animate_animated animate-pulse" />
                <p>Lagos, Nigeria</p>
              </div>
            </div>
          </div>

          {/* links */}
          <div className="links">
            <h3 className="text-[18px] sm:text-[16px] uppercase pb-4">
              Quick Links
            </h3>
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
            <h3 className="text-[18px] sm:text-[16px] uppercase pb-4">
              Sign up to our newsletter
            </h3>
            <form action="" className="flex flex-col gap-5 items-start">
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
                className="w-6/12 bg-custom-green text-white px-5 py-3 cursor-pointer hover:bg-transparent hover:border hover:border-custom-green hover:text-custom-green"
              />
            </form>
            <div className="media pt-10 flex items-center gap-4">
              <div className="border border-custom-green hover:border-custom-orange text-3xl rounded-md p-3 cursor-pointer">
                <Link href="/">
                  <FaFacebook className="text-custom-green hover:text-custom-orange" />
                </Link>
              </div>
              <div className="border border-custom-green hover:border-custom-orange text-3xl rounded-md p-3 cursor-pointer">
                <Link href="/">
                  <FaTwitter className="text-custom-green hover:text-custom-orange" />
                </Link>
              </div>
              <div className="border border-custom-green text-3xl hover:border-custom-orange rounded-md p-3 cursor-pointer">
                <Link href="/">
                  <FaInstagram className="text-custom-green hover:text-custom-orange" />
                </Link>
              </div>
              <div className="border border-custom-green text-3xl hover:border-custom-orange rounded-md p-3 cursor-pointer">
                <Link href="/">
                  <FaLinkedin className="text-custom-green hover:text-custom-orange" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="mx-10 text-center">
        <p className="text-base">© 2024 All rights reserved</p>
      </div>
    </div>
  );
}
