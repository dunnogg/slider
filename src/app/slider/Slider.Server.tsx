import { Slide, SliderProps } from './types';
import SliderSlide from './SliderSlide';

export default function SliderServer({ slides }: SliderProps) {
    if (!slides?.length) {
        return <div className="text-center text-gray-500">Слайды не найдены.</div>;
    }

    return (
        <div className="relative overflow-hidden" aria-label="Слайдер">
            <div className="swiper-wrapper">
                {slides.map((slide: Slide) => (
                    <article
                        key={slide.id}
                        className="swiper-slide"
                        role="group"
                        aria-roledescription="slide"
                    >
                        <SliderSlide slide={slide} isMobile={false} />
                    </article>
                ))}
            </div>
        </div>
    );
}