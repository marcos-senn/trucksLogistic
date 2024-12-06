import gmailLogo from "../assets/icons/gmaillogo.svg";
import instagramLogo from "../assets/icons/instagramlogo.svg";
import whatsappLogo from "../assets/icons/whatsapp.svg";
import facebookLogo from "../assets/icons/facebooklogo.svg";
import logo from "../assets/images/logo.png"

const Footer = () => {

    return (
        <footer className="text-gray-50 px-4 py-5  mx-auto md:px-8 mt-10 bg-blue-900">
            <div className="max-w-lg sm:mx-auto sm:text-center">
                <img
                    src={logo}
                    alt="Logo"
                    className="w-32 sm:mx-auto"
                />
                <p className="leading-relaxed mt-2 text-[15px]">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book.
                </p>
            </div>
            
            <div className="mt-8 items-center justify-between sm:flex">
                <div className="mt-4 sm:mt-0">
                    &copy; 2024 NombreDeLaEmpresa. Todos los derechos
                    reservados.
                </div>
                <div className="mt-6 sm:mt-0">
                    <ul className="flex items-center space-x-4">
                        {[
                            { color: "text-blue-400", src: gmailLogo },
                            {
                                color: "text-blue-700",
                                src: instagramLogo,
                            },
                            { color: "text-blue-500", src: whatsappLogo },
                            { color: "text-red-600", src: facebookLogo },
                        ].map((icon, idx) => (
                            <li
                                key={idx}
                                className="w-8 h-8 flex items-center justify-center"
                            >
                                <a href="javascript:void(0)">
                                    <img
                                        src={icon.src}
                                        alt="Logo"
                                        className="h-12 w-auto"
                                    />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
