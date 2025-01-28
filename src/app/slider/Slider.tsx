'use client';

import dynamic from 'next/dynamic';
import SliderServer from './Slider.Server';
import { SliderProps } from './types';


const SwiperClient = dynamic(
    () => import('./Slider.Client'),
    {
        ssr: false,
        loading: () => <SliderServer slides={[]} /> // Fallback
    }
);
export default function Slider({ slides }: SliderProps) {
    return (
        <>
                <SwiperClient slides={slides} />
        </>
    );
}