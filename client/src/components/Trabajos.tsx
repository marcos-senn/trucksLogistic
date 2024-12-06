import primeraImagen from "../assets/images/trabajos/1.avif";
import segundaImagen from "../assets/images/trabajos/2.avif";
import terceraImagen from "../assets/images/trabajos/3.avif";
import cuartaImagen from "../assets/images/trabajos/4.avif";
import sextaImagen from "../assets/images/trabajos/6.avif";
import septimaImagen from "../assets/images/trabajos/7.avif";
import octavaImagen from "../assets/images/trabajos/8.avif";
import planos from "../assets/images/trabajos/planos.avif";
import bomba from "../assets/images/trabajos/bomba.avif"

const Trabajos = () => {
    return (
        <section id="trabajos">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
                <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Primera Imagen */}
                    <li className="aspect-square flex items-center justify-center">
                        <img
                            src={primeraImagen}
                            alt=""
                            className="w-full h-full object-cover rounded-lg transition-transform duration-500 ease-out transform hover:scale-105"
                        />
                    </li>

                    {/* Segunda Imagen */}
                    <li className="aspect-square flex items-center justify-center">
                        <img
                            src={segundaImagen}
                            alt=""
                            className="w-full h-full object-cover rounded-lg transition-transform duration-500 ease-out transform hover:scale-105"
                        />
                    </li>

                    {/* Imagen Planos */}
                    <li className="aspect-square flex items-center justify-center">
                        <img
                            src={planos}
                            alt=""
                            className="w-full h-full object-cover rounded-lg transition-transform duration-500 ease-out transform hover:scale-105"
                        />
                    </li>

                    {/* Cuarta Imagen */}
                    <li className="aspect-square flex items-center justify-center">
                        <img
                            src={cuartaImagen}
                            alt=""
                            className="w-full h-full object-cover rounded-lg transition-transform duration-500 ease-out transform hover:scale-105"
                        />
                    </li>

                    {/* Tercera Imagen */}
                    <li className="aspect-square flex items-center justify-center">
                        <img
                            src={terceraImagen}
                            alt=""
                            className="w-full h-full object-cover rounded-lg transition-transform duration-500 ease-out transform hover:scale-105"
                        />
                    </li>

                    {/* Sexta Imagen */}
                    <li className="aspect-square flex items-center justify-center">
                        <img
                            src={sextaImagen}
                            alt=""
                            className="w-full h-full object-cover rounded-lg transition-transform duration-500 ease-out transform hover:scale-105"
                        />
                    </li>

                    {/* Imagen Bomba */}
                    <li className="aspect-square flex items-center justify-center">
                        <img
                            src={bomba}
                            alt=""
                            className="w-full h-full object-cover rounded-lg transition-transform duration-500 ease-out transform hover:scale-105"
                        />
                    </li>

                    {/* Octava Imagen */}
                    <li className="aspect-square flex items-center justify-center">
                        <img
                            src={octavaImagen}
                            alt=""
                            className="w-full h-full object-cover rounded-lg transition-transform duration-500 ease-out transform hover:scale-105"
                        />
                    </li>

                    {/* Séptima Imagen */}
                    <li className="aspect-square flex items-center justify-center">
                        <img
                            src={septimaImagen}
                            alt=""
                            className="w-full h-full object-cover rounded-lg transition-transform duration-500 ease-out transform hover:scale-105"
                        />
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Trabajos;
