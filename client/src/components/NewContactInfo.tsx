const ContactInfo = () => {
    const contactMethods = [
        {
            icon: (
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
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                </svg>
            ),
            contact: "Merida Mexico, direccion falsa 123",
            title: "Nuestras oficinas",
        },
        {
            icon: (
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
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                </svg>
            ),
            contact: "+1 (555) 000-000",
            title: "Telefono de contacto",
        },
        {
            icon: (
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
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                </svg>
            ),
            contact: "support@example.com",
            title: "Correo Electronico",
        },
    ];

    return (
        <div>
            {/* Contact Section */}
            <main className="mt-12 max-w-screen-xl mx-auto px-4 text-gray-600">
                <div className="flex justify-center items-center">
                    <h2 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
                        Contacto
                    </h2>
                </div>
                <div className=" space-y-3 flex flex-col justify-center items-center">
                    <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Dejanos saber como podemos ayudarte
                    </p>
                    <div>
                        <form className="max-w-sm mx-auto ml-0">
                            <label
                                htmlFor="message"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Déjanos tu mensaje y cómo contactarte, y
                                responderemos a la brevedad...
                            </label>
                            <textarea
                                id="message"
                                rows="4"
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Mensaje..."
                            ></textarea>
                            <button
                                type="submit"
                                className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Enviar mensaje
                            </button>
                        </form>
                    </div>
                </div>
                <div className="flex justify-center items-center flex-col mt-5">
                    <p>
                        Ademas podes contactarnos de las siguientes maneras
                        Estamos aqui para ayudarte a responder cualquier
                        pregunta que tengas y encantado de atarnderte.
                    </p>
                    <ul className="mt-12 flex flex-wrap gap-x-12 gap-y-6 items-center lg:gap-x-24">
                        {contactMethods.map((item, idx) => (
                            <li key={idx}>
                                <h4 className="text-gray-800 text-lg font-medium">
                                    {item.title}
                                </h4>
                                <div className="mt-3 flex items-center gap-x-3">
                                    <div className="flex-none text-gray-400">
                                        {item.icon}
                                    </div>
                                    <p>{item.contact}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </main>
        </div>
    );
};

export default ContactInfo;
