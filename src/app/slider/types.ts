export interface Slide {
    id: number;
    icon: string;
    title: string;
    description: string;
}

export interface SliderProps {
    slides: Slide[];
}