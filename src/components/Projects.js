import Image1 from './New_image.png';
import Image2 from './Old_image.png';

export default function Projects() {
    return (
        <section id="projects" className="my-20 w-full flex flex-col gap-10 items-center max-w-5xl mx-auto">
            <h2 className="text-5xl text-red-500 font-bold text-center">My Projects</h2>

            {/* Project 1 */}
            <div className="p-10 bg-red-200 flex flex-col lg:flex-row gap-5 items-center max-w-5xl mx-auto shadow transition-transform hover:shadow-xl hover:scale-[102%] w-full">
                <div className="w-80 rounded overflow-hidden">
                    <a href="#Project 1" aria-label="Traffic Violation Detection Project">
                        <img src={Image2} alt="Traffic Violation Detection Project" className="w-full h-auto rounded bg-cover" />
                    </a>
                </div>

                <div className="flex flex-col gap-4 justify-center text-justify flex-1">
                    <h3 className="font-bold text-3xl text-center">
                        <a href="#Project 1" className="hover:underline">
                            Project 1 - Traffic Violation Detection
                        </a>
                    </h3>
                    <p>
                        Managing traffic and ensuring road rules compliance in busy cities is a significant challenge. Traffic violations often lead to accidents and delays. To address this issue, automated systems have been developed to detect traffic rule violations.
                    </p>
                    <p>
                        This project explores various technologies, including cameras, sensors, and machine learning algorithms, comparing traditional methods with modern advancements. It also addresses challenges such as adverse weather conditions, obstructed views, and the need for real-time performance.
                    </p>
                    <p>
                        Additionally, this project examines privacy concerns related to the use of surveillance cameras in traffic violation detection systems.
                    </p>
                </div>
            </div>

            {/* Project 2 */}
            <div className="p-10 bg-red-200 flex flex-col lg:flex-row gap-5 items-center max-w-5xl mx-auto shadow transition-transform hover:shadow-xl hover:scale-[102%] w-full">
                <div className="w-80 rounded overflow-hidden">
                    <a href="#Project 2" aria-label="Hands-Free Explorer Project">
                        <img src={Image1} alt="Hands-Free Explorer Project" className="w-full h-auto rounded bg-cover" />
                    </a>
                </div>

                <div className="flex flex-col gap-4 justify-center  text-justify flex-1">
                    <h3 className="font-bold text-3xl text-center">
                        <a href="#Project 2" className="hover:underline">
                            Project 2 - Hands-Free Explorer: Traveling Without Baggage
                        </a>
                    </h3>
                    <p>
                        Traveling light is crucial for a hassle-free journey. A common problem for travelers is finding a place to store their baggage when arriving in a city early or after checking out of their accommodations.
                    </p>
                    <p>
                        The "Hands-Free Explorer" app connects travelers with businesses like coffee shops, restaurants, and gift shops offering secure short-term storage for luggage. This not only allows travelers to explore cities unencumbered but also benefits local businesses by utilizing underused storage space.
                    </p>
                    <p>
                        By fostering exploration of neighborhoods and increasing foot traffic, this app supports local economies while providing a seamless solution for travelers.
                    </p>
                </div>
            </div>
        </section>
    );
}
