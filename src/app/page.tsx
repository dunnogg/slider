import Slider from "@/app/slider/slider";

const slides = [
    {
        id: 1,
        icon: './vercel.svg',
        title: 'Главная',
        description: 'Описание главного раздела',
    },
    {
        id: 2,
        icon: './vercel.svg',
        title: 'Профиль',
        description: 'Управляйте своим профилем здесь.',
    },
    {
        id: 3,
        icon: './vercel.svg',
        title: 'Настройки',
        description: 'Настройте параметры приложения.',
    },
    {
        id: 4,
        icon:'./vercel.svg',
        title: 'Поиск',
        description: 'Найдите нужную информацию.',
    },
];



export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Slider slides={slides}></Slider>
    </div>
  );
}
