import Questions from "@/components/questions";
import Header from "../components/header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-blue-200">
      <Header />
      <Questions />
    </main>
  );
}
