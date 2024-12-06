import React, { useState } from "react";
import instagramIcon from "../assets/iconsContact/instagram.svg";
import locationIcon from "../assets/iconsContact/location.svg";
import mailIcon from "../assets/iconsContact/mail.svg";
import phoneIcon from "../assets/iconsContact/phone.svg";
import closeIcon from "../assets/icons/closeSticky.svg";

interface ContactInfoProps {
    classNameName?: string;
}

const ContactInfo: React.FC<ContactInfoProps> = () => {
    // Estado para controlar la visibilidad del popup
    const [isPopupVisible, setPopupVisible] = useState(true);

    // Función para cerrar el popup
    const closePopup = () => {
        setPopupVisible(false);
    };

    return (
        <section
            className=" relative px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 bg-white"
            id="contacto"
        >
            <div className="w-full mt-20 sm:mt-5">
                <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-1 lg:items-center lg:gap-x-16">
                    <div className="w-full flex justify-center items-center flex-col text-center lg:mx-0 ">
                        <h2 className="text-black font-bold text-3xl transform transition-transform duration-300 ease-in-out hover:scale-105 hover:opacity-80 mb-3 mt-3 sm:mt-0">
                            MEDIOS{" "}
                            <span className="text-bronze"> DE CONTACTO</span>
                        </h2>

                        <p className="block sm:hidden mt-4 text-sm font-bold text-center text-bronze animate-pulse transform transition-transform duration-500 ease-in-out hover:scale-105">
                            ¡Contactanos y pedí tu presupuesto! Nos adaptamos a todas tus necesidades.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 text-black">
                        <a href={"mailto:contacto@seric.com.ar"}>
                            <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:bg-zinc-800  hover:text-bronze hover:shadow-orange-500/50">
                                <div className="flex flex-col items-center justify-center">
                                    <div className="inline-block rounded-lg p-3">
                                        <img
                                            src={mailIcon}
                                            className="w-16"
                                            alt="sericlogo"
                                        />
                                    </div>
                                    <h2 className="mt-4 text-xl font-bold text-center">
                                        contacto@seric.com.ar
                                    </h2>
                                </div>
                            </div>
                        </a>

                        <a href="https://www.instagram.com/seric.rcia/">
                            <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:bg-zinc-800  hover:text-bronze hover:shadow-orange-500/50">
                                <div className="flex flex-col items-center justify-center">
                                    <span className="inline-block rounded-lg p-3">
                                        <img
                                            src={instagramIcon}
                                            className="w-16"
                                            alt="sericlogo"
                                        />
                                    </span>
                                    <h2 className="mt-4 text-xl font-bold text-center">
                                        seric.rcia
                                    </h2>
                                </div>
                            </div>
                        </a>

                        <a href="tel:+543624142627">
                            <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:bg-zinc-800  hover:text-bronze hover:shadow-orange-500/50">
                                <div className="flex flex-col items-center justify-center">
                                    <span className="inline-block rounded-lg p-3">
                                        <img
                                            src={phoneIcon}
                                            className="w-16"
                                            alt="sericlogo"
                                        />
                                    </span>
                                    <h2 className="mt-4 text-xl font-bold text-center">
                                        3624142627 / 3624142657
                                    </h2>
                                </div>
                            </div>
                        </a>

                        <a href="https://maps.app.goo.gl/q8GBbWVMYqFEnPis8">
                            <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:bg-zinc-800  hover:text-bronze hover:shadow-orange-500/50">
                                <div className="flex flex-col items-center justify-center">
                                    <span className="inline-block rounded-lg p-3">
                                        <img
                                            src={locationIcon}
                                            className="w-16"
                                            alt="sericlogo"
                                        />
                                    </span>
                                    <h2 className="mt-4 text-xl font-bold text-center">
                                        Resistencia, Chaco.
                                    </h2>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            

            {/* Ventana emergente */}
            {isPopupVisible && (
                <div className="hidden sm:flex absolute top-1 sm:left-1/2 sm:transform sm:-translate-x-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 z-50 animate-bounceIn">
                    <div className="relative flex items-center justify-between gap-4 bg-black px-6 py-3 text-white rounded-lg animate-colorChange">
                        <p className="text-sm font-medium">
                            ¡Contactanos y pedí tu presupuesto! Nos adaptamos a todas tus necesidades.
                        </p>

                        <button
                            aria-label="Close"
                            onClick={closePopup}
                            className="rounded transform transition-transform duration-300 ease-in-out hover:scale-150 hover:opacity-80"
                        >
                            <img
                                src={closeIcon}
                                className="sm:h-10 sm:w-10 h-20 w-20"
                                alt="Cerrar"
                            />
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ContactInfo;
