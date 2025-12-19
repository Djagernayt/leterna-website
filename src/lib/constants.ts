// Подменю услуг (dropdown)
export const SERVICES_SUBMENU = [
  { label: 'Шторы и портьеры', href: '/services/curtains' },
  { label: 'Тюль', href: '/services/tulle' },
  { label: 'Римские шторы', href: '/services/roman' },
  { label: 'Рулонные шторы', href: '/services/roller' },
  { label: 'Карнизы', href: '/services/cornices' },
  { label: 'Солнцезащита', href: '/services/sun-protection' },
  { label: 'Текстильный декор', href: '/services/decor' },
];

// Навигационное меню (оптимизированное)
export const NAVIGATION_MENU = [
  { label: 'Виды штор', href: '/services', hasDropdown: true },
  { label: 'Услуги', href: '/uslugi' },
  { label: 'О Компании', href: '/#about' },
  { label: 'Портфолио', href: '/portfolio' },
  { label: 'Дизайнерам', href: '/designers' },
  { label: 'Контакты', href: '/#contacts' },
  { label: 'Блог', href: '/blog' },
];

// Якорные ссылки для главной страницы (будут на изображениях)
export const HOME_ANCHORS = [
  { label: 'Услуги', href: '/#services', section: 'services' },
  { label: 'О компании', href: '/#about', section: 'about' },
  { label: 'Контакты', href: '/#contacts', section: 'contacts' },
];

// Контактная информация
export const CONTACTS = {
  phone: '+7 (XXX) XXX-XX-XX',
  phoneRaw: '+7XXXXXXXXXX',
  email: 'info@leterna.ru',
  telegram: '@leterna_studio',
  whatsapp: '+7XXXXXXXXXX',
  address: '', // Заполнить при наличии
  workingHours: 'Ежедневно с 10:00 до 20:00',
};

// Реквизиты организации
export const COMPANY_DETAILS = {
  legalName: 'ИП Бакина Галина Ильинична',
  ogrnip: '321774600684152 от 10 ноября 2021 года',
  inn: '771909344830',
  okpo: '2011705509',
};

// Социальные сети
export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/leterna_studio',
  vk: 'https://vk.com/leterna_studio',
  telegram: 'https://t.me/leterna_studio',
};

// Этапы работы (для главной страницы)
export const WORK_STEPS = [
  {
    id: 1,
    title: 'Выезд декоратора с образцами тканей на объект',
    icon: 'User',
  },
  {
    id: 2,
    title: 'Разработка концепции, замеры и выбор материалов',
    icon: 'PenTool',
  },
  {
    id: 3,
    title: 'Создание дизайн-проекта',
    icon: 'Briefcase',
  },
  {
    id: 4,
    title: 'Заключение договора',
    icon: 'FileText',
  },
  {
    id: 5,
    title: 'Оформление Технического Задания',
    icon: 'ClipboardList',
  },
  {
    id: 6,
    title: 'Производство',
    icon: 'Settings',
  },
  {
    id: 7,
    title: 'Доставка, монтаж, навес, отпаривание',
    icon: 'Package',
  },
];

// Услуги
export const SERVICES = [
  {
    id: 1,
    title: 'Выезд декоратора',
    description: 'Консультация на объекте с каталогом тканей',
    icon: 'User',
  },
  {
    id: 2,
    title: 'Пошив штор',
    description: 'Индивидуальный пошив по меркам',
    icon: 'Scissors',
  },
  {
    id: 3,
    title: 'Монтаж карнизов',
    description: 'Профессиональная установка',
    icon: 'Wrench',
  },
  {
    id: 4,
    title: 'Навес и отпаривание',
    description: 'Финальная установка и уход',
    icon: 'Sparkles',
  },
  {
    id: 5,
    title: 'Печать на ткани',
    description: 'Уникальные принты на заказ',
    icon: 'Image',
  },
];

// Ценности компании
export const COMPANY_VALUES = [
  {
    id: 1,
    title: 'Качество',
    description: 'Используем только премиальные ткани и материалы',
    icon: 'Award',
  },
  {
    id: 2,
    title: 'Индивидуальность',
    description: 'Каждый проект уникален и создан специально для вас',
    icon: 'Sparkles',
  },
  {
    id: 3,
    title: 'Премиальность',
    description: 'Высокий уровень сервиса на всех этапах',
    icon: 'Crown',
  },
  {
    id: 4,
    title: 'Забота',
    description: 'Мы заботимся о каждой детали вашего комфорта',
    icon: 'Heart',
  },
];

// Временные отзывы (заглушки)
export const REVIEWS = [
  {
    id: 1,
    name: 'Елена М.',
    text: 'Великолепная работа! Шторы идеально вписались в интерьер, качество тканей превосходное.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Дмитрий К.',
    text: 'Профессиональный подход на всех этапах. Особенно порадовала консультация дизайнера.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Анна С.',
    text: 'Рекомендую! Сроки соблюдены, цены адекватные, результат превзошел ожидания.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Михаил П.',
    text: 'Отличное качество пошива и монтажа. Всё выполнено профессионально и в срок.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Ольга В.',
    text: 'Очень довольны результатом! Дизайнер помог подобрать идеальные шторы для нашей гостиной.',
    rating: 5,
  },
  {
    id: 6,
    name: 'Сергей Л.',
    text: 'Превосходный сервис от консультации до установки. Спасибо команде LETERNA!',
    rating: 5,
  },
];
