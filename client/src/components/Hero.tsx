import { useState, useEffect } from "react";
import closeIcon from "../assets/icons/closeSticky.svg"; // Asegúrate de reemplazar con la ruta correcta

const Hero = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Establecer un temporizador para ocultar el aside después de 20 segundos
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 7000); // 7 segundos

        // Limpiar el temporizador si el componente se desmonta antes de que el tiempo haya pasado
        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
    };

    return (
        <div className="bg-black text-white" id="quienesSomos">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                {isVisible && (
                    <aside className=" fixed bottom-4 end-10 z-50 items-center justify-center gap-4 rounded-lg bg-black px-5 py-3 mb-10 text-white hidden sm:flex   animate-colorChange">
                        <p
                            rel="noreferrer"
                            className="text-sm font-bold hover:opacity-75 "
                        >
                            Puedes hablar con nosotros por WhatsApp a través del
                            icono flotante
                            <br />y resolver todas tus dudas rápidamente.
                        </p>

                        <button
                            className="rounded transform transition-transform duration-300 ease-in-out hover:scale-150 hover:opacity-80"
                            onClick={handleClose}
                        >
                            <span className="sr-only">Close</span>
                            <img
                                src={closeIcon}
                                className="w-10 h-10"
                                alt="Close icon"
                            />
                        </button>
                    </aside>
                )}
                <div className="mx-auto max-w-lg text-center">
                    <h2 className="text-white text-3xl font-bold sm:text-4xl">
                        QUIÉNES <span className="text-bronze">SOMOS</span>
                    </h2>
                </div>

                <div className="mt-6 sm:mt-10">
                    <p className="w-full text-gray-300 text-justify mx-auto max-w-screen-lg">
                        Somos un equipo de profesionales de Resistencia, Chaco,
                        compuesto por ingenieros y técnicos especializados en
                        instalaciones eléctricas de alta calidad y
                        confiabilidad. Entendemos la importancia de una
                        infraestructura eléctrica confiable para el
                        funcionamiento óptimo de tu negocio, residencia o
                        industria. Diseñamos e implementamos soluciones
                        personalizadas que se ajustan a tus necesidades
                        específicas, cumpliendo con los más altos estándares de
                        seguridad y calidad. Ofrecemos una amplia gama de
                        servicios, incluyendo instalaciones eléctricas
                        completas, cableado estructurado, iluminación eficiente,
                        sistemas de seguridad, automatización, y más. Sin
                        importar el tamaño o la complejidad de tu proyecto,
                        estamos preparados para brindarte soluciones a medida y
                        resultados excepcionales.
                    </p>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div className="block rounded-xl border border-bronze p-8 shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:opacity-80 hover:border-orange-500/50 hover:shadow-orange-500/50">
                        <h2 className="mt-4 text-xl font-bold text-white">
                            Nuestra Misión
                        </h2>

                        <p className="mt-1 text-sm text-gray-300 text-justify">
                            Ser reconocidos como líderes en el sector de
                            instalaciones eléctricas en Resistencia, Chaco,
                            destacándonos por nuestra excelencia, innovación y
                            compromiso con la calidad y la seguridad, asegurando
                            que cada proyecto que emprendamos supere las
                            expectativas de nuestros clientes y contribuya al
                            desarrollo sostenible de la comunidad.
                        </p>
                    </div>

                    <div className="block rounded-xl border border-bronze p-8 shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:opacity-80 hover:border-orange-500/50 hover:shadow-orange-500/50">
                        <h2 className="mt-4 text-xl font-bold text-white">
                            Nuestra Visión
                        </h2>

                        <p className="mt-1 text-sm text-gray-300 text-justify">
                            Proveer soluciones eléctricas de alta calidad y
                            confiabilidad a nuestros clientes, a través de un
                            equipo de profesionales altamente capacitados y
                            experimentados. Nos enfocamos en diseñar e
                            implementar sistemas eléctricos personalizados que
                            cumplan con los más altos estándares de seguridad y
                            eficiencia, garantizando el correcto funcionamiento
                            de negocios, residencias e industrias.
                        </p>
                    </div>

                    <div className="block rounded-xl border border-bronze p-8 shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:opacity-80 hover:border-orange-500/50 hover:shadow-orange-500/50">
                        <h2 className="mt-4 text-xl font-bold text-white">
                            Nuestros Valores
                        </h2>

                        <p className="mt-1 text-sm text-gray-300">
                            <ul>
                                <li className="mt-2">
                                    <strong>Calidad:</strong> Servicios que
                                    superan altos estándares.
                                </li>
                                <li className="mt-2">
                                    <strong>Seguridad:</strong> Priorizar
                                    ambientes seguros.
                                </li>

                                <li className="mt-2">
                                    <strong>Compromiso:</strong> Satisfacción
                                    del cliente con servicio personalizado.
                                </li>
                                <li className="mt-2">
                                    <strong>Profesionalismo:</strong> Ética y
                                    confiabilidad en cada proyecto.
                                </li>
                                <li className="mt-2">
                                    <strong>Trabajo en Equipo:</strong>{" "}
                                    Colaboración y respeto mutuo.
                                </li>
                                <li className="mt-2">
                                    <strong>Responsabilidad:</strong> Impacto
                                    positivo en comunidad y medio ambiente.
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
