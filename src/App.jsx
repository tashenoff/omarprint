import { SparklesIcon, PhoneIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";

const phoneNumber = "+7 705 899 9696";
const whatsappLink = "https://wa.me/77058999696";

const services = [
  {
    title: "Лазерные картриджи",
    desc: "Заправка, восстановление, замена чипов. Гарантия плотной заливки и ресурса как у оригинала.",
    badge: "до 30 мин",
  },
  {
    title: "Струйные картриджи",
    desc: "Промывка, замена чернил, цветокор. Используем пигментные и водорастворимые чернила премиум‑класса.",
    badge: "чистые печатающие головки",
  },
  {
    title: "Офисное обслуживание",
    desc: "Регулярный выезд мастера, контроль расходников, профилактика принтеров и МФУ без простоев.",
    badge: "выгодные абонементы",
  },
];

const steps = [
  "Свяжитесь по телефону или WhatsApp — подскажем цену и срок.",
  "Курьер забирает картриджи, выдаём коробку‑трей для перевозки.",
  "Заправка и тестовая печать на стенде, фото отчёт.",
  "Доставка обратно, чек и гарантия ресурса.",
];

const prices = [
  { name: "Лазерный ч/б", note: "HP / Canon / Samsung", price: "по договоренности" },
  { name: "Лазерный цветной", note: "CMYK комплект", price: "по договоренности" },
  { name: "Струйный", note: "Промывка + чернила", price: "по договоренности" },
  { name: "Абонемент", note: "10 заправок в месяц", price: "условия согласуем" },
];

function Pill({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-mist">
      <SparklesIcon className="h-4 w-4 text-amber" />
      {children}
    </span>
  );
}

function Card({ title, desc, badge }) {
  return (
    <div className="glass relative h-full rounded-2xl p-6 shadow-xl shadow-black/20">
      <div className="absolute right-4 top-4 rounded-full bg-amber/20 px-3 py-1 text-xs text-amber">
        {badge}
      </div>
      <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
      <p className="text-sm text-mist leading-relaxed">{desc}</p>
    </div>
  );
}

function PriceCard({ name, note, price }) {
  return (
    <div className="glass flex h-full flex-col justify-between rounded-2xl p-5">
      <div>
        <p className="text-lg font-semibold text-white">{name}</p>
        <p className="text-sm text-mist mt-1">{note}</p>
      </div>
      <p className="mt-4 text-2xl font-semibold text-amber">{price}</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-ink via-[#0b1324] to-[#0a1020]">
      <div className="bg-noise" aria-hidden />
      <div className="gradient-ring ring-purple" aria-hidden />
      <div className="gradient-ring ring-emerald" aria-hidden />
      <div className="gradient-ring ring-amber" aria-hidden />

      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 pt-10">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 shadow-glow">
            <SparklesIcon className="h-6 w-6 text-amber" />
          </div>
          <div>
            <p className="text-sm text-mist">Сервис картриджей</p>
            <p className="text-lg font-semibold text-white">OmarPrint.com</p>
          </div>
        </div>
        <div className="hidden items-center gap-3 md:flex">
          <a
            className="glass inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm text-white"
            href={`tel:${phoneNumber.replace(/\\s+/g, "")}`}
          >
            <PhoneIcon className="h-4 w-4 text-emerald" />
            {phoneNumber}
          </a>
          <a
            className="inline-flex items-center gap-2 rounded-xl bg-emerald px-4 py-2 text-sm font-semibold text-ink shadow-glow"
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
          >
            <ChatBubbleLeftRightIcon className="h-4 w-4" />
            WhatsApp
          </a>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-6xl px-6 pb-16 pt-6">
        <section className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-7">
            <Pill>Заправка картриджей с доставкой</Pill>
            <h1 className="text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
              Печать без простоев: выезд, заправка, гарантия ресурса.
            </h1>
            <p className="max-w-2xl text-lg text-mist">
              Работаем по Астане и области. Заберём, заправим по стандартам производителей, протестируем на стенде и
              вернём с результатами печати. Никаких скрытых доплат.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald px-5 py-3 text-base font-semibold text-ink shadow-glow transition hover:-translate-y-0.5"
              >
                <ChatBubbleLeftRightIcon className="h-5 w-5" />
                Написать в WhatsApp
              </a>
              <a
                href={`tel:${phoneNumber.replace(/\\s+/g, "")}`}
                className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-base font-semibold text-white transition hover:-translate-y-0.5"
              >
                <PhoneIcon className="h-5 w-5 text-amber" />
                Позвонить: {phoneNumber}
              </a>
            </div>
            <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
              {[
                "Отчёт фото/видео после заправки",
                "Оригинальные тонеры и чернила премиум",
                "Повторный выезд бесплатно, если что-то не так",
              ].map((item) => (
                <div key={item} className="glass rounded-xl px-4 py-3 text-sm text-mist">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="glass relative overflow-hidden rounded-3xl border border-white/5 p-6 shadow-glow">
            <div className="absolute -left-8 -top-10 h-36 w-36 rounded-full bg-emerald/20 blur-3xl" />
            <div className="absolute -bottom-14 -right-8 h-40 w-40 rounded-full bg-amber/20 blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl bg-white/10" />
                <div>
                  <p className="text-sm text-mist">Статус заказа</p>
                  <p className="text-white">Курьер выехал</p>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                {steps.map((text, i) => (
                  <div key={text} className="flex items-start gap-3">
                    <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-emerald/20 text-sm font-semibold text-emerald">
                      {i + 1}
                    </div>
                    <p className="text-sm text-mist">{text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-amber">Контакт</p>
                <p className="mt-1 text-lg font-semibold text-white">{phoneNumber}</p>
                <p className="text-sm text-mist">WhatsApp • звонок • заявки 24/7</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 space-y-6">
          <div className="flex items-center justify-between gap-4">
            <h2 className="section-title">Что делаем</h2>
            <Pill>Чистая печать без полос</Pill>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} {...service} />
            ))}
          </div>
        </section>

        <section className="mt-16 space-y-6">
          <div className="flex items-center justify-between gap-4">
            <h2 className="section-title">Цены и условия</h2>
            <Pill>Прозрачно и без скрытых доплат</Pill>
          </div>
          <div className="grid gap-5 md:grid-cols-4 sm:grid-cols-2">
            {prices.map((item) => (
              <PriceCard key={item.name} {...item} />
            ))}
          </div>
          <p className="text-sm text-mist">
            Точная стоимость зависит от модели картриджа и состояния. Скажем цену перед выездом и не меняем её без
            вашего согласия.
          </p>
        </section>

        <section className="mt-16">
          <div className="glass relative overflow-hidden rounded-3xl border border-white/5 px-6 py-8 sm:px-10 sm:py-12">
            <div className="absolute -left-10 top-0 h-64 w-64 rotate-12 bg-gradient-to-br from-emerald/30 via-amber/30 to-accent/40 blur-3xl" />
            <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl space-y-3">
                <h3 className="text-2xl font-semibold text-white">Нужна срочная заправка?</h3>
                <p className="text-mist">
                  Оставьте заявку — отвечаем за пару минут, согласуем время и отправим курьера. Без офисного визита, без
                  очередей.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-amber px-5 py-3 text-base font-semibold text-ink shadow-glow transition hover:-translate-y-0.5"
                >
                  <ChatBubbleLeftRightIcon className="h-5 w-5" />
                  Написать
                </a>
                <a
                  href={`tel:${phoneNumber.replace(/\\s+/g, "")}`}
                  className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-base font-semibold text-white transition hover:-translate-y-0.5"
                >
                  <PhoneIcon className="h-5 w-5 text-emerald" />
                  {phoneNumber}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 mx-auto max-w-6xl px-6 pb-10 pt-6">
        <div className="glass flex flex-col gap-3 rounded-2xl px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-white font-semibold">OmarPrint.com · заправка картриджей</p>
            <p className="text-sm text-mist">Работаем без адреса офиса — выезд и доставка по вашему запросу.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${phoneNumber.replace(/\\s+/g, "")}`}
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm text-white"
            >
              <PhoneIcon className="h-4 w-4 text-amber" />
              {phoneNumber}
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald px-4 py-2 text-sm font-semibold text-ink"
            >
              <ChatBubbleLeftRightIcon className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
