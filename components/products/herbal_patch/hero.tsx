import Image from 'next/image';
import product from '/public/images/HerbalPatch.png';

export default function Hero() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">

        {/* Illustration behind hero content */}
        <div className="absolute left-0 bottom-0 -ml-20 hidden lg:block pointer-events-none" aria-hidden="true" data-aos="fade-up" data-aos-delay="400">
          
        </div>

        {/* Hero content */}
        <div className="relative grid pt-32 pb-10 md:pt-40 md:pb-16">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 mb-4" data-aos="fade-up">Pain Relief Herbal Patches</h1>
            <p className="text-xl text-text-normal mb-8 font-medium" data-aos="fade-up" data-aos-delay="200">Are you struggling with chronic pains that affect your daily life? Introducing our pain relief herbal patches, offering natural and effective solutions for a variety of chronic pain issues.</p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div data-aos="fade-up" data-aos-delay="600">
                <a className="btn text-white bg-gray-700 hover:bg-gray-900 hover:shadow-lg w-full sm:w-auto sm:ml-4" href="https://www.amazon.com/dp/B0CW11FXN1?ref=myi_title_dp" role="button" target="_blank" rel="noreferrer" aria-label="Go To Retail Page">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center items-center" data-aos="fade-up" data-aos-delay="200">
            <Image className="max-w-full mx-auto md:max-w-none h-auto" src={product} width={500} height={500} alt="Features 01" />
          </div>
        </div>

      </div>
    </section>
  )
}
