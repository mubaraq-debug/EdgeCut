import AboutSection from "./AboutSection";
import Blogs from "./Blogs";
import Furnitures from "./Furnitures";
import HeroSection from "./Hero";
import "./styles.css";
import Image from "next/image";

export default function Home() {
  return (
    <main className="main-body p-10">
     <HeroSection />
     <Furnitures />
     <AboutSection />
     <Blogs />
    </main>
  );
}
