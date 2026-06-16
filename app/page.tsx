import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Posture from "@/components/Posture";
import Strategy from "@/components/Strategy";
import CreativePhilosophy from "@/components/CreativePhilosophy";
import Work from "@/components/Work";
import Leadership from "@/components/Leadership";
import Honors from "@/components/Honors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#F5F2ED]">
      <Nav />
      <Hero />
      <Posture />
      <Strategy />
      <CreativePhilosophy />
      <Work />
      <Leadership />
      <Honors />
      <Footer />
    </main>
  );
}
