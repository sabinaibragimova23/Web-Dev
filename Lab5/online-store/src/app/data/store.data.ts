import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

export const CATEGORIES: Category[] = [
  { id: 1, name: 'Accessories' },
  { id: 2, name: 'Home & Appliances' },
  { id: 3, name: 'Electronics' },
  { id: 4, name: 'Beauty & Kids' },
];



export const ACCESSORIES: Product[] = [
  {
    id: 1,
    categoryId: 1,
    name: 'Popsoket 002 розовый',
    description: 'Удобный держатель для телефона.',
    price: 8990,
    rating: 4.5,
    image: 'assets/images/p1-1.jpg',
    images: ['assets/images/p1-1.jpg'],
    link: 'https://kaspi.kz/shop/p/popsoket-002-rozovyi-122283935/?c=750000000',
    likes: 0,
  },

  {
    id: 2,
    categoryId: 1,
    name: 'Сумка Portcase 9011',
    description: 'Сумка для ноутбука до 15.6 дюймов.',
    price: 25990,
    rating: 4.1,
    image: 'assets/images/p6-1.jpg',
    images: ['assets/images/p6-1.jpg'],
    link: 'https://kaspi.kz/shop/p/sumka-portcase-9011-do-15-6-chernyi-108895248/?c=750000000',
    likes: 0,
  },
  {
    id: 3,
    categoryId: 1,
    name: 'Чехол Jasper iPhone 17 Pro',
    description: 'Прозрачный защитный чехол.',
    price: 12990,
    rating: 4.3,
    image: 'assets/images/p11-1.jpg',
    images: ['assets/images/p11-1.jpg'],
    link: 'https://kaspi.kz/shop/p/chehol-jasper-dlja-apple-iphone-17-pro-prozrachnyi-146498145/?c=750000000',
    likes: 0,
  },
  {
    id: 4,
    categoryId: 1,
    name: 'Кабель Varinum USB Type-C',
    description: 'Кабель для зарядки и передачи данных.',
    price: 4990,
    rating: 4.2,
    image: 'assets/images/p12-1.jpg',
    images: ['assets/images/p12-1.jpg'],
    link: 'https://kaspi.kz/shop/p/kabel-varium-usb-2-0-m-usb-typec-m-1-m-vt-199-belyi-139723676/?c=750000000',
    likes: 0,
  },
  {
    id: 5,
    categoryId: 1,
    name: 'Чехол iPhone 15 Pro розовый',
    description: 'Розовый чехол для защиты телефона.',
    price: 15990,
    rating: 4.4,
    image: 'assets/images/p13-1.jpg',
    images: ['assets/images/p13-1.jpg'],
    link: 'https://kaspi.kz/shop/p/chehol-dlja-apple-iphone-15-pro-rozovyi-115033690/?c=750000000',
    likes: 0,
  }
];



export const HOME: Product[] = [
  {
    id: 6,
    categoryId: 2,
    name: 'Аэрогриль EL-8L 8 л черный',
    description: 'Мощный отпариватель для одежды.',
    price: 45990,
    rating: 4.2,
    image: 'assets/images/p3-1.jpg',
    images: ['assets/images/p3-1.jpg'],
    link: 'https://kaspi.kz/shop/p/el-8l-8-l-chernyi-116751664/?c=750000000',
    likes: 0,
  },
  {
    id: 7,
    categoryId: 2,
    name: 'Aventix PAR200 отпариватель',
    description: 'Компактный отпариватель.',
    price: 17990,
    rating: 4.3,
    image: 'assets/images/p4-1.jpg',
    images: ['assets/images/p4-1.jpg'],
    link: 'https://kaspi.kz/shop/p/otparivatel-aventix-par200-fioletovyi-144751155/?c=750000000',
    likes: 0,
  },
  {
    id: 8,
    categoryId: 2,
    name: 'Увлажнитель воздуха RMXX',
    description: 'Эффективный увлажнитель воздуха.',
    price: 34990,
    rating: 4.5,
    image: 'assets/images/p14-1.jpg',
    images: ['assets/images/p14-1.jpg'],
    link: 'https://kaspi.kz/shop/p/uvlazhnitel-vozduha-rmxx-sc-2407-belyi-137291298/?c=750000000',
    likes: 0,
  },
  {
    id: 9,
    categoryId: 2,
    name: 'Generic SF-400',
    description: 'Устройство для дома.',
    price: 12990,
    rating: 4.0,
    image: 'assets/images/p15-1.jpg',
    images: ['assets/images/p15-1.jpg'],
    link: 'https://kaspi.kz/shop/p/generic-sf-400-102531445/?c=750000000',
    likes: 0,
  },
  {
    id: 10,
    categoryId: 2,
    name: 'Пароочиститель atreon DFHS-01 белый, черный',
    description: 'Пароочиститель Atreon 3 в 1 — мощная уборка без химии! Универсальный помощник для дома',
    price: 8990,
    rating: 4.1,
    image: 'assets/images/p17.jpg',
    images: ['assets/images/p17.jpg'],
    link: 'https://kaspi.kz/shop/p/paroochistitel-atreon-dfhs-01-belyi-chernyi-142540734/?c=750000000',
    likes: 0,
  }
];



export const ELECTRONICS: Product[] = [
  {
    id: 11,
    categoryId: 3,
    name: 'Ainomi A1 Premium Power',
    description: 'Быстрая зарядка.',
    price: 22990,
    rating: 4.6,
    image: 'assets/images/p2-1.jpg',
    images: ['assets/images/p2-1.jpg'],
    link: 'https://kaspi.kz/shop/p/ainomi-a1-premium-power-chernyi-mokryi-asfal-t-137712147/?c=750000000',
    likes: 0,
  },
  {
    id: 12,
    categoryId: 3,
    name: 'Проектор Salange HY300',
    description: 'Домашний кинотеатр.',
    price: 79990,
    rating: 4.4,
    image: 'assets/images/p5-1.jpg',
    images: ['assets/images/p5-1.jpg'],
    link: 'https://kaspi.kz/shop/p/proektor-salange-hy300-115371965/?c=750000000',
    likes: 0,
  },
  {
    id: 13,
    categoryId: 3,
    name: 'Наушники Air Pro 2',
    description: 'Беспроводные наушники.',
    price: 15990,
    rating: 4.4,
    image: 'assets/images/p16-1.jpg',
    images: ['assets/images/p16-1.jpg'],
    link: 'https://kaspi.kz/shop/p/naushniki-air-pro-2-belyi-118366664/?c=750000000',
    likes: 0,
  },
  {
    id: 14,
    categoryId: 3,
    name: 'Наушники GERLAX GH-34 черный',
    description: 'GERLAX GH-34— это идеальный выбор для тех, кто ценит высокое качество звука и удобство использования',
    price: 18990,
    rating: 4.0,
    image: 'assets/images/p18.jpg',
    images: ['assets/images/p18.jpg'],
    link: 'https://kaspi.kz/shop/p/naushniki-gerlax-gh-34-chernyi-119492193/?c=750000000',
    likes: 0,
  },
  {
    id: 15,
    categoryId: 3,
    name: 'Luxvisage Gel Brow',
    description: 'Яндекс.Станция Лайт — это яркая и компактная умная колонка, которая управляется голосом и сенсорными кнопками.',
    price: 12990,
    rating: 4.3,
    image: 'assets/images/p19.jpg',
    images: ['assets/images/p19.jpg'],
    link: 'https://kaspi.kz/shop/p/jandeks-stantsija-lait-yndx-00025-fioletovyi-101870266/?c=750000000',
    likes: 0,
  }
];



export const BEAUTY: Product[] = [
  {
    id: 16,
    categoryId: 4,
    name: 'Dr.Althea Barrier крем',
    description: 'Увлажняющий крем.',
    price: 7490,
    rating: 4.6,
    image: 'assets/images/p8-1.jpg',
    images: ['assets/images/p8-1.jpg'],
    link: 'https://kaspi.kz/shop/p/dr-althea-krem-147-barrier-dlja-litsa-50-ml-104958422/?c=750000000',
    likes: 0,
  },
  {
    id: 17,
    categoryId: 4,
    name: 'DMND спонж 2 шт',
    description: 'Спонж для макияжа.',
    price: 4990,
    rating: 4.2,
    image: 'assets/images/p20-1.jpg',
    images: ['assets/images/p20-1.jpg'],
    link: 'https://kaspi.kz/shop/p/dmnd-sponzh-skoshennyi-sponzh-kaplja-poliuretan-2-sht-rozovyi-104557208/?c=750000000',
    likes: 0,
  },
  {
    id: 18,
    categoryId: 4,
    name: 'Конструктор Mainkraft',
    description: 'Магнитный набор.',
    price: 39990,
    rating: 4.3,
    image: 'assets/images/p10-1.jpg',
    images: ['assets/images/p10-1.jpg'],
    link: 'https://kaspi.kz/shop/p/konstruktor-mainkraft-magnitnye-kubiki-15415400-564061142-detalei-173-sht-137014131/?c=750000000',
    likes: 0,
  },
  {
    id: 19,
    categoryId: 4,
    name: 'Groinneya TJ-05',
    description: 'Щётки для уборки.',
    price: 18990,
    rating: 4.0,
    image: 'assets/images/p18-1.jpg',
    images: ['assets/images/p18-1.jpg'],
    link: 'https://kaspi.kz/shop/p/groinneya-tj-05-puchkovye-c-0-03-mm-chernyi-mix-8-16-mm-130803713/?c=750000000',
    likes: 0,
  },
  {
    id: 20,
    categoryId: 4,
    name: 'Luxvisage Gel Brow',
    description: 'Гель для бровей.',
    price: 12990,
    rating: 4.3,
    image: 'assets/images/p19-1.jpg',
    images: ['assets/images/p19-1.jpg'],
    link: 'https://kaspi.kz/shop/p/luxvisage-gel-brow-laminator-extreme-fix-prozrachnyi-4-ml-121516864/?c=750000000',
    likes: 0,
  }
];


export const PRODUCTS: Product[] = [
  ...ACCESSORIES,
  ...HOME,
  ...ELECTRONICS,
  ...BEAUTY
];