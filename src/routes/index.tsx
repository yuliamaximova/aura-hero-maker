import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, ArrowUpRight } from "lucide-react";

import heroWaves from "@/assets/hero-waves.jpg";
import phone from "@/assets/phone.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Вайбкодинг-портфолио — Создаю AI-продукты" },
      {
        name: "description",
        content:
          "Быстро собираю MVP, лендинги и веб-приложения с помощью современных AI-инструментов.",
      },
      { property: "og:title", content: "Вайбкодинг-портфолио — Создаю AI-продукты" },
      {
        property: "og:description",
        content:
          "Быстро собираю MVP, лендинги и веб-приложения с помощью современных AI-инструментов.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background p-3 sm:p-5 lg:p-8">
      <section
        aria-label="Hero"
        className="relative mx-auto flex min-h-[calc(100vh-1.5rem)] max-w-6xl items-center overflow-hidden rounded-3xl sm:min-h-[calc(100vh-2.5rem)] lg:min-h-[calc(100vh-4rem)]"
      >
        <img
          src={heroWaves}
          alt=""
          aria-hidden
          width={1920}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="relative z-10 grid w-full grid-cols-1 items-center gap-10 px-6 py-16 sm:px-10 lg:grid-cols-2 lg:gap-6 lg:px-16">
          <div className="max-w-xl text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs font-medium text-foreground backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-grape" />
              Вайбкодинг · AI-разработка
            </span>

            <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Создаю <span className="text-grape">AI-продукты</span> через
              вайбкодинг
            </h1>

            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
              Быстро собираю MVP, лендинги и веб-приложения с помощью
              современных AI-инструментов
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#projects"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-lilac px-7 py-3.5 text-sm font-medium text-lilac-foreground transition-transform hover:scale-[1.03] sm:w-auto"
              >
                Посмотреть проекты
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-grape px-7 py-3.5 text-sm font-medium text-grape-foreground transition-transform hover:scale-[1.03] sm:w-auto"
              >
                Связаться
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <img
              src={phone}
              alt="Мобильное приложение, созданное с помощью вайбкодинга"
              width={800}
              height={1100}
              className="w-64 max-w-full mix-blend-multiply drop-shadow-2xl sm:w-80 lg:w-[26rem]"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
