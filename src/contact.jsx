import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaPhoneSquare,
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-[900px] mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 flex items-center">
          <FaEnvelope className="mr-4" />
          Contacto
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold pb-6">Datos de contacto</h3>
            <ul className="space-y-2 text-lg pb-4">
              <li>
                <span className="text-orange-400">Email: </span>{" "}
                fjalvarez1984@gmail.com
              </li>
              <li>
                <span className="text-orange-400">Teléfono:</span>{" "}
                <a href="tel:+34667376807" className="hover:text-orange-400">
                  +(34) 667 37 68 07
                </a>
              </li>
              <li>
                <span className="text-orange-400">Ubicación:</span> Murcia,
                España
              </li>
            </ul>
            <div className="mt-4 flex flex-row space-x-4 gap-2">
              <a
                href="https://github.com/franxuhjuli"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-500 duration-300"
              >
                <FaGithub size={38} />
              </a>
              <a
                href="https://www.linkedin.com/in/francisco-j-alvarez-lopez/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-500 duration-300"
              >
                <FaLinkedin size={38} />
              </a>
              <a
                href="https://wa.me/+34667376807"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-500 duration-100 hover:scale-105 active:scale-100"
              >
                <FaWhatsapp size={38} />
              </a>
              <a
                href="tel:+34667376807"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-500 duration-100 hover:scale-105 active:scale-100"
              >
                <FaPhoneSquare size={38} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Envíame un correo electrónico
            </h3>
            <form
              className="space-y-4"
              action="https://formspree.io/f/manywwvn"
              method="POST"
            >
              <div>
                <label htmlFor="name" className="block mb-1">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border border-purple-300 text-indigo-800 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-purple-300  text-indigo-800 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="w-full px-3 py-2 border border-purple-300  text-indigo-800 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-white text-purple-800 px-4 py-2 rounded-md hover:bg-orange-400 hover:text-purple-950 transition duration-300 hover:scale-115"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
