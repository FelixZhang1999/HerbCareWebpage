import Image from 'next/image';
import landing1 from '../public/images/landing1.jpg';

export default function Landing() {
    return (
        <section>
            <div className="relative grid max-w-6xl mx-auto px-4 sm:px-6 grid pt-32 pb-10 md:pt-40 md:pb-16">
                <div className="relative max-w-3xl mx-auto text-center pb-12 md:pb-16">
                    <h1 className="h1 mb-4" data-aos="fade-up">HerbCare</h1>
                    <p className="text-xl font-medium text-text-normal mb-8" data-aos="fade-up" data-aos-delay="200">We aim to introduce the healing benefits of traditional Chinese herbals to the world.</p>
                </div>
                <div className="relative flex justify-center items-center" data-aos="fade-up" data-aos-delay="200">
                    <Image className="max-w-full mx-auto md:max-w-none h-auto" src={landing1} width={500} height={500} alt="Features 01" />
                </div>
            </div>
            <div className="flex flex-col items-center justify-between pb-24">
                <div className="grid text-center lg:max-w-5xl lg:w-half lg:mb-0 lg:grid-cols-2 lg:text-left"  data-aos="fade-up">
                    <a
                        href="/posts"
                        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:text-gray-200 hover:border-gray-900 hover:bg-gray-700"
                        rel="noopener noreferrer"
                    >
                        <h2 className={`mb-3 text-4xl font-semibold`}>
                            Posts{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                        </h2>
                        <p className={`m-0 max-w-[30ch] font-medium`}>
                            Learn about traditional Chinese medicine.
                        </p>
                    </a>
        
                    <a
                        href="/products"
                        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:text-gray-200 hover:border-gray-900 hover:bg-gray-700"
                        rel="noopener noreferrer"
                    >
                        <h2 className={`mb-3 text-4xl font-semibold`}>
                        Products{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                        </h2>
                        <p className={`m-0 max-w-[30ch] font-medium`}>
                            Enjoy the healing benefits of traditional Chinese medicine.
                        </p>
                    </a>
                </div>
            </div>
        </section>
    );
}