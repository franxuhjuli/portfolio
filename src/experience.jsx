import { FaBriefcase } from "react-icons/fa";
import { Proyects } from "./proyects.jsx";


export function Experience() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-r from-indigo-950/50 to-purple-950/50 shadow-md">
      <div className="max-w-[900px] mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 flex items-center">
          <FaBriefcase className="mr-4" />
          Experiencia
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg md:text-2xl font-semibold">Diseñador web</h3>
            <p className="text-orange-500">Yub Store S.L., 2022-2023</p>
            <ul className="list-disc list-inside mt-2">
              <li>Maquetación  y mantenimiento de interfaces web</li>
              <li>Diseño de webs, banners y diverso material gráfico</li>
              <li>SEO</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg md:text-2xl font-semibold">Diseñador gráfico/Responsable de Marketing</h3>
            <p className="text-orange-500">Te Doy Salud S.L., 2019-2022</p>
            <ul className="list-disc list-inside mt-2">
              <li>Mantenimiento y gestion de webs creadas con Wordpress</li>
              <li>Diseño gráfico</li>
              <li>Campañas de marketing online</li>
            </ul>
          </div>
        </div>
        <Proyects />
      </div>
    </section>
  );
}
