import { Slide } from './types';
import Image from "next/image";

interface SliderSlideProps {
    slide: Slide;
    isMobile: boolean;
}

export default function SliderSlide({ slide, isMobile }: SliderSlideProps) {
    return (
        <div className="flex flex-col w-full h-full bg-[#F0F0F0] rounded-[8px] p-[24px] overflow-hidden">
            {isMobile ? (
                <>
                    <div className="flex items-center mb-[60px]">
                        <div className="w-[60px] h-[60px] flex items-center justify-center mr-[24px]">
                            <Image className="w-[60px] h-[60px] text-purple-600" src={slide.icon} alt="Slide icon" />
                        </div>
                        <h3 className="font-pp text-[24px] font-[400] leading-[28px] text-black text-left underline-offset-auto decoration-slice max-w-full overflow-hidden text-ellipsis">
                            {slide.title}
                        </h3>
                    </div>
                    <p className="font-pp text-[14px] font-[400] leading-[20px] tracking-[0.02em] text-black text-left underline-offset-auto decoration-slice max-w-full overflow-hidden text-ellipsis">
                        {slide.description}
                    </p>
                </>
            ) : (
                <div className="relative h-full">
                    <div className="absolute top-0 left-0 w-[60px] h-[60px] flex items-center justify-center">
                        <Image className="w-[60px] h-[60px] text-purple-600" src={slide.icon} alt="Slide icon" />
                    </div>
                    <div className="absolute bottom-0 left-0">
                        <h3 className="font-pp text-[24px] font-[400] leading-[28px] text-black text-left underline-offset-auto decoration-slice max-w-full overflow-hidden text-ellipsis">
                            {slide.title}
                        </h3>
                    </div>
                </div>
            )}
        </div>
    );
}