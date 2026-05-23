import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ImageCarousel from "@/components/ImageCarousel";
import Location from "@/components/Location";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ImageCarousel />
        <Location />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
