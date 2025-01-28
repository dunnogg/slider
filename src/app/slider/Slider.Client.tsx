'use client';
/* eslint-disable */
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import SliderSlide from './SliderSlide';
import {Slide, SliderProps} from './types';

export default function SliderClient({ slides }: SliderProps) {
    const [isMobile, setIsMobile] = useState(false);
    const [swiperInstance, setSwiperInstance] = useState<any | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleSlideChange = (swiper: any) => {
        setCurrentIndex(swiper.realIndex);
    };

    if (!slides || slides.length === 0) {
        return <div className="text-center text-gray-500">Слайды не найдены.</div>;
    }

    return (
        <div className="relative overflow-hidden">
            {isMobile && (
                <div className="flex items-center gap-2 p-0 pt-0 pb-2 pl-[5vw]">
                    {slides.map((_, index) => {
                        const isActive = index === currentIndex;
                        const isLast = currentIndex === (slides.length - 1);
                        const isMoreThan3Remaining = currentIndex <= (slides.length - 3)
                        return (
                            <div key={index} className="relative flex items-center" onClick={() => swiperInstance?.slideTo(index)}>
                                <div
                                    className={`absolute flex items-center h-3 transition-all duration-300 ${isActive && !isLast ? 'bg-[#CCCCCC]' : ''}`}
                                    style={{
                                        width: isMoreThan3Remaining ? '420%' : '260%',
                                        borderRadius: '50px',
                                    }}
                                >
                                    <div
                                        className={`z-10 transition-all duration-300 ${isActive ? 'bg-black' : 'bg-transparent'}`}
                                        style={{
                                            width: (isActive && isLast) ? '40%' : '60%',
                                            height: '100%',
                                            borderRadius: '50px',
                                        }}
                                    ></div>
                                </div>

                                <div
                                    className={`h-3 w-3 rounded-full transition-all duration-300 ${isActive ? 'bg-black' : 'bg-[#CCCCCC]'}`}
                                />
                            </div>
                        );
                    })}
                </div>
            )}

            <Swiper
                modules={[Navigation, A11y]}
                spaceBetween={50}
                slidesPerView={isMobile ? 1 : 'auto'}
                onSwiper={(swiper) => setSwiperInstance(swiper)}
                onSlideChange={handleSlideChange}
                loop={true}
                style={{ width: isMobile ? '90vw' : '100%', overflow: 'hidden' }}
            >
                    <>
                        {slides.map((slide: Slide) => (
                            <SwiperSlide key={slide.id} style={{ width: isMobile ? '90vw' : '412px', height: isMobile ? 'auto' : '256px' }}>
                                <SliderSlide slide={slide} isMobile={isMobile} />
                            </SwiperSlide>
                        ))}
                    </>
            </Swiper>
        </div>
    );
}