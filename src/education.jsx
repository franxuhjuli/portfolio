import { FaGraduationCap } from "react-icons/fa";

export function Education() {
  return (
    <section id="education" className="py-20">
      <div className="max-w-[900px] mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 flex items-center">
          <FaGraduationCap className="mr-4" />
          Formación y Habilidades
        </h2>
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Formación</h3>
            <ul className="space-y-4 flex flex-col gap-4">
              <li>
                <p className="text-orange-400">F.P. Grado Superior</p>
                <h3 className="text-lg md:text-2xl font-semibold">
                  Desarrollo de Aplicaciones Web (DAW)
                </h3>
                <p className="text-purple-300">
                  I.E.S. Jose Planes (Murcia), 2022-2025 (En curso)
                </p>
              </li>
              <li>
                <p className="text-orange-400">F.P. Grado Superior</p>
                <h3 className="text-lg md:text-2xl font-semibold">
                  Marketing y Publicidad
                </h3>
                <p className="text-purple-300">
                  I.E.S. Federico García Lorca (Albacete), 2019-2022
                </p>
              </li>
              <li>
                <p className="text-orange-400">Certificado profesionalidad</p>
                <h3 className="text-lg md:text-2xl font-semibold">
                  Programación con Lenguajes Orientados a Objetos y Bases de
                  Datos Relacionales
                </h3>
                <p className="text-purple-300">
                  Inforcad Centro de formación (Hellín), 2019
                </p>
              </li>
              <li>
                <p className="text-orange-400">Formación Ocupacional</p>
                <h3 className="text-lg md:text-2xl font-semibold ">
                  Técnico Auxiliar en Sistemas Microinformáticos
                </h3>
                <p className="text-purple-300">
                  Inforcad Centro de formación (Hellín), 2005-2006
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 mt-8">Tecnologías</h3>
            <ul className="grid grid-cols-2 gap-4 md:grid-cols-6 md:gap-8">
              <li className="flex items-center flex-col font-semibold">
                <div className="transition-all duration-300 lg:hover:scale-125 drop-shadow-[0px_0px_24px_rgba(0,0,0,0.20)] hover:drop-shadow-[0px_0px_8px_rgba(0,0,0,0.40)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="92px"
                    height="92px"
                  >
                    <path
                      fill="#E65100"
                      d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"
                    />
                    <path fill="#FF6800" d="M24 8L24 39.9 35.2 36.7 37.7 8z" />
                    <path
                      fill="#FFF"
                      d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"
                    />
                    <path
                      fill="#FFF"
                      d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"
                    />
                  </svg>
                </div>
                HTML5
              </li>
              <li className="flex items-center flex-col font-semibold">
                <div className="transition-all duration-300 lg:hover:scale-125 drop-shadow-[0px_0px_24px_rgba(0,0,0,0.20)] hover:drop-shadow-[0px_0px_8px_rgba(0,0,0,0.40)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="92px"
                    height="92px"
                  >
                    <path
                      fill="#0277BD"
                      d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"
                    />
                    <path fill="#0392E1" d="M24 8L24 39.9 35.2 36.7 37.7 8z" />
                    <path
                      fill="#FFF"
                      d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"
                    />
                    <path
                      fill="#FFF"
                      d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"
                    />
                  </svg>
                </div>
                CSS3
              </li>
              <li className="flex items-center flex-col font-semibold">
                <div className="transition-all duration-300 lg:hover:scale-125 drop-shadow-[0px_0px_24px_rgba(0,0,0,0.20)] hover:drop-shadow-[0px_0px_8px_rgba(0,0,0,0.40)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="92px"
                    height="92px"
                  >
                    <path fill="#ffd600" d="M6,42V6h36v36H6z" />
                    <path
                      fill="#000001"
                      d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
                    />
                  </svg>
                </div>
                JavaScript
              </li>
              <li className="flex items-center flex-col align font-semibold">
                <div className="transition-all duration-300 lg:hover:scale-125 drop-shadow-[0px_0px_24px_rgba(0,0,0,0.3)] hover:drop-shadow-[0px_0px_8px_rgba(0,0,0,0.40)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="92px"
                    height="92px"
                  >
                    <path
                      fill="#d43a02"
                      d="M23.65,24.898c-0.998-1.609-1.722-2.943-2.725-5.455C19.229,15.2,31.24,11.366,26.37,3.999	c2.111,5.089-7.577,8.235-8.477,12.473C17.07,20.37,23.645,24.898,23.65,24.898z"
                    />
                    <path
                      fill="#d43a02"
                      d="M23.878,17.27c-0.192,2.516,2.229,3.857,2.299,5.695c0.056,1.496-1.447,2.743-1.447,2.743	s2.728-0.536,3.579-2.818c0.945-2.534-1.834-4.269-1.548-6.298c0.267-1.938,6.031-5.543,6.031-5.543S24.311,11.611,23.878,17.27z"
                    />

                    <path
                      fill="#5c65d6"
                      d="M32.084,25.055c1.754-0.394,3.233,0.723,3.233,2.01c0,2.901-4.021,5.643-4.021,5.643 s6.225-0.742,6.225-5.505C37.521,24.053,34.464,23.266,32.084,25.055z M29.129,27.395c0,0,1.941-1.383,2.458-1.902 c-4.763,1.011-15.638,1.147-15.638,0.269c0-0.809,3.507-1.638,3.507-1.638s-7.773-0.112-7.773,2.181 C11.683,28.695,21.858,28.866,29.129,27.395z"
                    />

                    <path
                      fill="#5c65d6"
                      d="M27.935,29.571 c-4.509,1.499-12.814,1.02-10.354-0.993c-1.198,0-2.974,0.963-2.974,1.889c0,1.857,8.982,3.291,15.63,0.572L27.935,29.571z"
                    />

                    <path
                      fill="#5c65d6"
                      d="M18.686,32.739 c-1.636,0-2.695,1.054-2.695,1.822c0,2.391,9.76,2.632,13.627,0.205l-2.458-1.632C24.271,34.404,17.014,34.579,18.686,32.739z"
                    />

                    <path
                      fill="#5c65d6"
                      d="M36.281,36.632 c0-0.936-1.055-1.377-1.433-1.588c2.228,5.373-22.317,4.956-22.317,1.784c0-0.721,1.807-1.427,3.477-1.093l-1.42-0.839 C11.26,34.374,9,35.837,9,37.017C9,42.52,36.281,42.255,36.281,36.632z"
                    />

                    <path
                      fill="#5c65d6"
                      d="M39,38.604 c-4.146,4.095-14.659,5.587-25.231,3.057C24.341,46.164,38.95,43.628,39,38.604z"
                    />
                  </svg>
                </div>
                Java
              </li>
              <li className="flex items-center flex-col font-semibold">
                <div className="transition-all duration-300 lg:hover:scale-125 drop-shadow-[0px_0px_24px_rgba(0,0,0,0.20)] hover:drop-shadow-[0px_0px_8px_rgba(0,0,0,0.40)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="92px"
                    height="92px"
                  >
                    <path
                      fill="#F4511E"
                      d="M42.2,22.1L25.9,5.8C25.4,5.3,24.7,5,24,5c0,0,0,0,0,0c-0.7,0-1.4,0.3-1.9,0.8l-3.5,3.5l4.1,4.1c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3c0,0.5-0.1,0.9-0.3,1.3l4,4c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3s-1.3,3-3,3c-1.7,0-3-1.3-3-3c0-0.5,0.1-0.9,0.3-1.3l-4-4c-0.1,0-0.2,0.1-0.3,0.1v10.4c1.2,0.4,2,1.5,2,2.8c0,1.7-1.3,3-3,3s-3-1.3-3-3c0-1.3,0.8-2.4,2-2.8V18.8c-1.2-0.4-2-1.5-2-2.8c0-0.5,0.1-0.9,0.3-1.3l-4.1-4.1L5.8,22.1C5.3,22.6,5,23.3,5,24c0,0.7,0.3,1.4,0.8,1.9l16.3,16.3c0,0,0,0,0,0c0.5,0.5,1.2,0.8,1.9,0.8s1.4-0.3,1.9-0.8l16.3-16.3c0.5-0.5,0.8-1.2,0.8-1.9C43,23.3,42.7,22.6,42.2,22.1z"
                    />
                  </svg>
                </div>
                Git
              </li>

              <li className="flex items-center flex-col font-semibold">
                <div className="transition-all duration-300 lg:hover:scale-125 drop-shadow-[0px_0px_24px_rgba(0,0,0,0.25)] hover:drop-shadow-[0px_0px_8px_rgba(0,0,0,0.40)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="92px"
                    height="92px"
                  >
                    <path
                      fill="#17a5c2"
                      d="M33,34c0-0.205,0.012-0.376,0.018-0.565C33.008,33.184,33,33,33,33s0.012-0.009,0.032-0.022c0.149-2.673,0.886-3.703,1.675-4.29c-0.11-0.153-0.237-0.318-0.356-0.475c-0.333-0.437-0.748-0.979-1.192-1.674l-0.082-0.158c-0.067-0.164-0.229-0.447-0.435-0.819c-1.183-2.14-3.645-6.592-1.96-9.404c0.738-1.232,2.122-1.942,4.121-2.117C33.986,11.718,30.925,6.115,23.985,6c-0.002,0-0.004,0-0.006,0c-6.041-0.098-8.026,5.392-8.672,8.672c0.89-0.377,1.906-0.606,2.836-0.606c0.014,0,0.029,0,0.043,0c2.29,0.017,3.865,1.239,4.323,3.354c0.335,1.552,0.496,2.91,0.492,4.153c-0.01,2.719-0.558,4.149-1.042,5.411l-0.154,0.408c-0.124,0.334-0.255,0.645-0.379,0.937c-0.126,0.298-0.237,0.563-0.318,0.802c0.484,0.11,0.864,0.265,1.125,0.38l0.151,0.066c0.047,0.02,0.094,0.043,0.137,0.069c0.848,0.516,1.376,1.309,1.489,2.233c0.061,0.498,0.051,3.893,0.03,6.855c0.087,1.285,0.305,2.364,0.593,3.146c0.409,1.114,1.431,3.241,3.394,3.119c1.37-0.085,2.687-0.919,3.561-2.019c0.938-1.181,1.284-2.487,1.414-3.958V34z"
                    />
                    <path
                      fill="#17a5c2"
                      d="M15.114 28.917c-1.613-1.683-2.399-3.947-2.104-6.056.285-2.035.124-4.027.037-5.098-.029-.357-.048-.623-.047-.77 0-.008.002-.015.003-.023 0-.004-.002-.007-.002-.011.121-3.021 1.286-7.787 4.493-10.62C15.932 5.724 13.388 4.913 11 5 7.258 5.136 3.636 7.724 4 15c.137 2.73 3.222 19.103 7.44 19 .603-.015 1.229-.402 1.872-1.176 1.017-1.223 2.005-2.332 2.708-3.104C15.705 29.481 15.401 29.217 15.114 28.917zM37.023 14.731c.015.154.002.286-.022.408.031.92-.068 1.813-.169 2.677-.074.636-.15 1.293-.171 1.952-.021.645.07 1.282.166 1.956.225 1.578.459 3.359-.765 5.437.225.296.423.571.581.837 4.61-7.475 6.468-16.361 4.695-18.626C38.655 5.944 34.941 4.952 31.999 5c-.921.015-1.758.139-2.473.294C34.602 7.754 36.863 13.026 37.023 14.731zM41 30.071c-2.665.55-3.947.257-4.569-.126-.1.072-.2.133-.293.19-.372.225-.961.583-1.105 2.782.083.016.156.025.246.044L35.714 33c1.32.06 3.049-.31 4.063-.781C41.962 31.205 43.153 29.627 41 30.071zM22.023 32.119c-.037-.298-.198-.539-.492-.732l-.108-.047C21.062 31.181 20.653 31 20 31h-.004c-.127.01-.253.019-.38.019-.052 0-.103-.007-.155-.009-.474.365-1.148.647-2.816.99-2.98.759-1.221 1.655-.078 1.794 1.106.277 3.735.614 5.481-.809C22.043 32.537 22.035 32.229 22.023 32.119z"
                    />
                    <path
                      fill="#17a5c2"
                      d="M20.681 18.501c-.292.302-.753.566-1.262.484-.828-.134-1.463-1.133-1.417-1.508h0c.044-.374.751-.569 1.578-.435.287.047.548.128.768.228-.32-.688-.899-1.085-1.782-1.182-1.565-.174-3.226.644-3.56 1.097.007.11.02.251.033.417.093 1.147.265 3.284-.05 5.537-.208 1.485.393 3.169 1.567 4.395.757.79 1.641 1.29 2.513 1.438.111-.478.309-.944.513-1.425.113-.265.233-.547.346-.852l.162-.427c.443-1.155.9-2.35.909-4.703C21.003 20.66 20.892 19.627 20.681 18.501zM34.847 22.007c-.104-.729-.211-1.484-.185-2.303.023-.742.105-1.442.184-2.119.062-.533.11-1.045.138-1.55-1.289.107-2.145.479-2.551 1.108.168-.057.358-.102.568-.129.892-.116 1.543.141 1.618.637.055.363-.253.705-.388.836-.277.269-.626.442-.981.488-.064.008-.129.012-.192.012-.353 0-.69-.121-.949-.3.112 1.973 1.567 4.612 2.283 5.907.153.277.271.498.369.688C35.154 24.163 35.009 23.143 34.847 22.007z"
                    />
                  </svg>
                </div>
                PostgreSQL
              </li>
              <li className="flex items-center flex-col font-semibold">
                <div className="transition-all duration-300 lg:hover:scale-125 drop-shadow-[0px_0px_24px_rgba(0,0,0,0.20)] hover:drop-shadow-[0px_0px_8px_rgba(0,0,0,0.40)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="92px"
                    height="92px"
                  >
                    <path
                      fill="#80deea"
                      d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"
                    />
                    <path
                      fill="#80deea"
                      d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"
                    />
                    <path
                      fill="#80deea"
                      d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"
                    />
                    <circle cx="24" cy="24" r="4" fill="#80deea" />
                  </svg>
                </div>
                React
              </li>
              <li className="flex items-center flex-col font-semibold">
                <div className="transition-all duration-300 lg:hover:scale-125 drop-shadow-[0px_0px_24px_rgba(0,0,0,0.20)] hover:drop-shadow-[0px_0px_8px_rgba(0,0,0,0.40)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="92px"
                    height="92px"
                  >
                    <path
                      fill="#8bc34a"
                      d="M43.982,23.635c0.069-4.261-0.891-9.328-2.891-15.273l-1.568-4.662l-2.13,4.433 c-0.114,0.237-0.244,0.469-0.38,0.698C33.514,5.827,28.974,4,24,4C12.954,4,4,12.954,4,24c0,11.046,8.954,20,20,20s20-8.954,20-20 C44,23.877,43.984,23.758,43.982,23.635z"
                    />
                    <path
                      fill="#fff"
                      d="M39.385 32.558c-3.123 4.302-8.651 4.533-13.854 4.442H18.75h-1.938c4.428-1.593 7.063-1.972 9.754-3.4 5.068-2.665 10.078-8.496 11.121-14.562-1.93 5.836-7.779 10.85-13.109 12.889-3.652 1.393-10.248 2.745-10.248 2.745l-.267-.145C9.573 32.268 9.437 22.214 17.6 18.968c3.574-1.423 6.993-.641 10.854-1.593 4.122-1.012 8.89-4.208 10.83-8.375C41.456 15.667 44.07 26.106 39.385 32.558L39.385 32.558zM15.668 38.445C15.386 38.795 14.955 39 14.505 39c-.823 0-1.495-.677-1.495-1.5s.677-1.5 1.495-1.5c.341 0 .677.118.941.336C16.086 36.855 16.186 37.805 15.668 38.445L15.668 38.445z"
                    />
                  </svg>
                </div>
                Spring Boot
              </li>
              <li className="flex items-center flex-col font-semibold">
                <div className="transition-all duration-300 lg:hover:scale-125 drop-shadow-[0px_0px_24px_rgba(0,0,0,0.20)] hover:drop-shadow-[0px_0px_8px_rgba(0,0,0,0.40)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="92px"
                    height="92px"
                    baseProfile="basic"
                  >
                    <path
                      fill="#9c55d4"
                      d="M7.373,11.443C7.293,9.132,9.094,7,11.529,7h24.946c2.435,0,4.236,2.132,4.155,4.443	c-0.077,2.221,0.023,5.097,0.747,7.443c0.681,2.207,1.801,3.652,3.593,3.981c0.206,0.038,0.363,0.205,0.363,0.415v1.438	c0,0.21-0.157,0.377-0.363,0.415c-1.792,0.328-2.912,1.773-3.593,3.981c-0.724,2.345-0.824,5.222-0.747,7.443	C40.71,38.868,38.909,41,36.475,41H11.529c-2.434,0-4.236-2.132-4.155-4.443c0.077-2.221-0.023-5.097-0.747-7.443	c-0.681-2.207-1.804-3.652-3.596-3.981c-0.206-0.038-0.363-0.205-0.363-0.415v-1.438c0-0.21,0.157-0.377,0.363-0.415	c1.792-0.328,2.915-1.773,3.596-3.981C7.35,16.54,7.451,13.664,7.373,11.443z"
                    />
                    <path
                      fill="#fff"
                      d="M27.073,23.464v-0.028c1.853-0.32,3.299-2.057,3.299-3.97c0-1.352-0.52-2.498-1.504-3.312	c-0.981-0.812-2.357-1.241-3.981-1.241H17.45V33.08h7.475c1.942,0,3.555-0.474,4.663-1.372c1.109-0.899,1.696-2.207,1.696-3.783	C31.283,25.544,29.593,23.756,27.073,23.464z M23.59,22.608h-3.181V17.29h3.784c2.076,0,3.219,0.911,3.219,2.565	C27.413,21.63,26.055,22.608,23.59,22.608z M20.409,24.834h3.759c2.716,0,4.092,0.981,4.092,2.916c0,1.932-1.357,2.953-3.925,2.953	h-3.926V24.834z"
                    />
                  </svg>
                </div>
                Bootstrap
              </li>
              <li className="flex items-center flex-col font-semibold">
                <div className="transition-all duration-300 lg:hover:scale-125 drop-shadow-[0px_0px_24px_rgba(0,0,0,0.25)] hover:drop-shadow-[0px_0px_8px_rgba(0,0,0,0.40)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="92px"
                    height="92px"
                  >
                    <path
                      fill="#00c187"
                      d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"
                    />
                  </svg>
                </div>
                TailwindCSS
              </li>

              <li className="flex items-center flex-col font-semibold">
                <div className="transition-all duration-300 lg:hover:scale-125 drop-shadow-[0px_0px_24px_rgba(0,0,0,0.20)] hover:drop-shadow-[0px_0px_8px_rgba(0,0,0,0.40)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    width="92px"
                    height="92px"
                  >
                    <path
                      fill="#fff"
                      d="M 32 6 C 17.641 6 6 17.641 6 32 C 6 46.359 17.641 58 32 58 C 46.359 58 58 46.359 58 32 C 58 17.641 46.359 6 32 6 z M 32 9 C 44.703 9 55 19.297 55 32 C 55 44.703 44.703 55 32 55 C 19.297 55 9 44.703 9 32 C 9 19.297 19.297 9 32 9 z M 32 12 C 25.195 12 19.180406 15.422859 15.566406 20.630859 C 15.856406 20.630859 16.134766 20.626953 16.384766 20.626953 C 18.505766 20.626953 21.794922 20.375 21.794922 20.375 C 22.885922 20.312 23.008969 21.938266 21.917969 22.072266 C 21.917969 22.072266 20.804031 22.260266 19.582031 22.322266 L 26.958984 44.695312 L 31.384766 31.121094 L 28.25 22.322266 C 27.159 22.259266 26.097656 22.072266 26.097656 22.072266 C 25.006656 22.009266 25.129703 20.312 26.220703 20.375 C 26.220703 20.375 29.578359 20.626953 31.568359 20.626953 C 33.689359 20.626953 36.978516 20.375 36.978516 20.375 C 38.069516 20.312 38.192562 21.938266 37.101562 22.072266 C 37.101562 22.072266 35.979625 22.260266 34.765625 22.322266 L 42.082031 44.568359 L 44.111328 37.65625 C 45.133328 34.96925 45.648438 32.706641 45.648438 30.931641 C 45.648438 28.370641 44.764281 26.650391 43.988281 25.275391 C 42.966281 23.570391 42.021484 22.078047 42.021484 20.373047 C 42.021484 18.624047 43.205359 17.026297 44.943359 16.779297 C 41.451359 13.805297 36.935 12 32 12 z M 49.857422 23.044922 C 49.879422 23.419922 49.888672 23.805031 49.888672 24.207031 C 49.888672 26.304031 49.504562 28.670047 48.351562 31.623047 L 42.517578 48.978516 C 48.198578 45.446516 52 39.167 52 32 C 52 28.778 51.216422 25.742922 49.857422 23.044922 z M 13.660156 24.042969 C 12.597156 26.483969 12 29.172 12 32 C 12 39.729 16.414656 46.434672 22.847656 49.763672 L 13.660156 24.042969 z M 32.369141 33.822266 L 26.5 51.212891 C 28.25 51.714891 30.091 52 32 52 C 34.264 52 36.431891 51.604203 38.462891 50.908203 L 32.369141 33.822266 z"
                    />
                  </svg>
                </div>
                Wordpress
              </li>
              <li className="flex items-center flex-col font-semibold">
                <div className="transition-all duration-300 lg:hover:scale-125 drop-shadow-[0px_0px_24px_rgba(0,0,0,0.1)] hover:drop-shadow-[0px_0px_8px_rgba(0,0,0,0.40)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="92px"
                    height="92px"
                  >
                    <path
                      fill="#01273b"
                      d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5 V37z"
                    />
                    <path
                      fill="#23b2cf"
                      d="M14.1,31.065V15.63c0-0.105,0.045-0.165,0.15-0.165c0.255,0,0.495,0,0.84-0.015 c0.36-0.015,0.735-0.015,1.14-0.03c0.405-0.015,0.84-0.015,1.305-0.03C18,15.375,18.45,15.375,18.9,15.375 c1.23,0,2.25,0.15,3.09,0.465c0.75,0.255,1.44,0.675,2.01,1.23c0.48,0.48,0.855,1.065,1.095,1.71 c0.225,0.63,0.345,1.275,0.345,1.95c0,1.29-0.3,2.355-0.9,3.195c-0.6,0.84-1.44,1.47-2.415,1.83 c-1.02,0.375-2.145,0.51-3.375,0.51c-0.36,0-0.6,0-0.75-0.015c-0.15-0.015-0.36-0.015-0.645-0.015v4.815 c0.015,0.105-0.06,0.195-0.165,0.21c-0.015,0-0.03,0-0.06,0h-2.85C14.16,31.26,14.1,31.2,14.1,31.065z M17.37,18.36v5.04 c0.21,0.015,0.405,0.03,0.585,0.03h0.795c0.585,0,1.17-0.09,1.725-0.27c0.48-0.135,0.9-0.42,1.23-0.795 c0.315-0.375,0.465-0.885,0.465-1.545c0.015-0.465-0.105-0.93-0.345-1.335c-0.255-0.39-0.615-0.69-1.05-0.855 c-0.555-0.225-1.155-0.315-1.77-0.3c-0.39,0-0.735,0-1.02,0.015C17.685,18.33,17.475,18.345,17.37,18.36L17.37,18.36z"
                    />
                    <path
                      fill="#23b2cf"
                      d="M34.8,22.485c-0.45-0.24-0.93-0.405-1.44-0.51c-0.555-0.12-1.11-0.195-1.68-0.195 c-0.3-0.015-0.615,0.03-0.9,0.105c-0.195,0.045-0.36,0.15-0.465,0.3c-0.075,0.12-0.12,0.27-0.12,0.405 c0,0.135,0.06,0.27,0.15,0.39c0.135,0.165,0.315,0.3,0.51,0.405c0.345,0.18,0.705,0.345,1.065,0.495 c0.81,0.27,1.59,0.645,2.31,1.095c0.495,0.315,0.9,0.735,1.185,1.245c0.24,0.48,0.36,1.005,0.345,1.545 c0.015,0.705-0.195,1.41-0.585,1.995c-0.42,0.6-1.005,1.065-1.68,1.335c-0.735,0.315-1.635,0.48-2.715,0.48 c-0.69,0-1.365-0.06-2.04-0.195c-0.525-0.09-1.05-0.255-1.53-0.48c-0.105-0.06-0.18-0.165-0.165-0.285v-2.61 c0-0.045,0.015-0.105,0.06-0.135c0.045-0.03,0.09-0.015,0.135,0.015c0.585,0.345,1.2,0.585,1.86,0.735 c0.57,0.15,1.17,0.225,1.77,0.225c0.57,0,0.975-0.075,1.245-0.21c0.24-0.105,0.405-0.36,0.405-0.63c0-0.21-0.12-0.405-0.36-0.6 c-0.24-0.195-0.735-0.42-1.47-0.705c-0.765-0.27-1.47-0.63-2.13-1.08c-0.465-0.33-0.855-0.765-1.14-1.275 c-0.24-0.48-0.36-1.005-0.345-1.53c0-0.645,0.18-1.26,0.51-1.815c0.375-0.6,0.93-1.08,1.575-1.38 c0.705-0.36,1.59-0.525,2.655-0.525c0.615,0,1.245,0.045,1.86,0.135c0.45,0.06,0.885,0.18,1.29,0.345 c0.06,0.015,0.12,0.075,0.15,0.135c0.015,0.06,0.03,0.12,0.03,0.18v2.445c0,0.06-0.03,0.12-0.075,0.15 C34.935,22.515,34.86,22.515,34.8,22.485z"
                    />
                  </svg>
                </div>
                Photoshop
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
