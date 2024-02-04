import Image from 'next/image';
import AiRong from '../public/images/AiRong.jpg';
import AiYe from '../public/images/AiYe.jpg';
import GanJiang from '../public/images/GanJiang.jpg';
import GuiPi from '../public/images/GuiPi.jpg';
import MoYao from '../public/images/MoYao.jpg';
import RuXiang from '../public/images/RuXiang.jpg';

export default function Features() {

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-b border-t border-text-normal">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">All Natural Ingredients</div>
            <h2 className="h2 mb-4">Traditional Chinese Herbal Formula</h2>
            <p className="text-xl text-text-normal">Crafted entirely from traditional Chinese herbal ingredients, this hereditary secret formula has been passed down through generations.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <Image src={GuiPi} width={100} height={100} style={{borderRadius: '50%'}} alt="" />
              <h4 className="h4 mb-2">Gui Pi</h4>
              <p className="text-lg text-gray-400 text-center"></p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <Image src={AiYe} width={100} height={100} style={{borderRadius: '50%'}} alt="" />
              <h4 className="h4 mb-2">Ai Ye</h4>
              <p className="text-lg text-gray-400 text-center"></p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <Image src={AiRong} width={100} height={100} style={{borderRadius: '50%'}} alt="" />
              <h4 className="h4 mb-2">Ai Rong</h4>
              <p className="text-lg text-gray-400 text-center"></p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
              <Image src={RuXiang} width={100} height={100} style={{borderRadius: '50%'}} alt="" />
              <h4 className="h4 mb-2">Ru Xiang</h4>
              <p className="text-lg text-gray-400 text-center"></p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <Image src={MoYao} width={100} height={100} style={{borderRadius: '50%'}} alt="" />
              <h4 className="h4 mb-2">Mo Yao</h4>
              <p className="text-lg text-gray-400 text-center"></p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
              <Image src={GanJiang} width={100} height={100} style={{borderRadius: '50%'}} alt="" />
              <h4 className="h4 mb-2">Gan Jiang</h4>
              <p className="text-lg text-gray-400 text-center"></p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
