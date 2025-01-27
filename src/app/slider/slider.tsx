'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Slide {
    id: number;
    icon: string;
    title: string;
    description: string;
}

interface SliderProps {
    slides: Slide[];
}

export default function Slider({ slides }: SliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!slides || slides.length === 0) {
        return <div className="text-center text-gray-500">Слайды не найдены.</div>;
    }

    const handleNext = () => setCurrentIndex((currentIndex + 1) % slides.length);
    const handlePrev = () =>
        setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);

    return (
        <div className="relative w-full max-w-4xl mx-auto overflow-hidden bg-gray-800 rounded-lg shadow-lg">
            <div className="relative h-64 sm:h-80 md:h-96 flex items-center justify-center">
                <AnimatePresence mode="wait">
                    {slides.map((slide, index) => (
                        index === currentIndex && (
                            <motion.div
                                key={slide.id}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5 }}
                                className="absolute flex flex-col w-80 h-40 bg-white rounded-2xl p-6 shadow-md"
                            >
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 bg-purple-100 flex items-center justify-center rounded-lg">
                                        <motion.img className="w-6 h-6 text-purple-600" src={slide.icon} />
                                    </div>
                                    <h3 className="ml-4 text-lg font-semibold text-gray-800">
                                        {slide.title}
                                    </h3>
                                </div>
                                {/* Описание */}
                                <p className="text-sm text-gray-500">
                                    {slide.description}
                                </p>
                            </motion.div>
                        )
                    ))}
                </AnimatePresence>
            </div>

            <div className="flex justify-center items-center gap-2">
                {slides.map((_, index) => {
                    const isActive = index === currentIndex;
                    const isNext = index === (currentIndex + 1) % slides.length;
                    const isLast = currentIndex === (slides.length - 1);
                    return (
                        <div key={index} className="relative flex items-center">
                            <div
                                className={`absolute flex items-center h-3 transition-all duration-300 ${isActive && !isLast ? 'bg-gray-400' : ''}`}
                                style={{
                                    width: 'calc(260%)',
                                    borderRadius: '50px',
                                }}
                            >
                                <div
                                    className={`transition-all duration-300 ${isActive ? 'bg-blue-500' : 'bg-transparent'}`}
                                    style={{
                                        width: (isActive && isLast) ? '40%' : '60%',
                                        height: '100%',
                                        borderRadius: '50px',
                                    }}
                                ></div>
                            </div>

                            <motion.div
                                className={`h-3 w-3 rounded-full transition-all duration-300 ${isActive ? 'bg-blue-500' : 'bg-gray-400'}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                    );
                })}
            </div>

            <button
                onClick={handlePrev}
                aria-label="Предыдущий слайд"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-700 bg-opacity-70 p-3 rounded-full hover:bg-opacity-90 transition"
            >
                ←
            </button>
            <button
                onClick={handleNext}
                aria-label="Следующий слайд"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-700 bg-opacity-70 p-3 rounded-full hover:bg-opacity-90 transition"
            >
                →
            </button>
        </div>
    );
}
