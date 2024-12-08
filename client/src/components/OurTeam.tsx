import AnimatedSection from "../transitions/scroll";
import SlideInFromLeft from "../transitions/fromLeft";

const OurTeam = () => {
    const team = [
        {
            avatar: "https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
            name: "Martiana Dialan",
            title: "CEO",
        },
        {
            avatar: "https://images.unsplash.com/photo-1623605931891-d5b95ee98459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80",
            name: "Michael Colorand",
            title: "TRS",
        },
    ];

    return (
        <div className="">
            <SlideInFromLeft>
                <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                    <div className="max-w-xl mx-auto sm:text-center text-center">
                        <h1 className="text-4xl font-extrabold sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5] ">
                            NUESTRO EQUIPO
                        </h1>
                        <p className="text-gray-600 mt-3">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown.
                        </p>
                    </div>
                </div>
            </SlideInFromLeft>
            <AnimatedSection>
                <div className="mt-12 flex justify-around">
                    <ul className="flex flex-wrap gap-32 justify-center">
                        {team.map((item, idx) => (
                            <li
                                key={idx}
                                className="flex flex-col items-center"
                            >
                                {/* Avatar */}
                                <div className="w-32 h-32 rounded-xl overflow-hidden shadow-md">
                                    <img
                                        src={item.avatar}
                                        className="w-full h-full object-cover"
                                        alt={item.name}
                                    />
                                </div>
                                {/* Name and Title */}
                                <div className="mt-4 text-center">
                                    <h4 className="text-lg text-gray-700 font-semibold">
                                        {item.name}
                                    </h4>
                                    <p className="text-indigo-600">
                                        {item.title}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </AnimatedSection>
        </div>
    );
};

export default OurTeam;
