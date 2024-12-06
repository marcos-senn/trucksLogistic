import { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";
import StickyWP from "./StickyWp";
import trucksBg from "../assets/images/trucks1.jpg";

export default () => {
    const [state, setState] = useState(false);

    // Replace javascript:void(0) paths with your paths
    const navigation = [
        { title: "Home", path: "javascript:void(0)" },
        { title: "Quienes somos", path: "javascript:void(0)" },
        { title: "Nuestros servicios", path: "javascript:void(0)" },
        { title: "Nuestro equipo", path: "javascript:void(0)" },
        { title: "Contacto", path: "javascript:void(0)" },
    ];

    useEffect(() => {
        document.onclick = (e) => {
            const target = e.target;
            if (!target.closest(".menu-btn")) setState(false);
        };
    }, []);

    const Brand = () => (
        <div className="flex items-center justify-between py-5 md:block">
            <a href="javascript:void(0)">
                <img src={logo} width={120} height={50} alt="Float UI logo" />
            </a>
            <div className="md:hidden">
                <button
                    className="menu-btn text-gray-400 hover:text-gray-300"
                    onClick={() => setState(!state)}
                >
                    {state ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    )}
                </button>
            </div>
        </div>
    );

    return (
        <div className="relative bg-cover bg-center bg-no-repeat"
        style={{
            backgroundImage: `url(${trucksBg})`
        }}>
            <StickyWP></StickyWP>
            <header >
                <div className={`md:hidden ${state ? "mx-2 pb-5" : "hidden"}`}>
                    <Brand />
                </div>
                <nav
                    className={`pb-5 md:text-sm ${
                        state
                            ? "absolute z-20 top-0 inset-x-0 bg-gray-800 rounded-xl mx-2 mt-2 md:mx-0 md:mt-0 md:relative md:bg-transparent"
                            : ""
                    }`}
                >
                    <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
                        <Brand />
                        <div
                            className={`flex-1 items-center mt-8 md:mt-0 md:flex ${
                                state ? "block" : "hidden"
                            } `}
                        >
                            <ul className="flex-1 justify-end items-center md:flex md:space-x-6 md:space-y-0">
                                {navigation.map((item, idx) => {
                                    return (
                                        <li
                                            key={idx}
                                            className="text-white hover:text-orange-500 font-bold text-xl"
                                        >
                                            <a
                                                href={item.path}
                                                className="block"
                                            >
                                                {item.title}
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <section
                
            >
                <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
                    <div className="space-y-5 max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl text-white font-extrabold mx-auto md:text-5xl">
                            Logra tus objetivos con NombreDeLaEmpresa
                        </h2>
                        <p className="max-w-2xl mx-auto text-gray-400">
                            Construye tu futuro con nosotros. Ayudamos a bla bla
                            bla bla
                        </p>

                        <div className="flex justify-center items-center gap-x-4 text-gray-400 text-sm">
                            <p>
                                <span className="text-gray-100"></span> Más de
                                200 usuarios ya trabajaron junto a nosotros
                                logrando resultados increíbles
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
                    style={{
                        background:
                            "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
                    }}
                ></div>
            </section>

            <div className="bg-indigo-600">
                <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-center text-white md:px-8">
                    <div className="flex gap-x-4">
                        <div className="w-10 h-10 flex-none rounded-lg bg-indigo-800 flex items-center justify-center">
                            <svg
                                className="w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"
                                />
                            </svg>
                        </div>
                        <p className="py-2 font-medium">
                            Podes comunicarte con nosotros directamente haciendo
                            click en el icono flotante a tu izquierda{" "}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
