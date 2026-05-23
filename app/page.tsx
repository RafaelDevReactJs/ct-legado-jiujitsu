import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ImageCarousel from "@/components/ImageCarousel";
import Schedule from "@/components/Schedule";
import Location from "@/components/Location";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Hero />
        <Schedule />
        <ImageCarousel />
        <Location />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
