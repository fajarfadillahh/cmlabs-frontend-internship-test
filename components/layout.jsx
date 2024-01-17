import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Layout({ children, className }) {
  return (
    <>
      <Navbar />

      <main className="relative mx-auto w-full max-w-[1440px] bg-white">
        {/* === accent blur === */}
        {/* <div className="absolute -left-16 top-16 h-[180px] w-[180px] rounded-full bg-yellow-400 blur-3xl" />
        <div className="absolute -right-16 bottom-16 h-[150px] w-[150px] rounded-full bg-pink-500 blur-3xl" /> */}

        <div className={`container relative my-24 min-h-screen ${className}`}>
          {children}
        </div>
      </main>

      <Footer />
    </>
  );
}
