import Header from "@/components/header";
import ThankYou from "@/components/thankyou";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-blue-200">
      <Header />
      <ThankYou />
      <Footer />
    </main>
  );
}
