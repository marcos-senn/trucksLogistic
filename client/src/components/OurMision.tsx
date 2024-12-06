const OurMision = () => {
    return (
        <section className="bg-gray-50">
            <div className="max-w-screen-xl mx-auto px-4 py-20 text-gray-600 md:px-8">
                <div className="space-y-5 max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
                        
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
                            QUIENES SOMOS
                        </span>
                    </h1>
                    <p className="max-w-2xl mx-auto">
                        somos una empresa de trasporte de productos cocainomanos  balblalbalba
                    </p>
                </div>
                <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                        {
                            title: "Nuestra Misión",
                            description:
                                "Encompassing today’s website design technology to integrate and build solutions relevant to your business.",
                        },
                        {
                            title: "Nuestra Visión",
                            description:
                                "Share relevant, engaging, and inspirational brand messages to create a connection with your audience.",
                        },
                        {
                            title: "Nuestros Valores",
                            description:
                                "Let us help you level up your search engine game, explore our solutions for digital marketing for your business.",
                        },
                    ].map((item, index) => (
                        <article
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-lg text-center dark:bg-gray-800"
                        >
                            <div className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-indigo-500 rounded-md">
                                <svg
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    className="w-6 h-6"
                                    viewBox="0 0 1792 1792"
                                >
                                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                                </svg>
                            </div>
                            <h3 className="mt-4 text-2xl font-semibold text-gray-700 dark:text-white">
                                {item.title}
                            </h3>
                            <p className="mt-2 text-gray-500 text-md dark:text-gray-300">
                                {item.description}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurMision;
