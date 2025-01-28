import Slider from "@/app/slider/Slider";

const slides = [
    {
        id: 1,
        icon: './icons/first.svg',
        title: 'Анализ текущего состояния карьеры',
        description: 'Проведем оценку вашего кейса и создадим стратегию для дальнейшего карьерного развития.',
    },
    {
        id: 2,
        icon: './icons/second.svg',
        title: 'Сопроводительные письма и резюме ',
        description: 'Поможем сформировать профессиональный портфель, которые выделит вас среди других кандидатов.',
    },
    {
        id: 3,
        icon: './icons/third.svg',
        title: 'Поиск работы',
        description: 'Определим вашу карьерную цель и разработаем стратегию для трудоустройства.',
    },
    {
        id: 4,
        icon:'./icons/fourth.svg',
        title: 'Тренинг по презентации личного бренда',
        description: 'Подсветим сильные стороны и грамотно выстроим самопрезентацию.',
    },
    {
        id: 5,
        icon:'./icons/fifth.svg',
        title: 'Подготовка к собеседованию',
        description: 'Научим говорить о себе кратко, ярко и профессионально.',
    },{
        id: 6,
        icon:'./icons/sixth.svg',
        title: 'Рекомендация по базе STEMPS Career',
        description: 'Поможем встретиться соискателю и работодателю. ',
    },
];



export default function Home() {
  return (
      <div className="flex justify-center items-center h-screen">
          <Slider slides={slides} />
      </div>
  );
}
