import { FaBriefcase } from "react-icons/fa";
import { Proyects } from "./proyects.jsx";

export function Experience() {
  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-r from-indigo-950/50 to-purple-950/50 shadow-md"
    >
      <div className="max-w-[900px] mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 flex items-center">
          <FaBriefcase className="mr-4" />
          Experiencia
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg md:text-2xl font-semibold">
              Desarrollador Front-End | Diseñador web
            </h3>
            <p className="text-orange-500 mb-4">Yub Store S.L., 2022-2023</p>
            <ul className="list-disc list-inside mt-2">
              <li className="mb-4">
                Desarrollo y mantenimiento de interfaces web responsive usando
                HTML, CSS y JavaScript cuidando el atractivo visual y la
                experiencia de usuario
              </li>
              <li className="mb-4">
                Diseño de sitios web completos y material gráfico basado en la
                identidad visual del cliente
              </li>
              <li className="mb-8">
                Personalización mediante HTML, CSS y JavaScript de páginas web
                maquetadas con Bootstrap
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg md:text-2xl font-semibold">
              Diseñador gráfico | Responsable de Marketing
            </h3>
            <p className="text-orange-500 mb-4">Te Doy Salud S.L., 2019-2022</p>
            <ul className="list-disc list-inside mt-2">
              <li className="mb-4">
                Gestión y mantenimiento de webs creadas con Wordpress y
                Prestashop con especial énfasis en la optimización SEO y la
                experiencia de usuario
              </li>
              <li className="mb-4">
                Diseño gráfico y creación de contenido para diferentes webs,
                RRSS y otros medios audiovisuales
              </li>
              <li className="mb-8">
                Planificacíon y ejecución de estrategias de marketing,
                incluyendo campañas SEM, email marketing, redes sociales y
                marketing de contenidos
              </li>
            </ul>
          </div>
        </div>
        <Proyects />
      </div>
    </section>
  );
}
