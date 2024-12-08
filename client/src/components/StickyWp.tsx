import whatsApp from "../assets/icons/whatsapp.svg";

const StickyWP = () => {
    const phoneNumber = '543624142627';
    const message = 'Hola, estoy visitando su página web y me gustaría hacer una consulta. ';
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    

    return (
        <div className="fixed left-5 z-10 md:left-10 md:top-3/4 md:transform md:-translate-y-1/2 md:z-50 top-3/4 md:right-4 sm:w-[64px] sm:h-[64px] w-[60px] h-[60px]">
            <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    src={whatsApp}
                    alt="WhatsApp"
                    className="w-16 h-16 cursor-pointer"
                />
            </a>
        </div>
    );
};

export default StickyWP;
