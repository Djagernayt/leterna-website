import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

// Шрифт для заголовков
const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "600", "700"],
  display: "swap",
});

// Шрифт для текста
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LETERNA — Студия премиальных штор и текстильного декора",
  description: "Индивидуальный пошив штор, выезд дизайнера, монтаж карнизов. Стильно. Премиально. С любовью.",
  keywords: "шторы на заказ, пошив штор, дизайнер штор, карнизы, текстильный декор",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${cormorantGaramond.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

// Примечание: Header и Footer будут добавлены в page.tsx каждой страницы,
// чтобы иметь возможность делать разные варианты layout при необходимости
