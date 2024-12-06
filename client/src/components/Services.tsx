import React from "react";
import StickyWP from "./StickyWp";
import relevamientoYasesoramiento from "../assets/images/1.avif";
import ampliaciones from "../assets/images/2.avif";
import proyectos from "../assets/images/4.avif";
import instalaciones from "../assets/images/3.avif";
import mantenimientoYreparaciones from "../assets/images/5.avif";
import urgencias from "../assets/images/6.avif";

const App: React.FC = () => (
    <div
        id="services"
        className="w-full flex flex-col items-center justify-center pt-5"
    >
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="text-center">
                    <h2 className="text-center pb-5 font-bold text-4xl transform transition-transform duration-300 ease-in-out hover:scale-105 hover:opacity-80">
                        NUESTROS <span className="text-bronze">SERVICIOS</span>
                    </h2>
                </div>

                <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <li>
                        <div className="group block overflow-hidden rounded-xl shadow-xl">
                            <div className="overflow-hidden rounded-t-xl">
                                <img
                                    src={relevamientoYasesoramiento}
                                    alt=""
                                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                />
                            </div>
                            <div className="relative bg-black pt-3 transition duration-500 group-hover:scale-105">
                                <h3 className="text-sm text-white text-center px-4 pb-3">
                                    Ofrecemos servicios de relevamiento y
                                    asesoramiento técnico para optimizar tus
                                    instalaciones eléctricas y asegurar su
                                    correcto funcionamiento.
                                </h3>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="group block overflow-hidden rounded-xl shadow-xl">
                            <div className="overflow-hidden rounded-t-xl">
                                <img
                                    src={proyectos}
                                    alt=""
                                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                />
                            </div>
                            <div className="relative bg-black pt-3 transition duration-500 group-hover:scale-105">
                                <h3 className="text-sm text-white text-center px-4 pb-3">
                                    Desarrollamos proyectos eléctricos
                                    completos, desde el diseño hasta la
                                    ejecución, garantizando seguridad y
                                    eficiencia junto con las habilitaciones
                                    necesarias.
                                </h3>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="group block overflow-hidden rounded-xl shadow-xl">
                            <div className="overflow-hidden rounded-t-xl">
                                <img
                                    src={ampliaciones}
                                    alt=""
                                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                />
                            </div>
                            <div className="relative bg-black pt-3 transition duration-500 group-hover:scale-105">
                                <h3 className="text-sm text-white text-center px-4 pb-3">
                                    Llevamos a cabo ampliaciones de sistemas
                                    eléctricos existentes sin comprometer la
                                    seguridad de la instalación existente
                                    siguiendo los deseos del cliente en cada
                                    paso.
                                </h3>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="group block overflow-hidden rounded-xl shadow-xl">
                            <div className="overflow-hidden rounded-t-xl">
                                <img
                                    src={mantenimientoYreparaciones}
                                    alt=""
                                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                />
                            </div>
                            <div className="relative bg-black pt-3 transition duration-500 group-hover:scale-105">
                                <h3 className="text-sm text-white text-center px-4 pb-3 transition duration-500 group-hover:scale-105">
                                    Proveemos mantenimiento preventivo y
                                    correctivo, así como reparaciones para
                                    mantener tus instalaciones eléctricas en
                                    perfecto estado ante cualquier falla.
                                </h3>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="group block overflow-hidden rounded-xl shadow-xl">
                            <div className="overflow-hidden rounded-t-xl">
                                <img
                                    src={instalaciones}
                                    alt=""
                                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                />
                            </div>
                            <div className="relative bg-black pt-3 transition duration-500 group-hover:scale-105">
                                <h3 className="text-sm text-white text-center px-4 pb-3">
                                    Realizamos instalaciones eléctricas de
                                    cualquier componente, asegurando que cumplan
                                    con los más altos estándares de calidad y
                                    seguridad en cada instalción.
                                </h3>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="group block overflow-hidden rounded-xl shadow-xl">
                            <div className="overflow-hidden rounded-t-xl">
                                <img
                                    src={urgencias}
                                    alt=""
                                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                />
                            </div>
                            <div className="relative bg-black pt-3 transition duration-500 group-hover:scale-105">
                                <h3 className="text-sm text-white text-center px-4 pb-3">
                                    Atendemos urgencias eléctricas 24/7 para
                                    resolver cualquier fallo o avería en tus
                                    instalaciones de manera rápida y eficiente.
                                </h3>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        <StickyWP></StickyWP>
    </div>
);

export default App;
