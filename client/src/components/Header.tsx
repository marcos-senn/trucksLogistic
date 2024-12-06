import electricista from "../assets/images/electricista-trabajando2.webp";
import { useEffect } from 'react';



const Header = () => {
    useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll('.animate-on-scroll');
            elements.forEach((element) => {
                const rect = element.getBoundingClientRect();
                if (rect.top <= window.innerHeight) {
                    element.classList.add('animate-slide-in-left');
                    element.classList.remove('opacity-0');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Ejecuta en la carga inicial

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div id="home" className="relative w-full h-[800px] flex justify-end items-center bg-gray-800">
            <section
                className="relative w-full h-full flex justify-end bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${electricista})` }}
            >
                <div className="absolute left-0 bottom-0 p-4 md:p-6 lg:p-8">
                    <div>
                        <h3 className="text-white text-2xl md:text-3xl lg:text-4xl mb-4 font-medium animate-on-scroll opacity-0" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>
                            Servicios eléctricos para todas tus necesidades
                        </h3>
                        <p className="text-white text-sm md:text-xl lg:text-2xl font-medium text-left animate-on-scroll opacity-0 animate-slide-in-left-delayed" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>
                         con la calidad y confianza que mereces.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Header;
