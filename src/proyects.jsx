import { Card } from "./card.jsx";
import { FaFileCode } from "react-icons/fa";
import  Landing  from "./assets/landing.jpg";

export function Proyects() {
  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold mb-8 flex items-center">
        <FaFileCode className="mr-4" />
        Proyectos
      </h2>
      <div className="flex flex-column lg:flex-row  justify-between gap-4">
        <Card
          title="Web: Leitmotiv Area"
          description="Landing page desarrollada con React y TailwindCSS para lograr una interfaz interactiva y con diseño responsive. Las secciones de la página estan construidas como componentes reutilizables de React para facilitar el mantenimiento y la escalabilidad."
          imageUrl={Landing}
          technologies={["Html", "React", "TailwindCSS"]}
          projectUrl="https://leitmotiv-area-web.vercel.app/"
        />
        <Card
          title="Aplicación web: Black Jack"
          description="Implementación web del clásico juego Black Jack, construido con html, css y javascript. Interfaz responsiva creada utilizando la Api Canvas de JavaScript y animaciones nativas de CSS."
          imageUrl={Landing}
          technologies={["Html", "CSS", "Javascript", "Canvas"]}
          projectUrl="https://leitmotiv-area-web.vercel.app/"
        />
      </div>
    </div>
  );
}
