import { createFileRoute } from "@tanstack/react-router";
import {
  Sparkles,
  ArrowUpRight,
  Clock,
  BarChart3,
  Rocket,
  Send,
  Mail,
} from "lucide-react";

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

const projects = [
  {
    id: "time2take",
    name: "Time2Take",
    description:
      "Веб-приложение для отслеживания приёма лекарств. Напоминания, история доз и удобный график приёма.",
    tags: ["React", "TypeScript", "Supabase", "Tailwind"],
    icon: Clock,
    accent: "bg-lilac text-lilac-foreground",
  },
  {
    id: "proanalytics",
    name: "ProАналитику",
    description:
      "AI-сервис для анализа данных. Автоматические инсайты, визуализация метрик и прогнозирование трендов.",
    tags: ["Next.js", "OpenAI", "Python", "Recharts"],
    icon: BarChart3,
    accent: "bg-grape text-grape-foreground",
  },
  {
    id: "nofear",
    name: "NoFear",
    description:
      "Лендинг для онлайн-курса по выходу из зоны комфорта. Конверсионная структура, анимации и формы захвата.",
    tags: ["Astro", "Motion", "Figma", "Vercel"],
    icon: Rocket,
    accent: "bg-lilac text-lilac-foreground",
  },
];

const services = [
  {
    id: "mvp",
    title: "MVP за неделю",
    description:
      "Превращаю идею в работающий продукт за 5–7 дней. Без долгих согласований и переписываний ТЗ.",
    result: "Готовый прототип для теста гипотез",
    icon: "⚡",
    accent: "bg-lilac text-lilac-foreground",
  },
  {
    id: "ai-automation",
    title: "AI-автоматизация",
    description:
      "Встраиваю нейросети в рабочие процессы: от генерации контента до анализа данных и поддержки клиентов.",
    result: "Экономия времени команды на рутине",
    icon: "🤖",
    accent: "bg-grape text-grape-foreground",
  },
  {
    id: "ui-ux",
    title: "UI/UX с вайбкодингом",
    description:
      "Создаю интерфейсы, которые выглядят дорого и работают быстро. Современные анимации и чистая типографика.",
    result: "Понятный и запоминающийся дизайн",
    icon: "🎨",
    accent: "bg-lilac text-lilac-foreground",
  },
  {
    id: "integrations",
    title: "Интеграции",
    description:
      "Соединяю сервисы между собой: CRM, платежи, мессенджеры, базы данных и внешние API.",
    result: "Единая экосистема без ручного дублирования",
    icon: "🔌",
    accent: "bg-grape text-grape-foreground",
  },
];

function Index() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-lilac/25 via-background to-lilac/25 px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
      <section
        aria-label="Hero"
        className="relative mx-auto flex min-h-[60vh] max-w-6xl items-center overflow-hidden rounded-3xl sm:min-h-[65vh] lg:min-h-[70vh]"
      >
        <img
          src={heroWaves}
          alt=""
          aria-hidden
          width={1920}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="relative z-10 grid w-full grid-cols-1 items-center gap-10 px-6 py-10 sm:px-8 lg:grid-cols-2 lg:gap-8 lg:px-12 lg:py-14">
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

      <section
        id="projects"
        aria-label="Избранные проекты"
        className="relative mx-auto mt-12 max-w-6xl overflow-hidden rounded-3xl px-6 py-10 sm:px-8 lg:mt-20 lg:px-12 lg:py-14"
      >
        <img
          src={heroWaves}
          alt=""
          aria-hidden
          width={1920}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background/80" />

        <div className="relative z-10">
          <div className="text-left">
            <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Избранные проекты
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <article
                  key={project.id}
                  className="group flex flex-col rounded-3xl border border-border bg-card/80 p-6 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-md sm:p-7"
                >
                  <div
                    className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${project.accent}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground">
                    {project.name}
                  </h3>

                  <p className="mt-3 flex-grow text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-medium text-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="services"
        aria-label="Что я делаю"
        className="relative mx-auto mt-12 max-w-6xl overflow-hidden rounded-3xl px-6 py-10 sm:px-8 lg:mt-20 lg:px-12 lg:py-14"
      >
        <img
          src={heroWaves}
          alt=""
          aria-hidden
          width={1920}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background/80" />

        <div className="relative z-10 text-left">
          <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Что я делаю
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.id}
              className="group flex flex-col rounded-3xl border border-border bg-card/80 p-6 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-md sm:p-7"
            >
              <div
                className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-xl ${service.accent}`}
              >
                {service.icon}
              </div>

              <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground">
                {service.title}
              </h3>

              <p className="mt-3 flex-grow text-sm leading-relaxed text-muted-foreground sm:text-base">
                {service.description}
              </p>

              <div className="mt-6 rounded-2xl bg-background/80 p-4">
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Ключевой результат
                </p>
                <p className="mt-1 text-sm font-medium text-foreground">
                  {service.result}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="process"
        aria-label="Как я работаю"
        className="relative mx-auto mt-12 max-w-6xl overflow-hidden rounded-3xl px-6 py-10 sm:px-8 lg:mt-20 lg:px-12 lg:py-14"
      >
        <img
          src={heroWaves}
          alt=""
          aria-hidden
          width={1920}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background/80" />

        <div className="relative z-10 text-left">
          <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Как я работаю
          </h2>
        </div>

        <div className="relative mt-10 lg:mt-14">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border lg:left-0 lg:right-0 lg:top-14 lg:bottom-auto lg:h-px lg:w-full" />

          <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Погружаюсь в задачу",
                description:
                  "Изучаю идею, аудиторию и цель. Формирую четкое понимание, что должно получиться на выходе.",
              },
              {
                step: "02",
                title: "Создаю с ИИ",
                description:
                  "Быстро прототипирую интерфейсы и логику с помощью современных AI-инструментов, сохраняя качество и внимание к деталям.",
              },
              {
                step: "03",
                title: "Тестирую и улучшаю",
                description:
                  "Проверяю работу на реальных сценариях, собираю обратную связь и довожу продукт до удобного состояния.",
              },
              {
                step: "04",
                title: "Запускаю и масштабирую",
                description:
                  "Запускаю проект и помогаю масштабировать то, что работает.",
              },
            ].map((item) => (
              <div key={item.step} className="relative pl-20 lg:pl-0 lg:pt-20">
                <div
                  className={`absolute left-0 top-0 grid h-16 w-16 shrink-0 place-items-center rounded-2xl text-lg font-semibold lg:left-0 lg:right-auto lg:top-0 ${
                    Number(item.step) % 2 === 1
                      ? "bg-lilac text-lilac-foreground"
                      : "bg-grape text-grape-foreground"
                  }`}
                >
                  {item.step}
                </div>

                <h3 className="text-xl font-semibold tracking-tight text-foreground">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        aria-label="Связаться"
        className="relative mx-auto mt-12 max-w-6xl overflow-hidden rounded-3xl border border-border bg-card px-6 py-10 text-center sm:px-8 lg:mt-20 lg:px-12 lg:py-14"
      >
        <img
          src={heroWaves}
          alt=""
          aria-hidden
          width={1920}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-card/70 via-card/40 to-card/70" />

        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Готовы воплотить Вашу идею в реальность?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            Свяжитесь со мной, и мы обсудим Вашу задачу
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://t.me/yulamax"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-lilac px-7 py-3.5 text-sm font-medium text-lilac-foreground transition-transform hover:scale-[1.03] sm:w-auto"
            >
              <Send className="h-4 w-4" />
              Написать в Telegram
            </a>
            <a
              href="mailto:yulasemenova2501@icloud.com"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-lilac px-7 py-3.5 text-sm font-medium text-lilac-foreground transition-transform hover:scale-[1.03] sm:w-auto"
            >
              <Mail className="h-4 w-4" />
              Написать на Email
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
