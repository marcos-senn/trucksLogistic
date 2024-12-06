import Trabajos from "./Trabajos";
const PreFooter = () => {
    return (
        <section className=" text-white bg-black pt-10">
            <div className="mx-auto max-w-screen-xl py-1 lg:flex lg:items-center">
                <div className="w-full flex justify-center items-center flex-col text-center lg:mx-0 mt-5 ">
                    <h2 className="text-bronze font-bold sm:text-3xl transform transition-transform duration-300 ease-in-out hover:scale-105 hover:opacity-80 mb-3 mt-3 sm:mt-0">
                        PARA NOSOTROS LA ELECTRICIDAD ES {" "}
                        <span className="text-white">
                            {" "}
                            MAS QUE CABLES Y CORRIENTE
                        </span>
                    </h2>

                    <p className="mt-2 text-white sm:text-justify font-bold px-4 sm:p-0 ">
                        Dejamos todo en cada trabajo para que no pongas en
                        riesgo lo que más importa.
                    </p>
                </div>
            </div>
            <Trabajos></Trabajos>
        </section>
    );
};

export default PreFooter;
