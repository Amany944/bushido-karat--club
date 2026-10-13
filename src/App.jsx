import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Dojos from "./components/Dojos.jsx";
import Calendar from "./components/Calendar.jsx";
import Master from "./components/Master.jsx";
import Shop from "./components/Shop.jsx";
import Faq from "./components/Faq.jsx";
import JoinForm from "./components/JoinForm.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="antialiased">
      <Navbar />
      <main className="w-full">
        <Hero />
        <Dojos />
        <Calendar />
        <Master />
        <Shop />
        <Faq />
        <JoinForm />
      </main>
      <Footer />
    </div>
  );
}
