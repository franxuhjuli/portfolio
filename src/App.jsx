import { Header } from "./header.jsx";
import { Hero } from "./hero.jsx"
import { Footer } from "./footer.jsx"
import { Education } from "./education.jsx"
import { Experience } from "./experience.jsx"
import { Contact } from "./contact.jsx"



function App() {

  return (
    <>
      <Header />
      <main className="flex-grow mt-16">
      <Hero />
      <Education />
      <Experience />
      <Contact />
      </ main>
      <Footer />
    </>
  );
}

export default App;
