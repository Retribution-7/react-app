export interface FeatureCard {
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
}

export const featureCards: FeatureCard[] = [
  {
    icon: '/icons/check-square.svg',
    iconAlt: 'Галочка',
    title: 'Постоянное наличие',
    description:
      'Прямая работа с производителем обеспечивает постоянное наличие всех видов металлопроката',
  },
  {
    icon: '/icons/box.svg',
    iconAlt: 'Коробка',
    title: 'Собственный автопарк',
    description: 'Автомобили грузоподъёмностью от 1.5 до 20 тонн. Всегда быстрая доставка.',
  },
  {
    icon: '/icons/car.svg',
    iconAlt: 'Автомобиль',
    title: 'Объёмы поставок',
    description:
      'Собственная служба доставки гарантирует вам поставку материалов на объект в кратчайшие сроки.',
  },
  {
    icon: '/icons/cart.svg',
    iconAlt: 'Корзина',
    title: 'Справедливая цена',
    description: 'Собственные ресурсы и транспорт позволяют снижать стоимость.',
  },
  {
    icon: '/icons/time.svg',
    iconAlt: 'Часы',
    title: 'Обработка заявки < 30 минут',
    description:
      'Отдел продаж, насчитывающий более 80 сотрудников, не оставит вашу заявку без внимания.',
  },
  {
    icon: '/icons/people.svg',
    iconAlt: 'Люди',
    title: 'Погрузка без очередей',
    description: 'Развитая складская логистика позволяет отгружать продукцию всегда без очередей.',
  },
];
