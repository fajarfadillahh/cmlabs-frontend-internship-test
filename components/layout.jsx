import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Layout({ children, className }) {
  return (
    <>
      <Navbar />

      <main className="relative mx-auto w-full max-w-[1440px] bg-white">
        <div className={`container relative my-24 min-h-screen ${className}`}>
          {children}
        </div>
      </main>

      <Footer />
    </>
  );
}
