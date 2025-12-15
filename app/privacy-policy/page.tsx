import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';

export const metadata: Metadata = {
  title: 'Политика конфиденциальности - LETERNA',
  description: 'Политика конфиденциальности студии премиальных штор и текстильного декора LETERNA',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-primary-cream">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center">
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-primary-espresso mb-4 text-center">
                Политика конфиденциальности
              </h1>
              <p className="font-body text-center text-sm md:text-[15px] text-neutral-brown">
                Последнее обновление: {new Date().toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="w-full max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-sm md:prose-base max-w-none">
              {/* Вводная часть */}
              <div className="mb-8">
                <p className="font-body text-sm md:text-[15px] text-neutral-brown leading-relaxed mb-4">
                  Настоящая Политика конфиденциальности персональных данных (далее – Политика конфиденциальности) 
                  действует в отношении всей информации, размещенной на сайте в сети Интернет по адресу{' '}
                  <Link href="/" className="text-primary-taupe hover:underline">leterna.ru</Link>, 
                  которую пользователи могут получить о Пользователе во время использования сайта, его сервисов, 
                  программ и продуктов.
                </p>
              </div>

              {/* 1. Определение терминов */}
              <div className="mb-10">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-espresso mb-6">
                  1. Определение терминов
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-heading text-lg md:text-xl font-semibold text-primary-espresso mb-2">
                      1.1. Персональные данные
                    </h3>
                    <p className="font-body text-sm md:text-[15px] text-neutral-brown leading-relaxed">
                      Персональные данные — любая информация, относящаяся к прямо или косвенно определенному 
                      или определяемому физическому лицу (субъекту персональных данных).
                    </p>
                  </div>
                  <div>
                    <h3 className="font-heading text-lg md:text-xl font-semibold text-primary-espresso mb-2">
                      1.2. Оператор персональных данных
                    </h3>
                    <p className="font-body text-sm md:text-[15px] text-neutral-brown leading-relaxed">
                      Оператор персональных данных — государственный орган, муниципальный орган, юридическое 
                      или физическое лицо, самостоятельно или совместно с другими лицами организующие и (или) 
                      осуществляющие обработку персональных данных, а также определяющие цели обработки 
                      персональных данных, состав персональных данных, подлежащих обработке, действия 
                      (операции), совершаемые с персональными данными.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2. Общие положения */}
              <div className="mb-10">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-espresso mb-6">
                  2. Общие положения
                </h2>
                <div className="space-y-4">
                  <p className="font-body text-sm md:text-[15px] text-neutral-brown leading-relaxed">
                    2.1. Использование сайта LETERNA означает безоговорочное согласие Пользователя 
                    с настоящей Политикой конфиденциальности и указанными в ней условиями обработки 
                    его персональной информации.
                  </p>
                  <p className="font-body text-sm md:text-[15px] text-neutral-brown leading-relaxed">
                    2.2. В случае несогласия с условиями Политики конфиденциальности Пользователь 
                    должен прекратить использование сайта.
                  </p>
                  <p className="font-body text-sm md:text-[15px] text-neutral-brown leading-relaxed">
                    2.3. Настоящая Политика конфиденциальности применяется только к сайту LETERNA. 
                    Мы не контролируем и не несем ответственность за сайты третьих лиц, на которые 
                    Пользователь может перейти по ссылкам, доступным на сайте.
                  </p>
                </div>
              </div>

              {/* 3. Предмет политики конфиденциальности */}
              <div className="mb-10">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-espresso mb-6">
                  3. Предмет политики конфиденциальности
                </h2>
                <p className="font-body text-sm md:text-[15px] text-neutral-brown leading-relaxed mb-4">
                  3.1. Настоящая Политика конфиденциальности устанавливает обязательства по неразглашению 
                  и обеспечению режима защиты конфиденциальности персональных данных, которые Пользователь 
                  предоставляет по запросу Администрации сайта при регистрации на сайте или при оформлении 
                  заказа для приобретения услуг.
                </p>
                <p className="font-body text-sm md:text-[15px] text-neutral-brown leading-relaxed">
                  3.2. Персональные данные, разрешённые к обработке в рамках настоящей Политики 
                  конфиденциальности, предоставляются Пользователем путём заполнения форм на сайте 
                  и включают в себя следующую информацию:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
                  <li className="font-body text-sm md:text-[15px] text-neutral-brown">Фамилия, имя, отчество</li>
                  <li className="font-body text-sm md:text-[15px] text-neutral-brown">Контактный телефон</li>
                  <li className="font-body text-sm md:text-[15px] text-neutral-brown">Адрес электронной почты (e-mail)</li>
                  <li className="font-body text-sm md:text-[15px] text-neutral-brown">Адрес доставки товаров/услуг</li>
                </ul>
              </div>

              {/* 4. Цели сбора персональной информации пользователя */}
              <div className="mb-10">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-espresso mb-6">
                  4. Цели сбора персональной информации пользователя
                </h2>
                <p className="font-body text-sm md:text-[15px] text-neutral-brown leading-relaxed mb-4">
                  4.1. Персональные данные Пользователя могут использоваться в следующих целях:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li className="font-body text-sm md:text-[15px] text-neutral-brown">
                    Предоставление услуг по оформлению окон и текстильному декору
                  </li>
                  <li className="font-body text-sm md:text-[15px] text-neutral-brown">
                    Связь с Пользователем для уточнения деталей заказа
                  </li>
                  <li className="font-body text-sm md:text-[15px] text-neutral-brown">
                    Информирование о новых услугах, акциях и специальных предложениях
                  </li>
                  <li className="font-body text-sm md:text-[15px] text-neutral-brown">
                    Улучшение качества обслуживания
                  </li>
                </ul>
              </div>

              {/* 5. Способы и сроки обработки персональной информации */}
              <div className="mb-10">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-espresso mb-6">
                  5. Способы и сроки обработки персональной информации
                </h2>
                <div className="space-y-4">
                  <p className="font-body text-sm md:text-[15px] text-neutral-brown leading-relaxed">
                    5.1. Обработка персональных данных Пользователя осуществляется без ограничения срока, 
                    любым законным способом, в том числе в информационных системах персональных данных 
                    с использованием средств автоматизации или без использования таких средств.
                  </p>
                  <p className="font-body text-sm md:text-[15px] text-neutral-brown leading-relaxed">
                    5.2. Пользователь соглашается с тем, что Администрация сайта вправе передавать 
                    персональные данные третьим лицам, в частности, курьерским службам, организациям 
                    почтовой связи, операторам электросвязи, исключительно в целях выполнения заказа 
                    Пользователя.
                  </p>
                  <p className="font-body text-sm md:text-[15px] text-neutral-brown leading-relaxed">
                    5.3. Персональные данные Пользователя могут быть переданы уполномоченным органам 
                    государственной власти только по основаниям и в порядке, установленным 
                    законодательством Российской Федерации.
                  </p>
                </div>
              </div>

              {/* 6. Обязательства сторон */}
              <div className="mb-10">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-espresso mb-6">
                  6. Обязательства сторон
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-heading text-lg md:text-xl font-semibold text-primary-espresso mb-3">
                      6.1. Пользователь обязан:
                    </h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li className="font-body text-sm md:text-[15px] text-neutral-brown">
                        Предоставить достоверную информацию о персональных данных
                      </li>
                      <li className="font-body text-sm md:text-[15px] text-neutral-brown">
                        Обновлять, дополнять предоставленную информацию о персональных данных 
                        в случае изменения данной информации
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-heading text-lg md:text-xl font-semibold text-primary-espresso mb-3">
                      6.2. Администрация сайта обязана:
                    </h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li className="font-body text-sm md:text-[15px] text-neutral-brown">
                        Использовать полученную информацию исключительно для целей, указанных 
                        в настоящей Политике конфиденциальности
                      </li>
                      <li className="font-body text-sm md:text-[15px] text-neutral-brown">
                        Обеспечить хранение конфиденциальной информации в тайне
                      </li>
                      <li className="font-body text-sm md:text-[15px] text-neutral-brown">
                        Принять меры предосторожности для защиты конфиденциальности персональных 
                        данных Пользователя
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 7. Заключительные положения */}
              <div className="mb-10">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-espresso mb-6">
                  7. Заключительные положения
                </h2>
                <div className="space-y-4">
                  <p className="font-body text-sm md:text-[15px] text-neutral-brown leading-relaxed">
                    7.1. Пользователь может получить любые разъяснения по интересующим вопросам, 
                    касающимся обработки его персональных данных, обратившись к Администрации сайта 
                    с помощью электронной почты.
                  </p>
                  <p className="font-body text-sm md:text-[15px] text-neutral-brown leading-relaxed">
                    7.2. В данном документе будут отражены любые изменения политики обработки 
                    персональных данных. Политика действует бессрочно до замены её новой версией.
                  </p>
                  <p className="font-body text-sm md:text-[15px] text-neutral-brown leading-relaxed">
                    7.3. Актуальная версия Политики в свободном доступе расположена в сети Интернет 
                    по адресу{' '}
                    <Link href="/privacy-policy" className="text-primary-taupe hover:underline">
                      leterna.ru/privacy-policy
                    </Link>.
                  </p>
                </div>
              </div>

              {/* Контактная информация */}
              <div className="mt-12 p-6 md:p-8 bg-primary-cream rounded-2xl">
                <h3 className="font-heading text-xl md:text-2xl font-bold text-primary-espresso mb-4">
                  Контактная информация
                </h3>
                <div className="space-y-2">
                  <p className="font-body text-sm md:text-[15px] text-neutral-brown">
                    <strong>Наименование:</strong> LETERNA — Студия премиальных штор и текстильного декора
                  </p>
                  <p className="font-body text-sm md:text-[15px] text-neutral-brown">
                    <strong>Email:</strong>{' '}
                    <a href="mailto:info@leterna.ru" className="text-primary-taupe hover:underline">
                      info@leterna.ru
                    </a>
                  </p>
                  <p className="font-body text-sm md:text-[15px] text-neutral-brown">
                    <strong>Телефон:</strong>{' '}
                    <a href="tel:+7XXXXXXXXXX" className="text-primary-taupe hover:underline">
                      +7 (XXX) XXX-XX-XX
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Кнопка назад */}
            <div className="mt-12 text-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-taupe text-white font-medium rounded-full hover:bg-primary-espresso transition-colors"
              >
                Вернуться на главную
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
