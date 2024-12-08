import NavBar from "./NavBar";
import trucksBg from "../assets/images/trucksSquad.jpg";

export default () => {
    return (
        <div>
            {/* Fondo de la navbar y la sección */}
            <div
                className={`top-0 left-0 w-full bg-bottom bg-no-repeat z-50`}
                style={{
                    backgroundImage: `url(${trucksBg})`,
                    height:700
                }}
            >
                <header className="w-full fixed top-0 z-50">
                    <NavBar />
                </header>

                <section className="relative pt-52">
                    <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
                        <div className="space-y-5 max-w-4xl mx-auto text-center">
                            <h2 className="text-4xl text-white font-extrabold mx-auto md:text-5xl">
                                Logra tus objetivos con NombreDeLaEmpresa
                            </h2>
                            <p className="max-w-2xl mx-auto text-gray-100">
                                Construye tu futuro con nosotros. Ayudamos a bla
                                bla bla bla
                            </p>
                            <div className="flex justify-center items-center gap-x-4 text-gray-100 text-sm">
                                <p>
                                    <span className="text-gray-100"></span> Más
                                    de 200 usuarios ya trabajaron junto a
                                    nosotros logrando resultados increíbles
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
            </div>
        </div>
    );
};
