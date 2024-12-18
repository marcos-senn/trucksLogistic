import Service from "./Service";
import SlideInFromLeft from "../transitions/fromLeft";

const OurServices = () => {
    return (
        <section>
            <div className="max-w-screen-xl mx-auto px-4 py-10 text-gray-600 md:px-8">
                <SlideInFromLeft>
                    <div className="space-y-5 max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
                                NUESTROS SERVICIOS
                            </span>
                        </h1>
                    </div>
                </SlideInFromLeft>
            </div>
            <Service></Service>
        </section>
    );
};

export default OurServices;
