import { Card } from "./card.jsx";
import { FaFileCode } from "react-icons/fa";
import Landing  from "./assets/landing.jpg";
import BlackJack from "./assets/blackjack.jpeg";
import EnConstruccion from "./assets/en-construccion.jpg";



export function Proyects() {
  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold mb-8 flex items-center">
        <FaFileCode className="mr-4" />
        Proyectos
      </h2>
      <div className="flex flex-column md:flex-row justify-between">
        <Card
          title="Web: Leitmotiv Area"
          description="Landing page responsive desarrollada con React y TailwindCSS. Construida con componentes de React para facilitar el mantenimiento y la escalabilidad."
          imageUrl={Landing}
          technologies={["Html", "React", "TailwindCSS"]}
          projectUrl="https://leitmotiv-area-web.vercel.app/"
        />
        <Card
          title="Aplicación web: Black Jack"
          description="Juego clásico Black Jack, implementado con Html, CSS y Javascript. Interfaz responsiva creada utilizando la Api Canvas de JavaScript y animaciones nativas de CSS."
          imageUrl={EnConstruccion}
          technologies={["Html", "CSS", "Javascript", "Canvas"]}
          projectUrl=""
          aditionalClassName = "blur-[4px] opacity-30"
        />
      </div>
    </div>
  );
}
