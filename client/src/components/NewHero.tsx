import NavBar from "./NavBar";
import trucksBg from "../assets/images/trucksSquad.jpg";

export default () => {
    return (
        <div>
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
                            <h2 className="text-3xl text-white font-extrabold mx-auto md:text-5xl">
                                NombreDeLaEmpresa
                            </h2>
                            <p className="max-w-2xl mx-auto text-gray-100">
                                Construyendo juntos tu futuro.
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
                </section>
            </div>
        </div>
    );
};
